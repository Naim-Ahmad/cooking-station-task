import { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CiMenuKebab } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";

export default function Sidebar() {
  const [active, setActive] = useState("Live Calls")

  const navLists = [
    {
      icon: <FiPhone className='me-3' />,
      label: "Live Calls",
    },
    {
      icon: <HiUserGroup className='me-3' />,
      label: "Tutor Online",
    },
    {
      icon: <SlBadge className='me-3' />,
      label: "Active subscription",
    },
    {
      icon: <FaChartLine className='me-3' />,
      label: "Earning/Spending",
    },
  ]


  return (
    <div className='offcanvas-lg offcanvas-start col-lg-3 col-xxl-2 p-0 bg-dark text-bg-dark' id="offcanvasExample">
      <h1 className='text-center py-4 fw-bolder'>Admin</h1>
      <nav>
        <ul className='nav flex-column'>
          {
            navLists.map(list => <li onClick={() => setActive(list.label)} key={list.label} className={`nav-item position-relative px-4 navItem ${active === list.label ? "active" : null}`}>
              <a href="#" className={`nav-link align-items-center nav-text`}>{list.icon} {list.label} {active === list.label ? <CiMenuKebab size={23} className='position-absolute end-0 me-3' /> : null}</a> 
              </li>)
          }
        </ul>
      </nav>
    </div>
  )
}