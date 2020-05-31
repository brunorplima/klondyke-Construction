import Head from 'next/head'
import Layout from '../src/components/layout/Layout';
import MainBanner from '../src/components/mainBanner/MainBanner'

export default function Home() {
  return (
    <Layout>
      <MainBanner />
    </Layout>
  )
}
