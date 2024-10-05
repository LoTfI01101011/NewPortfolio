import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center font-serif">
      <div className="w-[800px] h-96 bg-slate-700 rounded-3xl text-white  flex-col justify-center text-center gap-3">
        <h1 className="text-9xl">404</h1>
        <h1 className="mt-4 text-4xl">Not Found</h1>
        <Link to={'/'} className="flex justify-center mt-20">
        <button className="w-40 h-16 rounded-2xl bg-slate-800 text-lg hover:bg-white hover:text-slate-800 transition duration-300 ">Go Back</button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound