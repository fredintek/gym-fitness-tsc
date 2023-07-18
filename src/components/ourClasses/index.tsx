import React from 'react'
import { SelectedPageOptions } from '../navbar/type'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HeaderText from '../benefits/HeaderText'
import ClassesCard from './ClassesCard'
import { ClassesType } from './types'

type Props = {
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}


const classes: ClassesType[] = [
    {
        name: "Weight Training Classes",
        image: image1
    },

    {
        name: "Weight Training Classes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur unde harum non libero repudiandae qui doloribus illum voluptatem laudantium!",
        image: image2
    },

    {
        name: "Weight Training Classes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur unde harum non libero repudiandae qui doloribus illum voluptatem laudantium!",
        image: image3
    },

    {
        name: "Weight Training Classes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur unde harum non libero repudiandae qui doloribus illum voluptatem laudantium!",
        image: image4
    },

    {
        name: "Weight Training Classes",
        image: image5
    },

    {
        name: "Weight Training Classes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur unde harum non libero repudiandae qui doloribus illum voluptatem laudantium!",
        image: image6
    },
]

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className='w-screen bg-primary-100 py-4'>
        <motion.div
            className=''
            onViewportEnter={() => setSelectedPage(SelectedPageOptions.OURCLASSES)}
        >
            <motion.div className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{ hidden:{ opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            >
                <div className='md:w-3/5'>
                    <HeaderText>Our Classes</HeaderText>
                    <p className="py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum excepturi voluptatem eum doloremque iusto, est distinctio dolor hic ea sapiente quam accusamus itaque doloribus dolorum consequuntur consectetur, eveniet inventore nesciunt. Sapiente tempora, incidunt consectetur tenetur totam sunt. Dolores, laboriosam.
                    </p>
                </div>
            </motion.div>

              <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {
                        classes?.map((item: ClassesType, index: number) => (
                            <ClassesCard key={index} name={item.name} description={item.description} image={item.image} />
                        ))
                    }
                </ul>
            </div>

        </motion.div>
    </section>
  )
}

export default OurClasses