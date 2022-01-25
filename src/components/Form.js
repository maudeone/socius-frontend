import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="form-container">
            <div id="contact" className="contact">
        <div className="center-text"> 
          <h1>Request A Quote</h1>
          <p>Ready to upgrade your digital marketing efforts? Fill out the form below 
              to get a quote and <br /> learn more from a website audit.</p>
          <span className="success-message">{successMessage}</span>        
        </div>
        <div className="container">
          <form onSubmit={handleSubmit()}>  
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* Name Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register('name',
                    {required: "Please enter your name",
                    maxLength: {
                      value: 25,
                      message: "Please enter a name with lower than 25 characters"
                    } 
                    })    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.name && errors.name.message }    
                </span>
                {/* Phone Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register('phone',
                    {required: "Please enter your phone number"})    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.phone && errors.phone.message }    
                </span>
                {/* Email Input */}
                <div className="text-center">
                  <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register('email',
                    {required: "Please enter a valid email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address" 
                    }
                    })    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.email && errors.email.message }    
                </span>
                {/* Subject Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register('subject',
                    {required: "Oops you forgot to add a subject"})    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.subject && errors.subject.message }    
                </span>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* Description */}
                <div className="text-center">
                  <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="description"
                  {...register('description',
                    {required: "Please describe why you are reaching out"})    
                  }
                  ></textarea>
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.description && errors.description.message }    
                </span>
              </div>
              <div className="btn-container">
              <button className="nav-button contact-btn" type="submit">Submit</button> 
              </div> 
            </div>
          </form>
        </div>     
      </div>    
    </div>
  )
};

export default Form;
