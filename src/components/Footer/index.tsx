import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="mx-auto w-11/12 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="" />
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, numquam! Placeat suscipit cupiditate perferendis deleniti quos blanditiis labore et ipsa ut voluptate! Nisi tempora distinctio aliquam ducimus omnis, nulla at?</p>
                <p>&copy; Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 md:mt-0 basis-1/4">
                <h4 className="font-bold">Links</h4>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mt-16 md:mt-0 basis-1/4">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p >(333-425-774)</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer