import React from 'react';

const Login = ({ onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
               <div className="form-group">
                   <label>Name:</label>
                   <input type="text" name="name" placeholder="Enter your name" />
               </div>
               <div className="form-group">
                   <label>Email Id:</label>
                   <input type="email" name="email" placeholder="Enter your Email" />
               </div>
               <div className="form-group">
                   <label>Password:</label>
                   <input type="password" name="password" placeholder="Enter your password" />
               </div>
               <div className="form-group">
                   <label>Date of Birth:</label>
                   <input type="date" name="dob" placeholder="Enter your birth date" />
               </div>
               <div className="form-group">
                   <label>Address:</label>
                   <textarea name="address" placeholder="Enter your address"></textarea>
               </div>
               <div className="form-group">
                   <label>Phone no:</label>
                   <input type="tel" name="phone" placeholder="Enter your number" />
               </div>
               <div className="form-group">
                   <label>Gender:</label>
                   <div className="gender-options">
                       <label><input type="radio" value="m" name="gender" />Male</label>
                       <label><input type="radio" value="f" name="gender" />Female</label>
                       <label><input type="radio" value="o" name="gender" />Other</label>
                   </div>
               </div>
               
               <div className="form-group">
                   <input type="submit" value="Submit" />
               </div>
           </form>
        </div>
    );
};

export default Login;
