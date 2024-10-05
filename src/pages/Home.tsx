import { useLocation } from "react-router-dom";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
interface Location {
  pathname: string
}
const Home = () => {
  let location:Location = useLocation()
  return (
    <>
    <Navbar location={location.pathname}/>
    <Hero />
    </>
  )
}

export default Home