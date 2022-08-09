// import Image from 'next/image'
// import Head from '../node_modules/next/head'

import Layout from '../components/Layout'
import CardCategory from '../components/home/CardCategory'
import Banner from '../components/Banner'


export default function Home({ category, bannerIgm }) {
  return (
    <Layout title="home">
      <Banner bannerPath={bannerIgm} />
      <main>
        <h1>
          Welcome anantara body spa *
        </h1>
        <CardCategory category={category} />
      </main>
    </Layout>

  )
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()
  return {
    props: {
      category: data.categories,
      bannerIgm: data.bannerImg
    }
  }
};
