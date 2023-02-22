import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-one" style={{backgroundColor:'#FAF3E4'}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676870367/LOGO_lk0qh4.svg" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <form className="d-flex" role="search">
              <input className="form-control me-2 my-search" type="search" placeholder="search..." aria-label="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search my-icon" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </form>

          </div>
          <div className="pe-4">

            <ul className="d-flex justify-content-around">
              <p className='pe-5'>You are in a free plan <span className='my-span-color'>Upgrade</span> or <span className='my-span-color'>Extend Trail</span></p>
              <li className='pe-4'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/ri_customer-service-2-line_g9xk8s.svg" />
              </li>
              <li className='pe-4'>
                <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/akar-icons_schedule_aubwiq.svg" />
              </li>
              <li className='pe-4'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/ri_customer-service-2-line_g9xk8s.svg" />
              </li>
              <li className='pe-4'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/fluent_tasks-app-24-regular_p5mwvf.svg" />
              </li>
              <li className='pe-4'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/carbon_notification-new_i7ouoq.svg" />
              </li>
              <li className='pe-4'>
                <img src=" https://res.cloudinary.com/dlxfoztlz/image/upload/v1676872139/Group_gi9ilg.svg" />
              </li>

            </ul>

          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar
