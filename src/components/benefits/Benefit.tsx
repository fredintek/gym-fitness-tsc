import React, { ReactNode } from 'react'
import { SelectedPageOptions } from '../navbar/type'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


type Props = {
    icon: ReactNode,
    title: string,
    description: string,
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}

const childVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
}

function Benefit({ icon, title, description, setSelectedPage }: Props) {
  return (
    <motion.div variants={childVariants} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className='mb-4 flex justify-center'>
            {/* CIRLCE */}
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">{icon}</div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className="my-3">{description}</p>
          <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 max-[330px]:hidden"
              onClick={() => setSelectedPage(SelectedPageOptions.CONTACTUS)}
              href={`#${SelectedPageOptions.CONTACTUS}`}
          >
              <p>Learn More</p>
          </AnchorLink>
    </motion.div>
  )
}

export default Benefit;