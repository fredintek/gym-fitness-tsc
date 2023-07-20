import React from "react"
import { SelectedPageOptions } from "../navbar/type"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HeaderText from "../benefits/HeaderText";
import { useForm } from "react-hook-form";


type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}

function ContactUs({ setSelectedPage }: Props) {
  
  const {trigger, register, formState: {errors}, reset} = useForm();
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white`
  
  
  const onSubmit = async (e:any):Promise<void> => {
    const isValid = await trigger()
    if(!isValid) {
      e.preventDefault()
    }


    reset()
  }

  return (
    <section id="contactus" className={`mx-auto w-11/12 pt-24 pb-32`}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageOptions.CONTACTUS)}
      >
        {/* HEADER */}
        <motion.div
          className={`md:w-3/5`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HeaderText>
            <span className="text-primary-500">JOIN NOW</span>
          </HeaderText>

          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repudiandae natus ducimus nam. Nihil blanditiis impedit laboriosam assumenda illo rem quasi saepe dignissimos. Quos molestias dolore illo cumque ipsum molestiae quia iste unde facilis asperiores autem enim fugit accusamus error obcaecati alias quasi cum necessitatibus, omnis odio dolor. Similique, magnam.
          </p>
        </motion.div>


        {/* FORMS AND IMAGE */}
        <div className="mt-10 gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/454961df63990d4d84bfd672a75cf1f7"
            >
              {/* NAME */}
              <input 
                type="text" 
                className={`${inputStyles}`} 
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <>
                  <p className="mt-1 text-primary-500">{errors.name.type === "required" && "This field is required."}</p>
                  <p className="mt-1 text-primary-500">{errors.name.type === "maxLength" && "Exceeded the max length of 100 characters."}</p>
                </>
              )}

              {/* EMAIL */}
              <input
                className={`${inputStyles}`}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <>
                  <p className="mt-1 text-primary-500">{errors.email.type === "required" && "This field is required."}</p>
                  <p className="mt-1 text-primary-500">{errors.email.type === "pattern" && "Invalid email address"}</p>
                </>
              )}

              {/* MESSAGE */}
              <textarea 
                rows={4}
                cols={50}
                className={`${inputStyles}`}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <>
                  <p className="mt-1 text-primary-500">{errors.message.type === "required" && "This field is required."}</p>
                  <p className="mt-1 text-primary-500">{errors.message.type === "maxLength" && "Exceeded the max length of 2000 characters."}</p>
                </>
              )}

              <button 
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>

            </form>
          </motion.div>


          <motion.div 
            className={`relative mt-10 basis-2/5 md:mt-0`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2 , duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="md:before:content-evolvetext before:absolute w-full before:-bottom-20 before:-right-10 before:z-[-1]">
              <img 
                className="w-full"
                src={ContactUsPageGraphic} 
                alt="" 
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

export default ContactUs