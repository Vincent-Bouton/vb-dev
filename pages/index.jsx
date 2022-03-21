import Logo from "../components/Logo"
import Illustration from "../components/Illustration"
import Header from "../components/Header"

import WiPDark from "../public/progress/WiP-Dark.gif"
import WiPWhite from "../public/progress/WiP-white.gif"

const HomePage = () => {
  let dark = true
  return(
    <div className={dark ? "dark" : ""}>
      <div className="bg-neutral text-dark dark:bg-dark dark:text-neutral">
        <Header dark={dark}/> 
        <main>
          <h1>Work in Progress</h1>
          <Logo size={100} dark={dark}/>
          <Illustration size={500} caption="Boy standing at desk working on his computer" image={dark ? WiPDark : WiPWhite}/>
        </main>
      </div>
    </div>
    
    
  )
}
export default HomePage