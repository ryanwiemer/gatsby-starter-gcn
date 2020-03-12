import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import LogoSVG from '../icons/logo'
import PageTitle from './PageTitle'
import Phone from '../icons/phone'
import Map from '../icons/map'
import Container from './Container'



const Nav = styled.nav`
  width: 100%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, #000000 100%);
	padding: 0 ${props => props.theme.sizes.containerPadding};
  width: 100%;
  margin: 0 auto;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    display: inline-block;
    margin-left: 0;
  }
  a {
    text-decoration: none;
		font-family: ${props => props.theme.fonts.navBar};
    color:  ${props => props.theme.colors.textWhite};
    font-weight: 600;
		font-size: 14px;
		line-height: 20px;
		font-weight: normal;
		letter-spacing: 0.03em;
    transition: all 0.2s ease;
		padding: 27px 14px;
		border-top: 3px solid transparent;
		display: block;
		width: max-content;
    &:hover {
			transition: all 0.2s ease;
			border-top: 3px solid ${props => props.theme.colors.accent};
      color:  ${props => props.theme.colors.accent};
    }
  }
`
const Circle = styled.span`
	visibility: hidden;
	color: ${props => props.theme.colors.accent};
`


const Logo = () => 
	<div className="logoBlock">
		<a href="/" className="logo"><LogoSVG/></a>
		<div className='logoLinks'>
			<div className="phone"><Phone/><a href="tel:+89999990000">8 999 999 00-00</a></div>
			<div className="adress"><Map/><span>Санкт-Петербург, ул. Беломорская 14А</span></div>
		</div>
	</div>



const Menu = () => {
  return (
      <Nav>
				<Logo/>
        <ul>
            <li key={1}>
              <Link to='/about' activeClassName="active">
                О Нас <Circle>●</Circle>
              </Link>
            </li>
            <li key={2}>
              <Link to='/online' activeClassName="active">
								Онлайн-запись <Circle>●</Circle>
							</Link>
            </li>
            <li key={3}>
              <Link to='/online' activeClassName="active">
								Услуги <Circle>●</Circle>
							</Link>
            </li>
            <li key={4}>
              <Link to='/online' activeClassName="active">
								Контакты <Circle>●</Circle>
							</Link>
            </li>
        </ul>
      </Nav>
  )
}

export default Menu
