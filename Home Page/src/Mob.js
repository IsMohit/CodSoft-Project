function Mob_disp({img1 , name ,price}) {
  return (
    <div class="card" style={{width: '20rem'}} >
      <center><img src={img1} class="card-img-top" id="mimg" alt="..." /></center>
      <div class="card-body">
        <h5 class="card-title"><b>{name}</b></h5>
        <h6 class="card-price" style={{color:"brown"}}><b>₹{price}</b></h6>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae fuga ex aliquid perspiciatis voluptas.
        </p>
        <a class="btn btn-primary">
          Buy now
        </a>
      </div>
    </div>
  );
}



export default Mob_disp;
