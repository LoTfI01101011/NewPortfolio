import { BsGithub, BsInstagram, BsLinkedin, BsX } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div className='w-full h-[550px] mx-auto flex justify-center items-center pb-4'>
      <div className='w-[800px] h-full m-4 pb-4 border-8 border-slate-300 shadow-2xl shadow-white rounded-xl'>
        <div className="m-4 flex flex-col">
          <h1 className="text-xl text-slate-50 font-semibold ">Contact Me:</h1>
          <div className=" mt-10 flex flex-wrap items-center justify-center gap-7">
            <Link to={'https://github.com/LoTfI01101011'}>
              <BsGithub size={60} className="m-3 rounded-full hover:text-white shadow-md hover:shadow-white duration-500" />
            </Link>
            <Link to={'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lotfi.kaddari.lp2@gmail.com'}>
              <SiGmail size={60} className="m-3 rounded-2xl text-red-500 opacity-60 hover:opacity-100  duration-500" />
            </Link>
            <Link to={'https://www.linkedin.com/in/lotfi-tadjeddine-kaddari-060a612a6/'}>
              <BsLinkedin size={60} className="m-3 rounded-2xl text-blue-500 opacity-60 hover:opacity-100  duration-500" />
            </Link>
            <Link to={'https://www.instagram.com/lotfi_kadari/'}>
            <BsInstagram size={60} className="m-3 rounded-2xl text-yellow-400 opacity-80 hover:opacity-100  duration-500" />
            </Link>
            <Link to={'https://x.com/KaddariL?t=JxdVnelH6rd6g3R-GRvrrw&s=09'}>
            <FaXTwitter size={60} className="m-3 rounded-full hover:text-white shadow-md hover:shadow-white duration-500" />
            </Link>
          </div>
          <h1 className="text-lg text-slate-50 font-semibold mt-16 ">Phone: +213773238009</h1>
          <h1 className="text-lg text-slate-50 font-semibold my-8 ">Mail: lotfi.kaddari.lp2@gmail.com</h1>
          <Link to={'https://drive.google.com/uc?export=download&id=1T6Pj2qY6mxjsSZHSWOJQ_Fy3_FaFsjpC'} className="mx-auto mt-10">
            <div className="rounded-full p-4 border-2 text-slate-50 font-semibold hover:bg-white hover:text-black duration-500">
              Download CV
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Contact