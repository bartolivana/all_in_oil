import React from 'react'
import styled from 'styled-components/macro'
import HeaderImg from './img/Header.png'
export default function Header() {
  return (
    <HeaderStyled>
      <img
        style={{ width: '100%', height: '50px' }}
        src={HeaderImg}
        alt=""
      ></img>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  position: fixed;
  height: 30px;
  object-fit: cover;
  top: 0;
`
