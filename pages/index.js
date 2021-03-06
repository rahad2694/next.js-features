import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/NavBar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Next JS Routing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next JS Routing Features
        </h1>
        <Navbar></Navbar>
      </main>
    </div>
  )
}
