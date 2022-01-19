import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../Services'


const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/> 
            <Services/>
            <Footer/>
            
        </>
    )
}
export default Home