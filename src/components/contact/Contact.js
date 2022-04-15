import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <h1 className='text-center mb-2'>Connect with me!</h1>
            <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <form class="row g-3 mt-3">
    <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Full Name</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Full Name"></input>
  </div>
    <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Email Address</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Email Address"></input>
  </div>
    <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Subject</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Subject"></input>
  </div>
    <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Phone Number</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Phone Number"></input>
  </div>
   
   
  <textarea class="form-control w-75 mx-1" id="exampleFormControlTextarea1" rows="3" placeholder='Comments'></textarea>
  
  
    

  <div class="col-auto">
    <button type="submit" class="btn btn-dark mb-3">Send Message</button>
  </div>
</form>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
      <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">1st Showroom Adress</h5>
        <p class="card-text">House 31, Road 8/A, Dhanmondi, Dhaka Bangladesh</p>
      </div>
    </div>
  </div>
      <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">2nd Showroom Address</h5>
        <p class="card-text">60 Feet, monipur school, Mirpur 2, Dhaka Bangladesh</p>
      </div>
    </div>
  </div>
      <div class="col">
   <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Connect Me</h5>
        <p class="card-text">Phone: 01814803281</p>
        
        <p class="card-text">Email: anik.haque.cse1@gmail.com</p>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>

         
        </div>
    );
};

export default Contact;