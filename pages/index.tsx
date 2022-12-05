import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damo Softwares Dhamo | Home Page</title>
        <meta name="description" content="Your desired choice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Damo Softwares 
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}

export default Home
