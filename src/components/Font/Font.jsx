import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-family: 'Open Sans', sans-serif;
letter-spacing: -0.3px;
color: white;

${({ css }) => css && css}
`

export default function FontTitle(props) {
  return (
    <Title {...props}>
      {props.children}
    </Title>
  )
}
