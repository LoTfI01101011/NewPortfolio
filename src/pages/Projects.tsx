import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Project from '../components/Project';

interface Location {
  pathname: string
}

const Projects = () => {
  let location:Location = useLocation()
  return (
    <div>
    <Navbar location={location.pathname} />
    <Project />
    </div>


  )
}

export default Projects