import ActionButton from "@/components/actionButton"
import { SelectedPageOptions } from "@/components/navbar/type"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/UseMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}

function Home({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
            className={`md:flex mx-auto w-5/6 items-center justify-center md:h-5/6`}
            onViewportEnter={() => setSelectedPage(SelectedPageOptions.HOME)}
        >
          {/* MAIN HEADER */}
          <div className={`z-10 mt-32 md:basis-3/5`}>
            {/* HEADINGS */}
            <motion.div
             className={`md:-mt-20`}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.7 }}
             variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
             }}
            >
                <div className={`relative`}>
                    <div className={`before:absolute md:before:content-evolvetext before:-top-20 before:-left-20 before:z-[-1]`}>
                        <img src={HomePageText} alt="" />
                    </div>
                </div>

                <p className={`mt-8 text-sm`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae minima aliquid a debitis dignissimos, vero, unde veniam quidem possimus aspernatur ad. Molestias, velit temporibus. Iste culpa sint ut. In.</p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now!
                </ActionButton>
                <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 max-[330px]:hidden"
                    onClick={() => setSelectedPage(SelectedPageOptions.CONTACTUS)}
                    href={`#${SelectedPageOptions.CONTACTUS}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </motion.div>
          </div>


          {/* IMAGE */}
          <motion.div 
            className={`flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            variants={{
                hidden: { opacity: 0},
                visible: { opacity: 1}
            }}
          >
            <img src={HomePageGraphic} alt="" />
          </motion.div>
        </motion.div>

        {/* SPONSORS */}
        {
            isAboveMediumScreens && (
                <div className="h-[160px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                              <img src={SponsorRedBull} alt="" />
                              <img src={SponsorForbes} alt="" />
                              <img src={SponsorFortune} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default Home