import React,{useState} from 'react'
import video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper} from './HeroElements'

const HeroSection = () => {
    const [hover,setHover]= useState(false)
    const onHover = ()=> {
        setHover(!hover)
    }
    
    return (
        
        <HeroContainer>
            <HeroBg></HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'>
                <source src="\videos\video.mp4" />
                </VideoBg>
            <HeroContent>
                <br/>  <br/>  <br/>
                <HeroH1>Upload your photos</HeroH1>
                <HeroP>
                   배경사진과 얼굴사진을 업로드 해보세요!
                </HeroP>
                <HeroBtnWrapper>
                  <a href={"api"}>
                     START
                  </a>

                </HeroBtnWrapper>   
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
