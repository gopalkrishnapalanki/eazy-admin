import React from 'react'
import DataTable from 'react-data-table-component';
// import SwitchButton from 'react-switch-button'



const customStyles = {

    rows: {
        style: {
            // minHeight: '72px', // override the row height
            // paddingTop:"20px"
            backgroundColor: '#f7f7f7',
        },
    },
    headCells: {
        style: {

            backgroundColor: '#f7f7f7',
            color: "#000000",
            fontWeight: "600"

        },
    },

    // headCells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for head cells
    //         paddingRight: '8px',
    //     },
    // },
    // cells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for data cells
    //         paddingRight: '8px',
    //     },
    // },

    columns: {
        style: {
            color: "red",
        }
    }
};

const columns = [
    {
        name: 'ID',
        selector: row => row.title,
    },
    {
        name: 'Status',
        selector: (cellInfo) => <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        </div>

    },
    {
        name: 'Name',
        selector: row => row.Name,
    },


    {
        name: 'Email',
        selector: row => row.Email,
    },
    {
        name: 'Phone',
        selector: row => row.Phone,
    },

    {
        name: 'Checkin',
        selector: row => row.Checkin,
    },
    {
        name: 'Checkout',
        selector: row => row.Checkout,
    },
    {
        name: 'Reedem',
        selector: (cellInfo) => <button type="button" className="btn btn-warning">Reedeem</button>
    },
    {
        name: 'Created',
        selector: row => row.Created,
    },
    {
        name: 'Edit',
        selector: (cellInfo) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
        </svg>
    },
];

const data = [
    {
        id: 1,
        title: 'Waitlist',
        Name: 'Revanth',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 2,
        title: 'Waitlist',
        Name: 'Vamsi',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 3,
        title: 'Waitlist',
        Name: 'rathod',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 4,
        title: 'Waitlist',
        Name: 'Julei',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 5,
        title: 'Waitlist',
        Name: 'keiorn',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 6,
        title: 'Waitlist',
        Name: 'Nanem',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 7,
        title: 'Waitlist',
        Name: 'Recko',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
    {
        id: 8,
        title: 'Waitlist',
        Name: 'Recko',
        Email: "r@gmail.com",
        Phone: "918273646",
        Checkin: "27/02/2022",
        Checkout: "28/02/2022",
        Created: "27/02/2022"

    },
]

const Members = () => {
    return (
        <div>
            <div className="container-fluid">

                <div className="pe-4   pt-4 pb-3">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>Memebers  --     Assign a membership for user with benefits</p>
                        <ul className="d-flex  ">
                            <li className='pe-3 '>
                                <button type="button" class="btn btn-warning my-btn-cus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill my-btn-svg" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg> Add me</button>
                            </li>
                            <li className='pe-3 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </li>
                            <li className='pe-3 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                                    <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </li>
                            <li className='pe-3 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                </svg>
                            </li>
                            <li className='pe-3 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </li>
                            <li className='pe-3 mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                                    <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
                                </svg>
                            </li>


                        </ul>
                    </div>

                </div>
            </div>

            <DataTable
                columns={columns}
                data={data}
                selectableRows
                customStyles={customStyles}
                pagination
            />


        </div>
    )
}

export default Members
