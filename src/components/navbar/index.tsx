import { useState } from "react"
import { Bars3Icon, XMarkIcon, ArrowSmallUpIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "@/components/navbar/Link"
import { SelectedPageOptions } from "@/components/navbar/type";
import useMediaQuery from "@/hooks/UseMediaQuery";
import ActionButton from "@/components/actionButton";


type Props = {
    selectedPage: SelectedPageOptions,
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
    isTopOfPage: boolean
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false)
    const flexBetween = "flex items-center justify-between"
    const showBorder = "border border-red-500"
    const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)") 
    const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <>
          <nav>
              <div className={`${flexBetween} ${navBackground} fixed top-0 w-screen z-30 py-6`}>
                <div className={`${flexBetween} w-5/6 mx-auto gap-16`}>
                    {/* LOGO */}
                      <div className={`${flexBetween} ${isAboveMediumScreens ? "w-fit" : "w-full"}`}>
                        <img src={Logo} alt="" />
                    </div>

                    {/* RIGHT SIDE */}
                    {
                        isAboveMediumScreens ? (<><div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                        </div>
                    </>) : (<button onClick={() => setIsMenuToggled(!isMenuToggled)} className={`rounded-full bg-secondary-500 p-2 cursor-pointer`}>
                        <Bars3Icon className="h-4 w-4 text-white"/>
                    </button>)
                    }
                    
                </div>
              </div>

              {/* MOBILE */}
              <div className={`fixed transition duration-500 ${!isAboveMediumScreens && isMenuToggled ? "translate-x-0" : "translate-x-[100%]" } z-40 right-0 bottom-0 h-screen w-5/6 bg-primary-100 drop-shadow-xl`}>
                  {/* CLOSE ICON */}
                  <div className={`flex justify-end p-8`}>
                      <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                          <XMarkIcon className="h-6 w-6 text-gray-400" />
                      </button>
                  </div>


                  {/* MENU ITEMS */}
                  <div className={`flex flex-col ml-[33%] gap-10 text-xl`}>
                      <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                      <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                      <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                      <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  </div>

              </div>
        </nav>

        {
              !isTopOfPage && (<><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="z-40 rounded-full bg-secondary-500 p-2 cursor-pointer fixed bottom-6 right-6">
                  <ArrowSmallUpIcon className="h-6 w-6 text-white" />
              </button></>)
        }
    </>
  )
}

export default Navbar