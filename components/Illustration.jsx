import Image from "next/image";

const Illustration = (props) => {
  return (
    <figure style={"size" in props ? { width:props.size } : {width:"200px"}}>
      <Image src={props.image} alt={`${ props.caption } Illustration`} layout="responsive"/>
      <figcaption className="opacity-0 absolute">{props.caption}</figcaption>
    </figure>
  )
}

export default Illustration