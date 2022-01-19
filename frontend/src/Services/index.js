import React from 'react'
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements'
import Icon1  from  '../Services/svg-5.svg'
import Icon2  from  '../Services/svg-6.svg'
import Icon3  from  '../Services/svg-8.svg'
const Services = () => {
    return (
 
        
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Create</ServicesH2>
                    <ServicesP>어디서든 얼굴사진과 배경사진을 사용하여 직접 상상하고 작품으로 만들어보세요! </ServicesP>
                </ServicesCard>
                <ServicesCard>
                     <ServicesIcon src={Icon2}/>
                    <ServicesH2>Download</ServicesH2>
                    <ServicesP> 완성된 이미지는 무료로 다운로드하여 개인적으로 사용할 수 있습니다! </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Upload</ServicesH2>
                    <ServicesP> 이미지들을 업로드하여 멋있는 사진을 만들어  NFT Market에 올려보세요!</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
     
    )
}

export default Services
