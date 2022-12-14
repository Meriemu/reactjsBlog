import styled from 'styled-components'
import { Link  as LinkRouter} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #FFF;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 0;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
   font-size: 14px;
   margin-bottom: 16px;
`
export const FooterLink = styled(LinkRouter)`
   color: #FFF;
   text-decoration: none;
   margin-bottom: auto .5rem;
   font-size: 14px;

   &:hover {
    color: #01bf71;
    transition: .3s ease-out;
   }
`


export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1100px;
   margin: 40px auto 0 auto;

   @media screen and (max-width: 820px) {
        flex-direction: column;
   }
`

export const SocialLogo = styled(LinkRouter)`
    color: #FFF;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const LogoImg = styled.img`
    color: #FFF;
    width: 50px;
    height: 50px;
`
export const WebsiteRights = styled.small`
    color: #FFF;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: 240px; */
    margin-bottom: 16px;
`

export const SocialIconLink = styled.a`
    color: #FFF;
    font-size: 18px;
    background: rgba(255,255,255,0.1);
	
	transition: transform ease-out 0.1s, background 0.2s;
    max-width: 50px;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    border-radius: 50%;
    position: relative;

    svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &::after {
        top: 0;
        left: 0;
        padding: 0;
        z-index: -1;
        box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
        opacity: 0;
        transform: scale(0.9);
    }
    &:hover {
        background: rgba(255,255,255,0.05);
        transform: scale(0.93);
        color: #fff;

        &::after {
            content: '';
            pointer-events: none;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-sizing: content-box;
            animation: sonarEffect 1.3s ease-out 5ms;
        }
    }

    @keyframes sonarEffect {
        0% {
            opacity: 0.3;
        }
        40% {
            opacity: 0.5;
            box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 5px 5px #3851bc, 0 0 0 5px rgba(255,255,255,0.5);
        }
        100% {
            box-shadow: 0 0 0 5px rgba(255,255,255,1), 0 0 5px 5px #3851bc, 0 0 0 5px rgba(255,255,255,1);
            transform: scale(1.5);
            opacity: 0;
        }
    }
`

