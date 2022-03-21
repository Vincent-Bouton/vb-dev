import Image from "next/image";

const Illustration = (props) => {
  return (
    <figure>
      <Image src={props.image} alt={`${ props.caption } Illustration`} layout="intrinsic" width="500" height="500"/>
      <figcaption className="sr-only">{props.caption}</figcaption>
    </figure>
  )
}

export default Illustration