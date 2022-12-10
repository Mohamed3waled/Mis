import React from 'react'

import signup from '../SignUp Component/SignUp.module.css'

import logo from './Img/logo.png'

export default function SignUp() {

  function prevent(e) {
    e.preventDefault()
  }
  return <>
  
  <section className={signup.sign} onSubmit={prevent}>
            <div className="w-50 mx-auto ">
                <div className="container-form py-3">
                    <form action="" className={"form-control border-0 p-4 mx-auto text-center" + ' ' + signup.form_login}>
                        <div className="">
                            <img src={logo} className="w-50 pb-3" alt=""/>
                            <div className="input_username   mx-auto">
                                <input type="email" placeholder="Email" className="form-control p-3  mx-auto"/>
                            </div>
                            <div className="input_username  mx-auto">
                                <input type="text" placeholder="Username" className="form-control p-3 my-4  mx-auto"/>
                            </div>
                            <div className="input_password ">
                                <input type="password" placeholder="Password" className="form-control p-3 mx-auto"/>
                            </div>
                        </div>
                        <button className="btn btn-outline-danger btn-lg px-4 my-4">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>
  
  
  </>
}
