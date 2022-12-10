import React from 'react'

import './Css/Home.css'


import img_one from './Imgs/24421 1.png'
import img_tow from './Imgs/21555 1.png'
import img_tree from './Imgs/24421 1.png'
import img_four from './Imgs/46317.png'



export default function Home() {

  return <>
  
  <section className='py-5'>
            <div className="container">
                <div className="row g-5 text-center">
                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="parent-img position-relative">
                            <img src={img_one} className="w-100" alt=""/>
                            <div className="parent_content position-absolute">
                                Personnel Affairs Department
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="parent-img position-relative">
                            <img src={img_tow} className="w-100" alt=""/>
                            <div className="parent_content position-absolute">
                                Student Affairs Department
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="parent-img position-relative">
                            <img src={img_tree} className="w-100" alt=""/>
                            <div className="parent_content position-absolute">
                                Store Management
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="parent-img position-relative">
                            <img src={img_four} className="w-100" alt=""/>
                            <div className="parent_content position-absolute">
                                Bus management
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
  
  </>
}
