import React from 'react'
import { FaYoutube, FaGithub, FaSlack } from 'react-icons/fa'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIconLink,SocialIcons } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    Pictoon
                </SocialLogo>
                <WebsiteRights>Pictoon ⓒ {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://join.slack.com/t/2022siliconva-6kd9406/shared_invite/zt-10yn9ehq9-kNeDt89jmsCqYZh0BrhN6w" target="_blank"
                            aria-label="Slack">
                                <FaSlack/>
                        </SocialIconLink>
                        <SocialIconLink href="//www.Youtube.com" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/Fictoon-siliconvalley-Bteam/Fictoon-project.git" target="_blank"
                            aria-label="Github">
                                <FaGithub/>
                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
