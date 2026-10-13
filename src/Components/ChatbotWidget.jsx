import React from 'react'
import { Webchat, WebchatProvider } from '@botpress/webchat'
import BlueFoxLogo from '../assets/blue_fox_hoster_full.svg'

const ChatbotWidget = () => {
  return (
    <WebchatProvider
      client={{
        clientId: '96d911d3-a6cc-482e-b89e-4e547741007b',
      }}
      configuration={{
        botName: 'Bluefox Hoster',
        botAvatar: BlueFoxLogo, // Displays your custom logo inside the chat header & message avatar
        botDescription: '24/7 Hosting & Infrastructure Support',
        composerPlaceholder: 'Type your message...',
        themeMode: 'light',
      }}
    >
      <Webchat />
    </WebchatProvider>
  )
}

export default ChatbotWidget