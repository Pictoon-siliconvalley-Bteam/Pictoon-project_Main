import React, {useState} from 'react'
import {Img,Column2,ImgWrap,ResultContainer} from '../Result/ResultElements'
import Spinner from '../Spinner/Spinnerindex'
import output from '../../images/output-1.png'
const Result = (alt) => {
    //{loading ? <Spinner /> : }
    const [loading,setLoading] = useState(true);
    return (
        <ResultContainer>
         <Column2>
                <ImgWrap>
                    <Spinner/> 
                     <Img src={output} alt='output'/>
                </ImgWrap>
         </Column2>
         </ResultContainer>
    )
}

export default Result
