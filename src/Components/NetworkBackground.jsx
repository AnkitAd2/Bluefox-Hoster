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
    const FRAME_INTERVAL = 1000 / 30
    const ANCHOR_LENGTH = 20
    const MOUSE_RADIUS = 220
    const hardwareConcurrency = navigator.hardwareConcurrency || 0
    const deviceMemory = navigator.deviceMemory || 0
    const connection = navigator.connection
    const lowPowerDevice =
      (hardwareConcurrency > 0 && hardwareConcurrency <= 4) ||
      (deviceMemory > 0 && deviceMemory <= 4) ||
      Boolean(connection && connection.saveData)
    const mobileQuery = window.matchMedia('(max-width: 639px)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let staticBackground = mobileQuery.matches || reducedMotionQuery.matches || lowPowerDevice
    const circ = 2 * Math.PI
    let nodes = []
    let lastFrameTime = 0
    let mouse = { x: 0, y: 0 }

    const resizeWindow = () => {
      if (canvas.width !== window.innerWidth) canvas.width = window.innerWidth
      if (canvas.height !== window.innerHeight) canvas.height = window.innerHeight
    }

    resizeWindow()
    mouse.x = canvas.width / 2
    mouse.y = canvas.height / 2

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
      const density = window.innerWidth < 640 ? 90 : 70
      for (let i = density; i < canvas.width; i += density) {
        for (let j = density; j < canvas.height; j += density) {
          nodes.push(new Node(i, j))
          NODES_QTY++
        }
      }
    }

    function calcDistance(node1, node2) {
      return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2))
    }

    function findSiblings() {
      const cells = new Map()
      const cellCoordinate = (value) => Math.floor(value / SENSITIVITY)

      for (const node of nodes) {
        const key = `${cellCoordinate(node.x)},${cellCoordinate(node.y)}`
        const cell = cells.get(key)
        if (cell) cell.push(node)
        else cells.set(key, [node])
      }

      const sensitivitySquared = SENSITIVITY * SENSITIVITY
      for (const node1 of nodes) {
        node1.siblings = []
        const cellX = cellCoordinate(node1.x)
        const cellY = cellCoordinate(node1.y)

        for (let x = cellX - 1; x <= cellX + 1; x++) {
          for (let y = cellY - 1; y <= cellY + 1; y++) {
            const cell = cells.get(`${x},${y}`)
            if (!cell) continue

            for (const node2 of cell) {
              if (node1 === node2) continue
              const dx = node1.x - node2.x
              const dy = node1.y - node2.y
              const distanceSquared = dx * dx + dy * dy
              if (distanceSquared >= sensitivitySquared) continue

              if (node1.siblings.length < SIBLINGS_LIMIT) {
                node1.siblings.push(node2)
                continue
              }

              let farthestIndex = 0
              let farthestDistanceSquared = 0
              for (let i = 0; i < node1.siblings.length; i++) {
                const sibling = node1.siblings[i]
                const siblingX = node1.x - sibling.x
                const siblingY = node1.y - sibling.y
                const siblingDistanceSquared = siblingX * siblingX + siblingY * siblingY
                if (siblingDistanceSquared > farthestDistanceSquared) {
                  farthestDistanceSquared = siblingDistanceSquared
                  farthestIndex = i
                }
              }
              if (distanceSquared < farthestDistanceSquared) {
                node1.siblings[farthestIndex] = node2
              }
            }
          }
        }
      }
    }

    function drawScene() {
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
    }

    function redrawScene(timestamp) {
      animationFrameId = null
      if (timestamp - lastFrameTime >= FRAME_INTERVAL) {
        drawScene()
        lastFrameTime = timestamp
      }
      if (!staticBackground && document.visibilityState === 'visible') {
        animationFrameId = requestAnimationFrame(redrawScene)
      }
    }

    function startAnimation() {
      if (!staticBackground && document.visibilityState === 'visible' && animationFrameId == null) {
        animationFrameId = requestAnimationFrame(redrawScene)
      }
    }

    const handleResize = () => {
      const wasStatic = staticBackground
      staticBackground = mobileQuery.matches || reducedMotionQuery.matches || lowPowerDevice
      resizeWindow()
      initNodes()
      drawScene()
      if (!wasStatic && staticBackground && animationFrameId != null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      }
      startAnimation()
    }
    const handleMouseMove = (e) => {
      if (staticBackground) return
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && animationFrameId != null) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = null
      } else {
        startAnimation()
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    mobileQuery.addEventListener('change', handleResize)
    reducedMotionQuery.addEventListener('change', handleResize)

    initNodes()
    drawScene()
    startAnimation()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      mobileQuery.removeEventListener('change', handleResize)
      reducedMotionQuery.removeEventListener('change', handleResize)
      if (animationFrameId != null) cancelAnimationFrame(animationFrameId)
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