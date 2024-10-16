import React, { useState } from 'react';
import styled from 'styled-components'

const Label = styled.label<{ inputHasText: boolean }>`
  position: absolute;
  pointer-events: none;
  transform: translate(0, 18px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: #6f81a5;
  font-size: 16px;
  line-height: 1;
  left: 16px;

  ${({ inputHasText }) => 
    inputHasText && 
    `
      transform: translate(-8px, 8px) scale(0.6);
      color: black;
    `
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50px;

  &:focus-within ${Label} {
    transform: translate(-8px, 8px) scale(0.6);
    color: black;
  }
`

const Input = styled.input`
  height: 60px;
  padding: 8px;
  padding-top: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px 0px black;
  background-color: white;
  color: black;
  
  &:focus {
    outline: none;
  }
`

const TextInput = ({ label, name, type = 'text', required }: { label?: string; name: string; type?: string; required?: boolean}) => {
  const [inputText, setInputText] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <Container>
      <Input aria-label={name} type={type} name={name} required={required} onChange={onChange}/>
      <Label inputHasText={!!inputText.length}>{label}</Label>
    </Container>
  )
}

export default TextInput

