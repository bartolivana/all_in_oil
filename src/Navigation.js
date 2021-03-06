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
            <img
              src={BtnClose}
              alt="closing menu button"
              width="50px"
              height="50px"
            />
          ) : (
            <img src={BtnMenu} alt="menu button" width="50px" height="50px" />
          )}
        </Burger>
      </NavToggle>
      <NavList>
        <NavItem to="/" onClick={toggleNavOpen}>
          Add Photo
        </NavItem>
        <NavItem to="/create_evaluation" onClick={toggleNavOpen}>
          Add new Evaluation
        </NavItem>
        <NavItem to="/list" onClick={toggleNavOpen}>
          Your oils{' '}
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
  opacity: 0.95;
  height: 100vh;
  transform: translateX(100%);
  transition: transform 500ms cubic-bezier(0.5, 0, 0.5, 1);
  background: linear-gradient(0.3turn, #f5f5f5, #f5f5f5, #f5f5f5);
  z-index: 50;
  border-radius: 20px;

  &.nav-open {
    right: 0;
    transform: translateX(0);
  }
`

const NavToggle = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  background: none;
  border: 0;
  top: 60px;
  left: -30px;
`

const Burger = styled.div`
  position: absolute;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 50px;
  padding: 0;
  height: 100vh;
  width: 200px;
`

const NavItem = styled(Link)`
  margin-bottom: 50px;
  text-decoration: none;
  color: #333;
`
