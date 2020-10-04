import React from 'react'
import './SignUp.css'


function SignUp() {
    return (
        <>
              <div className="container">
                 <div className="reg__form"><h1>Sign Up</h1></div>
                 <div className="form">
                       <form >
                            <div className="name">
                                <h2 className="title">Name</h2> 
                                <input type="text" name="first_name" className="firstname" /> 
                                <label className="firstlabel" >first name</label>  
                                <input type="text" name="last_name" className="lastname" /> 
                                <label className="lastlabel" >last name</label>                         
                            </div>
                            <h2 className="title">Company</h2> 
                            <input type="text" name="company" className="company" /> 
                            <h2 className="title">Email</h2> 
                            <input type="text" name="email" className="email" /> 
                            <h2 className="title">Phone</h2> 
                            <input type="text" name="area_code" className="code" /> 
                            <label className="area_code" >Area Code</label>
                            <input type="text" className="number" name="phone"/>
                            <label className="phone_number"> Phone Number</label>
                            <h2 className="title">Subject</h2> 
                            <select name="subject"  className="option">
                                <option  disabled="disabled" selected="selected">--Choose Option</option>
                                <option >Template 1</option>
                                <option >Template 2</option>
                                <option >Template 3</option>
                                <option >Template 4</option>

                            </select>
                            <h2 className="titleradio">Are you beginner ?</h2>
                            <label className="radio">
                                <input type="radio" className="radio-one" checked="checked"/>
                                <span className="checkmark">Yes</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="radio-two" />
                                <span className="checkmark">No</span>
                            </label>
                                  <button type="submit">Register </button>
                        </form>
                 </div>
              </div>
          
        </>
    )
}

export default SignUp
