import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

export const SearchBooks: React.FC = () => {
  const [text, setText] = useState('')

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <Wrapper>
      <Body>
        <Title>Search Books with Google Books API!</Title>

        <TextArea placeholder='テキストを入力してね！' onChange={handleChangeText} />

        <TextResult>{text}</TextResult>
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Body = styled.div``

const Title = styled.h1`
  text-align: center;
`

const TextArea = styled.textarea`
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  width: 200px;
`

const TextResult = styled.p`
  width: 200px;
  padding: 10px;
  margin: 20px auto;
  border: 1px solid blue;
  white-space: pre-wrap;
  box-sizing: border-box;
`
