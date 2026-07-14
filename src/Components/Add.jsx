import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './Navbar'



const Add = () => {
    const[input,changeData]=useState(
        {
           volunteer_id: "",
            full_name: "",
            department: "",
            email: "",
            year_of_study: "",
            camp_name: "",
            phone: "",
            date_of_birth: "",
            gender: "",
            hours_completed: "",
            address: "",
            blood_group: "",
            unit_number: ""
        }
    )

    const inputHandler=(event)=>{
        changeData({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3000/add_volunteer",input).then(
            (response)=>{response.data}
        ).catch()
    }

  return (
    <div>
        <NavBar/>
        <h1>Add Volunteer</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">volunteer id:</label>
                            <input type="text" className="form-control" name='volunteer_id' value={input.volunteer_id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">full name:</label>
                            <input type="text" className="form-control" name='full_name' value={input.full_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">department:</label>
                            <input type="text" className="form-control" name='department' value={input.department} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email:</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">year of study</label>
                            <input type="text" className="form-control" name='year_of_study' value={input.year_of_study} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">camp name</label>
                            <input type="text" className="form-control" name='camp_name'value={input.camp_name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">phone:</label>
                            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">date of birth:</label>
                            <input type="date" className="form-control" name='date_of_birth' value={input.date_of_birth} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender:</label>
                             <select  id="" className="form-control" name="gender" value={input.gender } onChange={inputHandler}>
                                <option value="Male" className="options">Male</option>
                                <option value="Female" className="options">Female</option>
                                <option value="others" className="options">others</option>
                                
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">hours completed:</label>
                            <input type="text" className="form-control" name='hours_completed'value={input.hours_completed} onChange={inputHandler}/>
                    
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">address:</label>
                            <input type="text" className="form-control" name='address'value={input.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">blood_group:</label>
                             <select  id="" className="form-control" name="blood_group" value={input.blood_group } onChange={inputHandler}>
                                <option value="A+" className="options">A+</option>
                                <option value="A-" className="options">A-</option>
                                <option value="B+" className="options">B+</option>
                                <option value="B-" className="options">B-</option>
                                <option value="Ab+" className="options">AB+</option>
                                <option value="AB-" className="options">AB-</option>
                                <option value="O+" className="options">0+</option>
                                <option value="O-" className="options">0-</option>

                                
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">unit number:</label>
                            <input type="text" className="form-control" name='unit_number'value={input.unit_number} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add