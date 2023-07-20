import { useEffect, useState } from "react"
import { SelectedPageOptions } from "@/components/navbar/type";
import Navbar from "@/components/navbar"
import Home from "@/components/home"
import Benefits from "@/components/benefits";
import OurClasses from "@/components/ourClasses";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer"


const App = () => {
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPageOptions.HOME)
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const [selectedPage, setSelectedPage] = useState<SelectedPageOptions>(SelectedPageOptions.HOME)

  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App;