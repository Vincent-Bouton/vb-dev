import Header from "../components/Header"
import Image from "next/image"
import Head  from "next/document"

import Mail from "../public/mail.png"
import Phone from "../public/phone-call.png"
import In from "../public/linkedin.png"

const contact = () => {
  return (
    <>
      <Head>
        <title>VB-Dev | Web Developer - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`VB-Dev Contact Page. Is a personnal website for Vincent Bouton, Web Developer. The Website is currently in construction. Come later to see if he's done.`}
        />
      </Head>
      <div className="bg-dark text-neutral h-screen">   
      <Header dark={true}/>
      <main className="container mx-auto">
        <h1 className="text-4xl text-center md:text-6xl border-b-2 border-neutral max-w-max mx-auto p-3">Need to contact me ?</h1>
        <section>
          <h2 className="sr-only">Contact</h2>
          <address className="w-3/4 mx-auto text-lg mt-6 md:w-3/5 lg:w-2/6">
            <div className="flex pt-6 flex-wrap">
              <figure className="mr-4 pt-4">
                <Image src={Mail} alt="Mail Icon" width="32" height="32"/>
                <figcaption className="sr-only">White mail flat icon</figcaption>
              </figure>
              <a href="mailto:vincent.bouton.dev@gmail.com" className="text-primary hover:bg-primary hover:bg-opacity-20 transition rounded-sm py-4 px-4">vincent.bouton.dev@gmail.com</a>
            </div>
            <div className="flex py-6 flex-wrap">
              <figure className="mr-4 pt-4">
                <Image src={Phone} alt="Phone Icon" width="32" height="32"/>
                <figcaption className="sr-only">White phone with waves to simulate a call flat icon</figcaption>
              </figure>
              <a href="tel:+32471327836" className="text-primary hover:bg-primary hover:bg-opacity-20 transition rounded-sm py-4 px-4">+32 471 32 78 36</a>
            </div>
            <div className="flex flex-wrap">
              <figure className="mr-4 pt-4">
                <Image src={In} alt="Linkedin Icon" width="32" height="32"/>
                <figcaption className="sr-only">Rounded White square with letters "I" and "N" inside</figcaption>
              </figure>
              <a href="https://www.linkedin.com/in/vincent-btn-dev/" className="text-primary hover:bg-primary hover:bg-opacity-20 transition rounded-sm py-4 px-4">Vincent Bouton</a>
            </div>
          </address>
        </section>
      </main>
    </div> 
  </>
    
  )
}

export default contact