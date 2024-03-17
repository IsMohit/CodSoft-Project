function Ads() {
  return (
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="images/img1.png"
            class="img-fluid"
            alt="..."
            style={{ height: "50vh" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src="images/img2.png"
            class="img-fluid"
            alt="..."
            style={{ height: "50vh" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src="images/img3.png"
            class="img-fluid"
            alt="..."
            style={{ height: "50vh" }}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function Ads_Lap({img , name , price})
{
  return(
    <div class="card " style={{width:"25rem"}}>
  <center><img src={img} class="" id="lap-img" alt="..." style={{width:"18.2rem",height:"14rem"}}/></center>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <h6 class="card-price" style={{color:"brown"}}><strong>₹{price}</strong></h6>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit maxime earum ullam reprehenderit.</p>
    <a class="btn btn-primary">
          Buy now
        </a>
  </div>
</div>
  )
}

export default Ads;
export {Ads_Lap};
