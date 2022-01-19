import styled from 'styled-components'

export const ResultContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; 

    @media screen and (max-width: 1800px){
        padding: 100px 0;
    }
`

export const Column2 =styled.div`
    padding: 0 15px;
    grid-area: col2;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    display: block; margin: auto; 
`
export const Img = styled.img`
    width: 100%;
    
 
`

