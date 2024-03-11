import 'react-circular-progressbar/dist/styles.css';
import './App.css';
import FilterBar from './components/FilterBar';
import LearnerTable from './components/LearnerTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';


function App() {

  return (
    <>
      <div className='row vh-100'>

        {/* sidebar */}
        <Sidebar/>

        {/* main content */}
        <div className='col-lg-9 col-xxl-10 p-0'>
          {/* top bar */}
          <Navbar/>

          <div className='bg-light container-fluid w-100 px-5 py-4'>
            {/* summary container*/}
            <Summary/>

            {/* learner container */}
            <div>
              {/* filter bar */}
              <FilterBar/>

              {/* learner table */}
             <LearnerTable/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
