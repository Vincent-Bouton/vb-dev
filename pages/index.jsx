import Logo from "../components/Logo"
import Illustration from "../components/Illustration"
import Header from "../components/Header"

import Head from "next/head"
import Link from "next/link"

import WiPDark from "../public/progress/WiP-Dark.gif"
import WiPWhite from "../public/progress/WiP-white.gif"

const HomePage = () => {
  let dark = false
  return(
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>VB-Dev | Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`VB-Dev is a personnal website for Vincent Bouton, Web Developer. The Website is currently in construction. Come later to see if he's done.`}
        />
      </Head>
      <div className="bg-neutral text-dark">
        <div>
          <Header dark={dark}/> 
        </div>
        <main className="container m-auto">
          <h1 className="text-3xl max-w-max mx-auto p-3 md:text-6xl border-b-2 border-dark">Welcome to my Website</h1>
          <section>
            <h2 className="text-2xl md:text-4xl text-center mt-4">Work in Progress</h2>
            <div className="mx-auto max-w-max transition-all md:pl-14">
              <Illustration size={500} caption="Boy standing at desk working on his computer" image={dark ? WiPDark : WiPWhite}/>
            </div>  
            <p className="text-xl text-center sm:w-96 mx-auto">The website is under construction, do not hesitate to come back later.</p>
            <div className="mt-4">
              <Link href="/Contact">
                <div className="max-w-max py-4 px-4 mx-auto text-xl transition text-primary rounded-sm hover:bg-primary hover:bg-opacity-20 hover:cursor-pointer" tabIndex="0">
                  Contact Me
                </div>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
    
    
  )
}
export default HomePage