import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPageOptions } from "@/components/navbar/type";

type Props = {
    page: string,
    selectedPage: SelectedPageOptions,
    setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPageOptions>>
}

function Link({ page, selectedPage, setSelectedPage }: Props) {

    const lowerPageName = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPageOptions

  return (
    <AnchorLink
        className={`${selectedPage === lowerPageName ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
        href={`#${lowerPageName}`}
        onClick={() => setSelectedPage(lowerPageName)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link;