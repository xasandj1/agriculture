import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from "../Header"
import { Footer } from '../Footer'
export const MainLayout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
