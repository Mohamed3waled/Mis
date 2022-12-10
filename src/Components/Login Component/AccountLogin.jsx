import React from 'react'

import logo from './Img/logo.png'
import './Login.css'

export default function AccountLogin() {

    function prevent(e) {
        e.preventDefault()
    }

  return <>

  <section className="login" onSubmit={prevent}>
            <div className="w-50 mx-auto ">
                <div className="container-form py-3">
                    <form action="" className=" form-control border-0 p-4 mx-auto text-center form-login">
                        <div className="">
                            <img src={logo} className="w-50" alt=""/>
                            <div className="input_username  mx-auto">
                                <input type="text" placeholder="Username" className="form-control p-3 my-5  mx-auto"/>
                            </div>
                            <div className="input_password ">
                                <input type="text" placeholder="Password" className="form-control p-3 mx-auto"/>
                            </div>
                        </div>
                        <button className="btn btn-outline-danger btn-lg px-4 my-4">Login</button>
                        <p></p>
                    </form>
                </div>
            </div>
        </section>


  
  </>
}
