import 'react-circular-progressbar/dist/styles.css';
import { BsTrash } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import profilePic from '../assets/profile-pic.png';

export default function LearnerTable() {

  return (
    <div className="table-responsive">
      <table className="table mt-3 shadow">
        <thead className='table-light'>
          <tr>
            <th scope="col"><div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

            </div></th>
            <th scope="col" className='text-body-secondary fs-6 fw-light'>Learners <FaArrowDownLong size={12} /></th>
            <th scope="col" className='text-body-secondary fs-6 fw-light'>Language <FaArrowDownLong size={12} /></th>
            <th scope="col" className='text-body-secondary fs-6 fw-light'>Occupation <FaArrowDownLong size={12} /></th>
            <th scope="col" className='text-body-secondary fs-6 fw-light'>Objective <FaArrowDownLong size={12} /></th>
            <th scope="col" className='text-body-secondary fs-6 fw-light'>Subscription <FaArrowDownLong size={12} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            Array.from({ length: 3 }).map((v, ind) => <tr key={ind}>

              <th scope="col"><div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

              </div></th>

              <td>
                <div className='d-flex gap-2'>
                  <figure>
                    <img src={profilePic} alt="" />
                  </figure>
                  <div className='d-flex flex-column'>
                    <span>John doe</span>
                    <span style={{ fontSize: "14px" }} className='text-body-secondary'>john.doe@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>English</td>
              <td>Freelance</td>
              <td>Fluent</td>
              <td>Free Trial</td>
              <td>
                <div className='d-flex text-body-secondary'>
                  <button className='btn'>
                    <BsTrash />
                  </button>
                  <button className='btn '>
                    <RiPencilFill />
                  </button>
                </div>
              </td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  )
}