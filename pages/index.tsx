// import Image from 'next/image'
// import Head from '../node_modules/next/head'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import CardCategory from '../components/home/CardCategory'
import AdjectivesCard from '../components/home/AdjectivesCard'
import styles from '../styles/pages/Home.module.css'


export default function Home({ category, bannerIgm, adjectives }) {
  return (
    <Layout>
      <Banner bannerPath={bannerIgm} />
      <main className={styles.container}>
        <section>
          <h2>¿QUIENES SOMOS?</h2>
          <p>En Anantara Body Spa nos especializamos en el
            moldeado de la figura corporal, diseñado y personalizando
            nuestros tratamientos corporales esteticos de acuerdo a las
            necesidades de cada uno de nuestros clientes, siempre con
            tecnología de vanguardia.
          </p>
          <AdjectivesCard adjectives={adjectives} />
          <div className={styles.mission}>
            <h2>MISION</h2>
            <p>Día a día nos esforzamos en brindarte el mejor servicio con las mejores técnicas
              productos y aparatologia, buscamos tu satisfaccion a través de grandes resultados.
            </p>
          </div>
        </section>
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
      bannerIgm: data.bannerImg,
      adjectives: data.adjectives
    }
  }
};
