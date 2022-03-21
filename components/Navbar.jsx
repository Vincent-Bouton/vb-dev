import Link from "next/link"
import Logo from "./Logo"

const Navbar = (props) => {
  return (
    <div>
      <nav className="flex justify-center p-6">
        <Link href="/">
          <a>
            <Logo size={125} dark={props.dark}/>
          </a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar