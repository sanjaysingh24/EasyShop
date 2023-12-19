import React from 'react'
import './Main.css';
const Main = () => {
  return (
    <section className='main-section'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 left_section">
                    <div>
                        <h2>NEW ARRIVALS ONLY</h2>


                    </div>
                    <div className='new_collection'>
                        <p>new <img src="./Assets/hand_icon.png" alt="hand_icon"  className='img-fluid hand_icon'/>
                    
                        </p>
                        <p>collections</p>
                        <p>for everyone</p>
              <button className='latest_collection_btn'>Latest Collection <span><img src="./Assets/arrow.png" alt="arrow" className='img-fluid' /></span></button>
                    </div>
                </div>
                <div className="col-lg-7 right_section text-end">
                  <p><img src="./Assets/hero_image.png" alt="hero_image" className='img-fluid hero_image' /></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main;
