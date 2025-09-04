import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import HeroSection from '../Sections/HeroSection'
import ClientsSection from '../Sections/ClientSection'
import StatsSection from '../Sections/StatsSection'
import BlogSection from '../Sections/BlogSection'
import { ThemeProvider } from '../Context/ThemeContext';

const Home = () => {
  return (
    <div>
    <ThemeProvider>
      <Navbar/>
      <HeroSection/>
      <ClientsSection/>
      <StatsSection/>
      <BlogSection/>
      <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default Home
