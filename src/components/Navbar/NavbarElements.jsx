
import styled from 'styled-components';
import { Link  as LinkRouter} from 'react-router-dom'
import { Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav` 
   background: ${({scrollNav}) => scrollNav ? '#12343b' : 'transparent'};
   height: 80px;
   margin-top: -80px;
   display: flex;
   justify-content: center;
   align-items : center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 10;

   @media screen and (max-width: 960px) {
      transition: .8s all ease;
   }
`

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
   z-index: 1;
`
export const NavLogo = styled(LinkRouter)`
   color: #FFF;
   font-size: 1.5rem;
   display: flex;
   justify-self: flex-start;
   align-items: center;
   margin-left: 24px;
   font-weight: bold;
   text-decoration: none;

`
export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 768px) {
      display: block;
      color: #FFF;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.9rem;
      cursor: pointer;
   }
`
export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 768px) {
      display: none;
   }
`
export const NavItem = styled.li`
   height: 80px;
`
export const NavLinks = styled(LinkScroll)`
   color: #FFF;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   &.active {
      border-bottom: 3px solid #c89666;
   }
`
export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width: 768px) {
      display: none;
   }
`
export const NavBtnLink = styled(LinkRouter)`
   border-radius: 50px;
   background: #c89666;
   white-space: nowrap;
   padding: 8px 25px 10px 25px;
   color: #FFF;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all .2s ease-in-out;
   text-decoration: none;

   &:hover {
      transition: all .2s ease-in-out;
      background: #FFF;
      color: #c89666;
   }
`