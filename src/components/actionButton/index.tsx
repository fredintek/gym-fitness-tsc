import { ReactNode } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPageOptions } from "../navbar/type"

type Props = {
    children: ReactNode,
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className={`rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500`}
        href={`#${SelectedPageOptions.CONTACTUS}`}
        onClick={() => setSelectedPage(SelectedPageOptions.CONTACTUS)}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton