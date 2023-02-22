import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SideNav from '../../components/SideNav';




export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div>



      <div id="wrapper">
        <div id="">
          <Navbar/>
        </div>
        <div id="side-nav">
         <SideNav/>
        </div>


        <div className='my-div' >
          <div className='ps-5 container my-oulet'>

          <Outlet/>
          </div>
        </div>
      </div>

    </div>
  );
}
