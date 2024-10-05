import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
interface Location  {
    pathname:string
}
const Contacts = () => {
    let location:Location = useLocation()
  return (
    <div>
    <Navbar location={location.pathname} />
    <Contact />
    </div>
  )
}

export default Contacts