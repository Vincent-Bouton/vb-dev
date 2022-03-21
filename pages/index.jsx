import Logo from "../components/Logo"
import Illustration from "../components/Illustration"
import Header from "../components/Header"

import Link from "next/link"

import WiPDark from "../public/progress/WiP-Dark.gif"
import WiPWhite from "../public/progress/WiP-white.gif"

const HomePage = () => {
  let dark = false
  return(
    <div className={dark ? "dark" : ""}>
      <div className="bg-neutral text-dark dark:bg-dark dark:text-neutral min-h-screen">
        <div>
          <Header dark={dark}/> 
        </div>
        <main className="container m-auto">
          <h1 className="text-4xl max-w-max mx-auto px-2 pt-4">Work in Progress</h1>
          <div className="mx-auto max-w-max transition-all md:pl-14">
            <Illustration size={500} caption="Boy standing at desk working on his computer" image={dark ? WiPDark : WiPWhite}/>
          </div>  
          <p className="text-xl text-center sm:w-96 mx-auto">The website is under construction, do not hesitate to come back later.</p>
          <div className="mt-4">
            <Link href="/contact">
              <div className="max-w-max py-4 px-4 mx-auto text-xl transition text-primary rounded-sm hover:bg-primary hover:bg-opacity-20 hover:cursor-pointer">
                Contact Me
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
    
    
  )
}
export default HomePage