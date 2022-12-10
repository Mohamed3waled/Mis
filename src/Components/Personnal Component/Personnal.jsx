import React from 'react'

import perstyle from '../Personnal Component/persolnnal.module.css'

import img_one from './Img/img_one.png'
import img_two from './Img/img_two.png'
import img_three from './Img/img_three.png'
import img_four from './Img/img_four.png'

export default function Personnal() {
  return <>
  
  <section className='py-5'>
            <div className="container">
                <div className="row g-5 text-center">
                    <div className="col-lg-6 col-md-6 mx-auto">
                        <div className="parent-img position-relative">
                            <img src={img_one} className="w-100" alt=""/>
                            <div className={perstyle.parent_content +' '+ "position-absolute"}>
                                Personnel Affairs Department
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="parent-img position-relative">
                            <img src={img_two} className="w-100" alt=""/>
                            <div className={perstyle.parent_content +' '+ "position-absolute"}>
                                Student Affairs Department
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="parent-img position-relative">
                            <img src={img_three} className="w-100" alt=""/>
                            <div className={perstyle.parent_content +' '+ "position-absolute"}>
                                Store Management
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="parent-img position-relative">
                            <img src={img_four} className="w-100" alt=""/>
                            <div className={perstyle.parent_content +' '+ "position-absolute"}>
                                Bus management
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
  </>
}
