import React, { useEffect, useRef } from 'react'

const NetworkBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let NODES_QTY = 0
    const SENSITIVITY = 100
    const SIBLINGS_LIMIT = 10
    const DENSITY = 55
    const ANCHOR_LENGTH = 20
    const MOUSE_RADIUS = 220
    const circ = 2 * Math.PI
    let nodes = []
    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    }

    const resizeWindow = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeWindow()

    function Node(x, y) {
      this.anchorX = x
      this.anchorY = y
      this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH)
      this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH)
      this.vx = Math.random() * 2 - 1
      this.vy = Math.random() * 2 - 1
      this.energy = Math.random() * 100
      this.radius = Math.random()
      this.siblings = []
      this.brightness = 0
    }

    Node.prototype.drawNode = function () {
      const color = "rgba(27, 117, 231, " + (this.brightness * 1.2) + ")"
      ctx.beginPath()
      ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, circ)
      ctx.fillStyle = color
      ctx.fill()
    }

    Node.prototype.drawConnections = function () {
      for (let i = 0; i < this.siblings.length; i++) {
        const color = "rgba(59, 130, 246, " + (this.brightness * 0.7) + ")"
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.siblings[i].x, this.siblings[i].y)
        ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY
        ctx.strokeStyle = color
        ctx.stroke()
      }
    }

    Node.prototype.moveNode = function () {
      this.energy -= 2
      if (this.energy < 1) {
        this.energy = Math.random() * 100
        if (this.x - this.anchorX < -ANCHOR_LENGTH) {
          this.vx = Math.random() * 2
        } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
          this.vx = Math.random() * -2
        } else {
          this.vx = Math.random() * 4 - 2
        }
        if (this.y - this.anchorY < -ANCHOR_LENGTH) {
          this.vy = Math.random() * 2
        } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
          this.vy = Math.random() * -2
        } else {
          this.vy = Math.random() * 4 - 2
        }
      }
      this.x += (this.vx * this.energy) / 100
      this.y += (this.vy * this.energy) / 100
    }

    function initNodes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes = []
      NODES_QTY = 0
      for (let i = DENSITY; i < canvas.width; i += DENSITY) {
        for (let j = DENSITY; j < canvas.height; j += DENSITY) {
          nodes.push(new Node(i, j))
          NODES_QTY++
        }
      }
    }

    function calcDistance(node1, node2) {
      return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2))
    }

    function findSiblings() {
      let node1, node2, distance
      for (let i = 0; i < NODES_QTY; i++) {
        node1 = nodes[i]
        node1.siblings = []
        for (let j = 0; j < NODES_QTY; j++) {
          node2 = nodes[j]
          if (node1 !== node2) {
            distance = calcDistance(node1, node2)
            if (distance < SENSITIVITY) {
              if (node1.siblings.length < SIBLINGS_LIMIT) {
                node1.siblings.push(node2)
              } else {
                let max_distance = 0
                let s = 0
                for (let k = 0; k < SIBLINGS_LIMIT; k++) {
                  const node_sibling_distance = calcDistance(node1, node1.siblings[k])
                  if (node_sibling_distance > max_distance) {
                    max_distance = node_sibling_distance
                    s = k
                  }
                }
                if (distance < max_distance) {
                  node1.siblings.splice(s, 1)
                  node1.siblings.push(node2)
                }
              }
            }
          }
        }
      }
    }

    function redrawScene() {
      resizeWindow()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      findSiblings()
      let i, node, distance
      for (i = 0; i < NODES_QTY; i++) {
        node = nodes[i]
        distance = calcDistance({ x: mouse.x, y: mouse.y }, node)
        if (distance < MOUSE_RADIUS) {
          node.brightness = 1 - distance / MOUSE_RADIUS
        } else {
          node.brightness = 0
        }
      }
      for (i = 0; i < NODES_QTY; i++) {
        node = nodes[i]
        if (node.brightness) {
          node.drawNode()
          node.drawConnections()
        }
        node.moveNode()
      }
      animationFrameId = requestAnimationFrame(redrawScene)
    }

    const handleResize = () => resizeWindow()
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    initNodes()
    redrawScene()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      // Changed from bg-[#f7fbff] to bg-transparent so the network mesh shows through all sections
      className="fixed inset-0 z-[-1] h-full w-full bg-transparent pointer-events-none overflow-hidden"
    />
  )
}

export default NetworkBackground