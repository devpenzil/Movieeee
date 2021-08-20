import Head from 'next/head'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Rows from '../components/Rows'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Movieeee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary">
        <NavBar />
        <Banner />
        <Rows id={35} name={"Comedy Movies"}/>
        <Rows id={99} name={"Documentaries"}/>
        <Rows id={27} name={"Horror Movies"}/>
        <Rows id={28} name={"Action Movies"}/>
        <Rows id={10749} name={"Romance Movies"}/>
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

