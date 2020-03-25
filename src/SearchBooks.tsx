import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const searchGoogleBooks = async (searchString: string) => {
  const baseURL = 'https://www.googleapis.com/books/v1/volumes'
  const params = { q: searchString }
  try {
    const response = await axios.get(baseURL, { params })
    return { isSuccess: true, data: response.data, error: null }
  } catch (error) {
    return { isSuccess: false, data: null, error }
  }
}

export const SearchBooks: React.FC = () => {
  const [searchString, changeSearchString] = useState('')
  const [searchResult, changeSearchResult] = useState<any>(null)

  const handleOnSearchButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const result = await searchGoogleBooks(searchString)
    if (result.isSuccess) {
      changeSearchResult(result.data)
    } else {
      window.alert(String(result.error))
    }
  }

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    changeSearchString(e.target.value)
  }

  return (
    <Wrapper>
      <Body>
        <Title>Search Books with Google Books API!</Title>

        <SearchForm>
          <Input placeholder='検索ワードを入力してね！' onChange={handleChangeText} />
          <SearchButton onClick={handleOnSearchButton}>検索</SearchButton>
        </SearchForm>
        {searchResult && (
          <ResultContent>
            {searchResult.items.map((item: any) => {
              return <ResultTitle key={item.id}>{item.volumeInfo.title}</ResultTitle>
            })}
          </ResultContent>
        )}
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Body = styled.div``

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 250px;
  font-size: 18px;
  padding: 10px;
  outline: none;
`

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const SearchButton = styled.button`
  color: #fff;
  background-color: #09d3ac;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  transition: 0.4s;
  cursor: pointer;
  &:disabled {
    background-color: #bfbfbf;
    cursor: not-allowed;
  }
`

const ResultContent = styled.div`
  margin-top: 20px;
`

const ResultTitle = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid;
  &:first-of-type {
    border-top: 1px solid;
  }
`
