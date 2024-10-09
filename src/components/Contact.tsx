import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center pb-4">
      <div className="w-[90%] max-w-[800px] h-full p-6 border-8 border-slate-300 rounded-xl bg-slate-900 shadow-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-slate-50 font-bold mb-6">Contact Me:</h1>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <Link to='https://github.com/LoTfI01101011'>
              <BsGithub size={60} className="transform hover:scale-110 transition-transform duration-300 text-slate-50 hover:text-white shadow-lg hover:shadow-white" />
            </Link>
            <Link to='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lotfi.kaddari.lp2@gmail.com'>
              <SiGmail size={60} className="transform hover:scale-110 transition-transform duration-300 text-red-500 opacity-80 hover:opacity-100" />
            </Link>
            <Link to='https://www.linkedin.com/in/lotfi-tadjeddine-kaddari-060a612a6/'>
              <BsLinkedin size={60} className="transform hover:scale-110 transition-transform duration-300 text-blue-500 opacity-80 hover:opacity-100" />
            </Link>
            <Link to='https://www.instagram.com/lotfi_kadari/'>
              <BsInstagram size={60} className="transform hover:scale-110 transition-transform duration-300 text-yellow-400 opacity-80 hover:opacity-100" />
            </Link>
            <Link to='https://x.com/KaddariL?t=JxdVnelH6rd6g3R-GRvrrw&s=09'>
              <FaXTwitter size={60} className="transform hover:scale-110 transition-transform duration-300 text-slate-50 hover:text-white shadow-lg hover:shadow-white" />
            </Link>
          </div>

          <div className="mt-12 w-full text-center">
            <h1 className="text-lg text-slate-50 font-semibold">Phone: +213773238009</h1>
            <h1 className="text-lg text-slate-50 font-semibold my-4">Mail: lotfi.kaddari.lp2@gmail.com</h1>
          </div>

          <Link to='https://drive.google.com/uc?export=download&id=1T6Pj2qY6mxjsSZHSWOJQ_Fy3_FaFsjpC' className="mt-8">
            <div className="rounded-full p-4 border-2 border-slate-50 text-slate-50 font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">
              Download CV
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
