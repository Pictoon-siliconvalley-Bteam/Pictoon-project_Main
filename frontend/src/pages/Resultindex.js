import React, {useState} from 'react'
import Footer from '../components/Footer'
import {ResultObjOne} from '../components/Result/Data'
import Navbar from '../components/Navbar'
import ResultPage from '../components/Result/Resultpage'


const Result = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <ResultPage {...ResultObjOne}/>
            <Footer/>
        </>
    )
}
export default Result