import Navbar from "./Navbar.jsx"

const Header = (props) => {
  return (
    <header className="container m-auto">
      <Navbar dark={props.dark}/>
    </header>
  )
}

export default Header