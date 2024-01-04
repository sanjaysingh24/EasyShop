import React from 'react'
import './Main.css';
const Main = () => {
  return (
    <>
    <section>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./img/Banner-1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./img/Banner-2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/Banner-3.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
 
</div>
    </section>
    </>

  
  )
}

export default Main;
