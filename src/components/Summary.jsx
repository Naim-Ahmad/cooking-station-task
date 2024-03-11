import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GoArrowUpRight } from "react-icons/go";

export default function Summary() {

  return (
    <div className="row my-5">
      {
        Array.from({ length: 4 }).map((v, ind) => <div key={ind} className="col-lg-3 col-12 col-sm-6">
          {/* summary card */}
          <div className="card">
            <div className="card-body d-flex gap-2">
              <div className='col-4'>
                <CircularProgressbarWithChildren styles={buildStyles({ pathColor: "#001AFF" })} strokeWidth={6} value={80} >
                  <GoArrowUpRight style={{ color: "#8A92A6" }} size={30} />
                </CircularProgressbarWithChildren>
              </div>
              <div className='col-8'>
                <span className='text-body-secondary'>Total Sales</span>
                <p>$560K</p>
              </div>
            </div>
          </div>
        </div>)
      }

    </div>
  )
}