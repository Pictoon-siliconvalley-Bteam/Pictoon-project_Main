import React, {useState} from 'react'
import Footer from '../components/Footer'
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
            <ResultPage/>
            <Footer/>
        </>
    )
}
export default Result