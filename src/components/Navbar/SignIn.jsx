import React, { useState } from "react";
// import './SignIn.css'

export default function SignIn(){
    const [createShowPass,SetCreateShowPass] = useState(false)
    const [confirmShowPass,SetConfirmShowPass] = useState(false)
    return(
        <>
            <div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
      <div class="card border-0">
        <div class="card-body p-5">
          <div class="text-center mb-4">
            <h2 class="fw-bold text-primary">Create Account</h2>
          </div>
          <form action="/SignUp" method="post">
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input 
                type="text" 
                class="form-control py-2" 
                id="fullName" 
                placeholder="Enter your full name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                class="form-control py-2" 
                id="email" 
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <div class="input-group">
                <input 
                  type={createShowPass?"text":"password"} 
                  class="form-control py-2" 
                  id="password" 
                  placeholder="Create a password"
                  required
                />
                <button 
                  onClick={()=>{SetCreateShowPass(!createShowPass)}} 
                  class="btn btn-outline-secondary toggle-password" 
                  type="button"
                  data-target="password"
                >
                    <i class={createShowPass?'ri-eye-line':'ri-eye-off-line'}></i>
                </button>
              </div>
            </div>
            <div class="mb-4">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <div class="input-group">
                <input 
                  type={confirmShowPass?'text':'password'} 
                  class="form-control py-2" 
                  id="confirmPassword" 
                  placeholder="Confirm your password"
                  required
                />
                <button
                  onClick={()=>{SetConfirmShowPass(!confirmShowPass)}} 
                  class="btn btn-outline-secondary toggle-password" 
                  type="button"
                  data-target="confirmPassword"
                >
                    <i class={confirmShowPass?'ri-eye-line':'ri-eye-off-line'}></i>
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100 py-2 mb-3">
              Create Account
            </button>
            <div class="text-center">
              <p class="text-muted mb-0">Already have an account? <a href="/login" class="text-decoration-none"
              data-bs-toggle="modal" data-bs-target="#exampleModal">Log In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}