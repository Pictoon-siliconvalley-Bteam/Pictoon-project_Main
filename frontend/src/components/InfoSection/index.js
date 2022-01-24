import React, { useState,state } from 'react'
import { Link } from 'react-router-dom'
import { InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img,IntroBlock,buttonlink} from './InfoElements'
import Axios from 'axios'


const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,alt}) => {

    const[files, setFiles] = useState('');
    const[files2, setFiles2] = useState('');
    const onLoadFile = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        console.log(file);
        setFiles(file);
    }
    const onLoadFile2 = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        console.log(file);
        setFiles2(file);
    }

    const handleClick = (e) =>{
        const formdata = new FormData();
        formdata.append('files',files);
        formdata.append('files2',files2);
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }


        const config = {
        Headers: {
            'content-type' : 'multipart/form-data',
        },
        };
        Axios.post('api',formdata,config);



        }



    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                    <IntroBlock>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>

                            <label className="input-file-button" for="input-file">
                                얼굴 사진 업로드
                            </label>
                            <input type="file" id="input-file" style={{display:"none"}}
                            accept='image/jpg,impge/png,image/jpeg,image/gif'
                            name='files'

                            onChange={onLoadFile}
                        /> <nbsp/>

                            <label className="input-file-button" for="input-file2">
                                배경 사진 업로드
                            </label>
                           <input type="file" id="input-file2" style={{display:"none"}}
                            accept='image/jpg,impge/png,image/jpeg,image/gif'
                            name='files2'
                            onChange={onLoadFile2}
                           />
                            <br/><br/> <br/>

                            <Link to='/result' onClick={handleClick}>Start</Link>

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

        </>
    )
}

export default InfoSection