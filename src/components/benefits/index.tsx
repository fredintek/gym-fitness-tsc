import { motion } from "framer-motion"
import { SelectedPageOptions } from "../navbar/type"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import HeaderText from "./HeaderText";
import { BenefitType } from "./types";
import Benefit from "./Benefit";
import ActionButton from "../actionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 }
    },
}

const benefits: BenefitType[] = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius est ea?"
    },

    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "State of the Culture Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius est ea?"
    },

    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "State of the Mathematics Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius est ea?"
    },
]

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto w-5/6 py-20"
    >

    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageOptions.BENEFITS)}
    >
        <div className="md:my-5 md:w-3/5">
            <HeaderText>MORE THAN JUST GYM.</HeaderText>
            <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellendus sequi est magnam, velit provident nostrum maiores quasi perspiciatis minus sed molestiae. Sed repudiandae ipsam neque atque quasi optio dolor architecto delectus, tempore suscipit sint aperiam accusantium ad laudantium maxime. Laudantium nostrum itaque commodi cumque esse molestiae aut distinctio dolorem.</p>
        </div>

        {/* BENEFITS */}
        <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            {
                benefits?.map((benefit: BenefitType) => (
                <Benefit key={benefit.title} title={benefit.title} icon={benefit.icon} description={benefit.description} setSelectedPage={setSelectedPage}/>
                ))
            }
        </motion.div>
    </motion.div>


    {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img className="mx-auto" src={BenefitPageGraphic} alt="" />


            {/* DESCRIPTION */}
            <div>
                {/* TITLE */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <HeaderText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                            </HeaderText>
                        </motion.div>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quos quaerat ea, iste tempore dicta porro hic voluptatum eligendi neque. Architecto, voluptatibus, asperiores laudantium laboriosam consectetur sed, porro vitae rem saepe dolore autem accusantium eos temporibus quae.</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor neque nesciunt magni veritatis autem iure optio quod eaque odit doloremque quos sint harum qui, eum quam dolorem saepe excepturi porro facilis accusantium ad laboriosam natus eius. Hic vitae beatae, excepturi voluptate, repudiandae culpa, modi magni quam distinctio deleniti sint enim ut porro.</p>
                </motion.div>


                {/* BUTTON */}
                <motion.div 
                    className="relative mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="before:absolute before:-bottom-10 before:right-10 before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now!
                        </ActionButton>
                    </div>
                </motion.div>
            </div>
            
        </div>

    </section>
  )
}

export default Benefits