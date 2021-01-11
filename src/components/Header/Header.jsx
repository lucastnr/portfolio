import React from 'react'
import styled, { css } from 'styled-components'
import Font from '../Font/Font'
import colors from '../../styles/colors'

function findPosition(obj) { 
  var currenttop = 0; 
  if (obj.offsetParent) { 
      do { 
          currenttop += obj.offsetTop; 
      } while ((obj = obj.offsetParent)); 
      return [currenttop]; 
  } 
} 

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: ${colors.blue};
  width: calc(100vw - 76px);
`

const HeaderInnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
`

const titleCss = css`
  font-size: 24px;
`

const Nav = styled.nav`
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  width: 320px;
`

const menuLinkCss = css`
  font-size: 16px;
`

const MenuLink = (props) => {
  const { children, goto } = props

  const handleMenuLink = () => {
    window.scroll({
        top: findPosition(document.getElementById(goto)),
        behavior: 'smooth'
      }
    )
  }

  return (
    <Font
      onClick={handleMenuLink}
      css={menuLinkCss}
    >
      {children}
    </Font>
  )
}

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderInnerContainer>
        <Font css={titleCss}>{"{LucasTenório}"}</Font>
        <Nav>
          <MenuLink goto={'home-page'}>Home</MenuLink>
          <MenuLink>Sobre mim</MenuLink>
        </Nav>
      </HeaderInnerContainer>
    </HeaderStyled>
  )
}
