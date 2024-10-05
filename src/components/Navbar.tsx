import { Link } from "react-router-dom"

const Navbar = ({ location }: { location: string }) => {
  return (
    <div className="h-24 w-full text-slate-200 flex justify-center items-center  gap-12">
      {location == '/' ? (
        <Link to={'/'}><div className="w-24 h-8 rounded-xl flex justify-center items-center bg-white text-black ">Home</div></Link>
      ) : (
        <Link to={'/'}><div className="w-24 h-8 rounded-xl flex justify-center items-center  hover:border-b-2 border-slate-600 hover:text-slate-600 transition duration-500">Home</div></Link>
      )}

      {location == '/projects' ? (
        <Link to={'/projects'}><div className="w-24 h-8 rounded-xl flex justify-center items-center
         bg-white text-black ">Projects</div></Link>
      ) : (
        <Link to={'/projects'}><div className="w-24 h-8 rounded-xl flex justify-center items-center hover:border-b-2 border-slate-600 hover:text-slate-600 transition duration-500">Projects</div></Link>
      )}

      {location == '/contact' ? (
        <Link to={'/contact'}><div className="w-24 h-8 rounded-xl flex justify-center items-center
        bg-white text-black">Contact</div></Link>
      ) : (
        <Link to={'/contact'}><div className="w-24 h-8 rounded-xl flex justify-center items-center hover:border-b-2 border-slate-600 hover:text-slate-600 transition duration-500">Contact</div></Link>
      )}
    </div>

  )
}

export default Navbar