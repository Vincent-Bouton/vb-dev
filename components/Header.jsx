import Navbar from "./Navbar.jsx"

const Header = (props) => {
  return (
    <header>
      <Navbar dark={props.dark}/>
    </header>
  )
}

export default Header