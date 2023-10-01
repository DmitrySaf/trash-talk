import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import editIcon from './assets/edit.svg'
import moreIcon from './assets/more-horizontal.svg'
import searchIcon from './assets/search.svg'
import sendIcon from './assets/send.svg'

import * as Styled from './styled'

export function Window() {
  const [messageText, setMessageText] = useState('')
  const [messages, setMessages] = useState([])
  const { username } = useParams()
  const socket = useRef()
  const contentEditable = useRef()

  function sendMessage() {
    const date = new Date().toISOString()
    const message = {
      date,
      username,
      message: messageText,
      id: uuidv4(),
      event: 'message',
      chatId: '6519c6e9b9c64235f8226828'
    }
    socket.current.send(JSON.stringify(message))
    setMessageText('')
  }

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:5000/api')

    socket.current.onopen = () => {
      console.log('open')
      const message = {
        event: 'connection',
        id: uuidv4(),
        username,
        chatId: '6519c6e9b9c64235f8226828'
      }

      socket.current.send(JSON.stringify(message))
    }
    socket.current.onmessage = (event) => {
      console.log('message')
      const messages = JSON.parse(event.data)

      setMessages(messages)
    }

    socket.current.onclose = () => {
      console.log('Socket закрыт')
    }

    socket.current.onerror = () => {
      console.log('Socket ошибка')
    }
  }, [])

  function isSelf(msg: any) {
    return msg.username === username
  }

  return (
    <Styled.Window>
      <Styled.Header>
        <Styled.Left>
          <Styled.Circle />
          <Styled.Circle />
          <Styled.Circle />
        </Styled.Left>
        <Styled.Center>
          Tsumi Kumi
          <Styled.Status>online</Styled.Status>
        </Styled.Center>
        <Styled.Right>
          <img src={editIcon} />
          <img src={moreIcon} />
          <img src={searchIcon} />
        </Styled.Right>
      </Styled.Header>
      <Styled.MessagesWindow>
        {messages.map((msg, i) => {
          console.log(msg)
          if (msg.text !== '' && msg.text !== null && msg.text !== undefined) {
            return (
              <Styled.MessageItem $self={isSelf(msg)} key={msg._id}>
                {msg.text}
              </Styled.MessageItem>
            )
          }
        })}
      </Styled.MessagesWindow>
      <Styled.Footer>
        <Styled.Message
          innerRef={contentEditable}
          html={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <Styled.SendButton src={sendIcon} onClick={sendMessage} role="button" />
      </Styled.Footer>
    </Styled.Window>
  )
}
