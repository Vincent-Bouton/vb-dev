import Link from "next/link"
import Logo from "./Logo"

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <div>
            <li>
              <Link href="/"><Logo size={75} dark={props.dark}/></Link>
            </li>  
          </div>
          <div>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar