import Head from 'next/head'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Movieeee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <NavBar />
        <Banner />
      </main>

      <footer>

      </footer>
    </div>
  )
}

// import Head from 'next/head'
// import NavBar from '../components/NavBar'
// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main >
//         <NavBar />
//       </main>

//       <footer>

//       </footer>
//     </div>
//   )
// }

