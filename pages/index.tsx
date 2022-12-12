import Head from 'next/head'
import Header from '../comoponents/appbar'
function Home() {
  return (
    <div>
      <Head>
        <title>Damo Softwares Dhamo | Home Page</title>
        <meta name="description" content="Your desired choice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
      <main>
        Damo Softwares 
      </main>

      <footer>
        Footer
      </footer>
    </div>
  )
}

export default Home
