import 'react-circular-progressbar/dist/styles.css';
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import handImage from '../assets/hand.png';
import profile from '../assets/profile.png';
export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="container-fluid px-5 py-2">
        <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <IoMdMenu size={25} />
        </button>
        <div className="navbar-brand d-none d-lg-block">Hi, John <img className='w-25' src={handImage} alt="" /></div>

        <div className='d-flex justify-content-end gap-md-5 gap-2'>
          <form className="w-50  position-relative " role="search">
            <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn position-absolute top-0 end-0 pe-3" type="submit"><CiSearch size={20} /></button>
          </form>

          <div>
            <img src={profile} alt="" />
          </div>
        </div>

      </div>
    </nav>
  )
}