import axios from 'axios'
import { useEffect, useState } from 'react'

const ViewTeam = () => {

const[data,changeData] = useState([])

        const fetchData = () => {

            axios.post("http://localhost:3000/view_volunteer").then(

                (response) => {

                    changeData(response.data)


                }

            ).catch()

        }

        useEffect(


            () => {


                fetchData()

            }, []

        )


  return (
    <div>
        <h1>View Volunteers</h1>
<div className="container">
    <div className="row g-3">



 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
<div className="container">
    <div className="row g-3">



 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<table className="table table-light table-striped" >
  <thead>
    <tr>
      <th scope="col">Volunteer ID</th>
        <th scope="col">Full Name</th>
        <th scope="col">Department</th>
        <th scope="col">Email</th>
        <th scope="col">Year of Study</th>
        <th scope="col">Camp Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Date of Birth</th>
        <th scope="col">Gender</th>
        <th scope="col">Hours Completed</th>
        <th scope="col">Address</th>
        <th scope="col">Blood Group</th>
        <th scope="col">Unit Number</th>
    </tr>
  </thead>
  <tbody>
             {data.map(

              (value,index) => {

                return(


    <tr>
      <th scope="row">{value["volunteer_id"]}</th>
      <td>{value.full_name}</td>
      <td>{value.department}</td>
      <td>{value.email}</td>
      <td>{value.year_of_study}</td>
      <td>{value.camp_name}</td>
      <td>{value.phone}</td>
      <td>{value.date_of_birth}</td>
      <td>{value.gender}</td>
      <td>{value.hours_completed}</td>
      <td>{value.address}</td>
      <td>{value.blood_group}</td>
      <td>{value.unit_number}</td>
    </tr>
                )

              }

            )
            
            
            }

  </tbody>
</table>
</div>
        </div>
    </div>
</div>

</div>
</div>
  )
}

export default ViewTeam;