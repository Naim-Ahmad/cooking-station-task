import 'react-circular-progressbar/dist/styles.css';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";

export default function FilterBar() {

  return (
    <div className='d-flex flex-column gap-3 flex-md-row justify-content-between'>
      <div className='d-flex align-items-center gap-2 flex-wrap'>
        <button className="btn btn-outline-secondary d-flex align-items-center gap-2"><IoFilterSharp /> Filters
        </button>
        <button style={{ background: "#001AFF" }} className="btn btn-primary d-flex align-items-center gap-2"><FaPlus /> Add User
        </button>
        <span style={{ fontSize: "15px", fontWeight: "450" }}>1 Row Selected</span>
      </div>

      <div style={{ maxWidth: "250px" }}>
        <form className="d-flex position-relative " role="search">
          <input className="form-control" style={{ paddingLeft: "33px" }} type="search" placeholder="Search" aria-label="Search" />
          <button className="btn position-absolute start-0 ps-2" type="submit"><CiSearch size={18} /></button>
        </form>
      </div>
    </div>
  )
}