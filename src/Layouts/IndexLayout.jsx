import React from 'react'
import Header from '../Pages/Header/Header'


import FooterPage from '../Pages/FooterPage/FooterPage'
import HeroPage from '../Pages/HeroPage/HeroPage'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <HeroPage />
            <FooterPage />

        </div>
    )
}
