import React, {useState} from 'react'
import {Img,Column2,ImgWrap,ResultContainer} from '../Result/ResultElements'
import Spinner from '../Spinner/Spinnerindex'
const Result = (alt) => {
    //{loading ? <Spinner /> : }
    const [loading,setLoading] = useState(true);
    return (
        <ResultContainer>
         <Column2>
                <ImgWrap>
                    <Spinner/> 
                     <Img src={require('../../images/output.svg').default} alt={alt} />
                </ImgWrap>
         </Column2>
         </ResultContainer>
    )
}

export default Result
