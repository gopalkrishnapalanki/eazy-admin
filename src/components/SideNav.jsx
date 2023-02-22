import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
      <div className='my-sidenav'>
        <ul>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874765/DashboardHome_o4ctye.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Dashboard</p>
            </li>
            </Link>
            <Link to="/bookings" style={{ textDecoration: 'none' }}>

            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874760/Bookings_ed8yeu.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Bookings</p>
            </li>
            </Link>

            <Link to="/rooms" style={{ textDecoration: 'none' }}>

            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874774/Rooms_oioyx0.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Rooms</p>
            </li></Link>

            <Link to="/guest" style={{ textDecoration: 'none' }}>

            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874766/Guests_yh026z.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Guests</p>
            </li></Link>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874775/Setup_yntzbf.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Setup</p>
            </li>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874768/Inbox_azrlki.svg" className='my-side-icons'  width={50}/>
                <p className='my-li-p'>Inbox</p>
            </li>
            <Link to="/members" style={{ textDecoration: 'none' }}>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874770/Members_loxf8g.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Members</p>
            </li>
            </Link>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874763/Chats_x52osd.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Chats</p>
            </li>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874761/Campaigns_l5gysz.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Campaigns</p>
            </li>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874769/Inventry_mg5mgh.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Inventory</p>
            </li>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874772/Reports_t6jimw.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Reports</p>
            </li>
            <li className='icon-hover-color'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676874775/Settings_obxynn.svg" className='my-side-icons' width={50} />
                <p className='my-li-p'>Settings</p>
            </li>
        </ul>


      </div>
    </>
  )
}

export default SideNav
