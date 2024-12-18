import React from 'react'
import NavBar from '../components/common/header'
import Footer from '../components/common/footer'

interface MainLayoutProps{
    children:React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <div className='relative'>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout
