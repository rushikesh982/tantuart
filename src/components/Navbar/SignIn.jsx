import React, { useState } from "react";

export default function SignIn() {
  const [createShowPass, SetCreateShowPass] = useState(false);
  const [confirmShowPass, SetConfirmShowPass] = useState(false);

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary">Create Account</h2>
                </div>
                <form action="/SignUp" method="post">
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control py-2"
                      id="fullName"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control py-2"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={createShowPass ? "text" : "password"}
                        name="password"
                        className="form-control py-2"
                        id="password"
                        placeholder="Create a password"
                        required
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          SetCreateShowPass(!createShowPass);
                        }}
                        className="btn btn-outline-secondary toggle-password"
                        type="button"
                      >
                        <i
                          className={
                            createShowPass ? "ri-eye-line" : "ri-eye-off-line"
                          }
                        ></i>
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        type={confirmShowPass ? "text" : "password"}
                        name="confirmPassword"
                        className="form-control py-2"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          SetConfirmShowPass(!confirmShowPass);
                        }}
                        className="btn btn-outline-secondary toggle-password"
                        type="button"
                      >
                        <i
                          className={
                            confirmShowPass ? "ri-eye-line" : "ri-eye-off-line"
                          }
                        ></i>
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 mb-3"
                  >
                    Create Account
                  </button>
                  <div className="text-center">
                    <p className="text-muted mb-0">
                      Already have an account?{" "}
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Log In
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
