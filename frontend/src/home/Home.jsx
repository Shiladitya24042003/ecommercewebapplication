import React from 'react'
import Navbar from '../components/Navbar'
import Bnner from '../components/Bnner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import PreFooter from '../components/PreFooter'

function Home() {
    return (
        <>
            <Navbar />
            <Bnner />
            <Freebook />
            <PreFooter/>
            <Footer />
        </>
    )
}

export default Home