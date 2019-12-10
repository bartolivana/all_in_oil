import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import BtnMenu from './img/BtnMenu.svg'
import BtnClose from './img/BtnClose.svg'

export default function Navigation({ navIsOpen, toggleNavOpen }) {
  const openEffect = navIsOpen ? ' nav-open ' : ''

  return (
    <NavigationStyled className={openEffect}>
      <NavToggle onClick={toggleNavOpen}>
        <Burger>
          {navIsOpen ? (
            <img src={BtnClose} alt="" width="50px" height="50px" />
          ) : (
            <img src={BtnMenu} alt="" width="50px" height="50px" />
          )}
        </Burger>
      </NavToggle>
      <NavList>
        <NavItem to="/add_photo" onClick={toggleNavOpen}>
          Add Photo
        </NavItem>
        <NavItem to="/create" onClick={toggleNavOpen}>
          Add new Evaluation
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
  transform: translateX(-100%);
  background: none;
  border: 0;
`

const Burger = styled.div`
  position: relative;
  font-size: 30px;
  border: 0;
  cursor: default;
  background: none;
  margin: 0;
  padding: 0;
  left: -20px;
  top: 5px;
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
