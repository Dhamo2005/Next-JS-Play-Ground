import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../comoponents/appbar'
function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Damo Softwares Dhamo | Home Page</title>
        <meta name="description" content="Your desired choice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
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
