import Head from 'next/head'
import Layout from '../src/components/layout/Layout'
import MainBanner from '../src/components/mainBanner/MainBanner'
import Navbar from '../src/components/navbar/Navbar'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
    </Layout>
  )
}
