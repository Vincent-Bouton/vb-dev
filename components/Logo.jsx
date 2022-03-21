import Image from "next/image";
import whiteLogo from "../public/logo/logo_white.png";
import darkLogo from "../public/logo/logo_dark.png";

const Logo = (props) => {
  return (
    <figure style={"size" in props ? {width: props.size} : {width: "160px"}}>
      <Image alt="VB-Dev Logo" src={props.dark ? whiteLogo : darkLogo} layout="responsive"/>
      <figcaption className="sr-only">VB</figcaption>
    </figure>
  )
  
}

export default Logo