import "./App.css";
import Navbar from "./Nav";
import Ads from "./Ads";
import {Ads_Lap} from "./Ads";
import Mob_disp from "./Mob";

function App() {
  // For Mobile Phones
  let Mimg = ['images/f34.jpg','images/f54.jpg','images/m14.jpg','images/a14.jpg','images/narzo60x.jpg','images/realme11.jpg','images/realme11pro.jpg','images/realmegt2pro.jpg']
  let S_Mname =['Samsung Galaxy F34','Samsung Galaxy F54','Samsung Galaxy M14','Samsung Galaxy A14']
  let R_Mname =['Realme Narzo 60X','Realme 11 5G','Realme 11 Pro 5G','Realme GT2 Pro']
  let Mprice =['18,999','23,499','14,999','16,999']
  let R_Mprice =['13,999','23,999','24,999','34,999']

  // For Laptops
  let Limg = ['images/asusvbook15.jpg','images/asusvb14.jpg','images/lenidea3.jpg','images/acern5.jpg','images/hpr5.jpg','images/lenidgame.jpg']
  let Lname = ['ASUS Vivobook 15 Core i5 11th Gen 1135G7','ASUS Vivobook 14 Core i3 11th Gen 1115G4','Lenovo IdeaPad Slim 3 Intel Core i3 11th Gen 1115G4','Acer Nitro 5 Core i5 12th Gen 12450H','HP Ryzen 5 Hexa Core 5500U','Lenovo IdeaPad Gaming 3 Intel Core i5 11th Gen 11300H']
  let Lprice =['43,990','33,990','34,990','69,990','46,990','45,990']

  return (
    <div className="Main-container">
      <Navbar />

      <div class="row" id="row-1">
        <div class="col text-center">
          <Ads />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="tag-line" id="Mlist">Explore through various ranges of mobiles...</p>
        </div>
      </div>

      <div class="row " id="row-2">
        <div class="col">
          <center>
            <Mob_disp img1={Mimg[0]} name={S_Mname[0]} price={Mprice[0]}/>
          </center>
        </div>

        <div class="col">
          <center>
            <Mob_disp img1={Mimg[1]} name={S_Mname[1]} price={Mprice[1]}/>
          </center>
        </div>

        <div class="col">
          <center>
            <Mob_disp img1={Mimg[2]} name={S_Mname[2]} price={Mprice[2]}/>
          </center>
        </div>

        <div class="col">
          <center>
            <Mob_disp img1={Mimg[3]} name={S_Mname[3]} price={Mprice[3]}/>
          </center>
        </div>
      </div>

      <div class="row " id="row-3">
        <div class="col">
          <center>
            <Mob_disp img1={Mimg[4]} name={R_Mname[0]} price={R_Mprice[0]}/>
          </center>
        </div>

        <div class="col">
          <center>
            <Mob_disp img1={Mimg[5]} name={R_Mname[1]} price={R_Mprice[1]}/>
          </center>
        </div>

        <div class="col">
          <center>
            <Mob_disp img1={Mimg[6]} name={R_Mname[2]} price={R_Mprice[2]}/>
          </center>
        </div>

        <div class="col">
          <center>
            <Mob_disp img1={Mimg[7]} name={R_Mname[3]} price={R_Mprice[3]}/>
          </center>
        </div>
      </div>
      <center>
        <a class="btn btn-primary" style={{marginTop:'5rem',width:"15rem"}}>
          Load More
        </a>
        </center>
      <hr style={{marginTop:"5rem"}}/>

     <div class="row">
        <div class="col">
          <p class="tag-line" id="Mlist">Want Laptop ? We have it here...</p>
        </div>
      </div>

      <div class="row" id="row-4">
        <div class="col text-center">
          <center>
            <Ads_Lap img={Limg[0]} name={Lname[0]} price={Lprice[0]}/>
          </center>
        </div>

        <div class="col text-center">
           <center>
            <Ads_Lap img={Limg[1]} name={Lname[1]} price={Lprice[1]}/>
          </center>
        </div>

        <div class="col text-center">
           <center>
            <Ads_Lap img={Limg[2]} name={Lname[2]} price={Lprice[2]} />
          </center>
        </div>

        
      </div>

      <div class="row" id="row-5">
        <div class="col text-center">
          <center>
            <Ads_Lap img={Limg[3]} name={Lname[3]} price={Lprice[3]}/>
          </center>
        </div>

        <div class="col text-center">
           <center>
            <Ads_Lap img={Limg[4]} name={Lname[4]} price={Lprice[4]}/>
          </center>
        </div>

        <div class="col text-center">
           <center>
            <Ads_Lap img={Limg[5]} name={Lname[5]} price={Lprice[5]}/>
          </center>
        </div>
      </div>
      <center>
        <a class="btn btn-primary" style={{marginTop:'5rem',width:"15rem"}}>
          Load More
        </a>
        </center>
      <hr style={{marginTop:"5rem"}}/>

      <footer class="footer" >
        <div class="credits text-center" >
        <h6 style={{padding:"2rem 0",margin:"0"}}>Copyright by MyShopee.in © 2023. All rights Reserved</h6>
        </div>
      </footer>
    </div>
  );
}

export default App;
