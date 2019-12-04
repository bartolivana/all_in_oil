import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Navigation({ navIsOpen, toggleNavOpen }) {
  const openEffect = navIsOpen ? ' nav-open ' : ''

  return (
    <NavigationStyled className={openEffect}>
      <NavToggle onClick={toggleNavOpen}>
        <Burger>☰</Burger>
      </NavToggle>
      <NavList>
        <NavItem to="/create" onClick={toggleNavOpen}>
          Create
        </NavItem>
        <NavItem to="/list" onClick={toggleNavOpen}>
          List{' '}
        </NavItem>
        <NavItem to="/how_to_taste_olive_oli" onClick={toggleNavOpen}>
          How to taste
        </NavItem>
      </NavList>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  position: fixed;
  right: 0;
  opacity: 0.9;
  height: 100vh;
  transform: translateX(100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0.5, 1);
  background: linear-gradient(0.3turn, #f5f5f5, #f5f5f5, #88994c);
  z-index: 50;
  border-radius: 20px;
  &.nav-open {
    right: 0;
    transform: translateX(0);
  }
`

const NavToggle = styled.button`
  position: absolute;
  top: 35px;
  transform: translateX(-100%);
  background: #fff;
  padding: 
  border: 0;
  border-radius: 
`

const Burger = styled.span`
  display: block;
  position: relative;
  font-size: 30px;
  border: 0;
`

const NavList = styled.ul`
  list-style: none;
  margin: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const NavItem = styled(Link)`
  margin-bottom: 50px;
  text-decoration: none;
  color: #333;
`
