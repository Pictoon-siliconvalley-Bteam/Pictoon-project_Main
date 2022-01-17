import React from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'
import {Button} from '../ButtonElement'
import Fade from "react-reveal/Fade"
import { InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img,IntroBlock } from './InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,ButtonLabel,alt,primary,dark,dark2}) => {
    return (
        <>
        <Fade bottom>
          <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                    <IntroBlock>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            
                            <BtnWrap>
                                <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{ButtonLabel}START</Button>
                         </BtnWrap>
                         
                         </IntroBlock>
                    </TextWrapper>
                </Column1> 
                <Column2>
                    <ImgWrap>
                    <Img src={require('../../images/svg-3.svg').default} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>   
          </InfoWrapper>    
          </InfoContainer> 
          </Fade>    
        </>
    )
}

export default InfoSection
