import Navbar from "@/components/navbar"
import { useEffect, useState } from "react"
import { SelectedPageOptions } from "@/components/navbar/type";



type Props = {}

const App = (props: Props) => {
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
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App;