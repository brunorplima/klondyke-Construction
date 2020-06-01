import { useState } from 'react'
import Head from 'next/head'
import Layout from '../src/components/layout/Layout'
import MainBanner from '../src/components/mainBanner/MainBanner'
import Navbar from '../src/components/navbar/Navbar'
import Features from '../src/components/features/Features'
import OurServices from '../src/components/our-service/OurService'
import FinancialPartner from '../src/components/financial-partner/FinancialPartner'
import Contact from '../src/components/contact/Contact'
import { TiArrowUpOutline } from 'react-icons/ti'

export default function Home(props) {

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0 })
  }

  return (
    
    <Layout>
      <Head>
        <title>Klondyke Construction</title>
      </Head>

      <Navbar />

      <MainBanner />

      <Features />

      <OurServices />

      <FinancialPartner />

      <Contact />

      <div className='goToTop' onClick={() => goToTop()}>
        <TiArrowUpOutline className='arrowUp'/>
      </div>
    </Layout>
  )
}
