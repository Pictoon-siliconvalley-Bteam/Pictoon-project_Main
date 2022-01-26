import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Column2,ImgWrap,ResultContainer,Heading,Subtitle} from '../Result/ResultElements'
import Spinner from '../Spinner/Spinnerindex'

export default function Result({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,alt}){
    const [image,setImage] = useState([]);
    const [loading,setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    },20000); //1000초당 1초
   
    return (
        <ResultContainer>
         <Column2>
                <ImgWrap>
                {loading ? <Spinner /> :
                   <>
                   <Heading lightText={lightText}>{headLine}</Heading>
                   <Subtitle darkText={darkText}>{description}</Subtitle>
                   <Link to='//solsea.io/create'>Go to NFT Market </Link>
                   <br/><br/>
                   <img src="https://fictoonimage.s3.ap-northeast-2.amazonaws.com/out"
                            width="600px"
                            height="500px" />
                        </> }
                </ImgWrap>
         </Column2>
         </ResultContainer>
    )
}

