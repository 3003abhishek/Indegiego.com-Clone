function navbar(){
    return ` <div id="navbar">
    
       
    
    <div class="left">
      <a href="./index.html"><span > INDIEGOGO</span></a>
      <div id="one"><div style="color:black; position: relative; top: 15px; left: 10px; font-weight: 700; text-decoration:none; cursor: pointer"
          ><span>Explore</span></div>
          <div id="ddo">
          <div id="d1">
              <div class="E1">
              <div >
              <p>Explore All Projects</p>
          <img src="https://cdn.britannica.com/76/219376-131-8501C217/artists-brushes-paints.jpg" alt="" style="width:180px; height:100px;">
         </div>

         <div>
          <p>Our Top 10 Finds</p>
          <img src="https://cdn.britannica.com/77/58877-050-E25F147E/Ratnasambhava-south-Dhyani-Buddha-painting-Nepalese-mahabodhisattvas.jpg?w=690&h=388&c=crop" alt="" style="width:130px; height:100px;" >
         </div>
         <div>
          <p>Team Favourite</p>
          <img src="https://cdn.britannica.com/66/43666-050-8D434E13/Orange-Yellow-oil-canvas-Mark-Rothko-NY-1956.jpg?w=690&h=388&c=crop" alt=""  style="width:130px; height:100px;">
         </div>
         <div>
          <p>Spend Under $100</p>
          <img src="https://cdn.britannica.com/84/219784-050-35729797/Woman-at-Her-Toilette-by-Berthe-Morisot-Art-Institute-of-Chicago.jpg?w=690&h=388&c=crop" alt="" style="width:130px; height:100px;" >
         </div>
         <div>
          <p>Join The Convo</p>
          <img src="https://cdn.britannica.com/67/134367-050-8D724447/Reflections-of-Clouds-on-the-Water-Lily-Pond-1920.jpg?w=690&h=388&c=crop" alt=""  style="width:130px; height:100px;">
         </div>

             
          </div>
          <div>
             <div id="tech">
              <span>TECH & INNOVATION</span>
              <span>CREATIVE WORKS</span>
              <span>COMMUNITY PROJECTS</span>

             </div>
             <div id="bot">
              <div>
                <h3>Audio</h3>
                <h3>Camera Gear</h3>
                <h3>Education</h3>
                <h3>Energy & Green Tech</h3>
                <h3>Fashion & Wearables</h3>
                <h3>Food & Beverages</h3>
              </div>
              <div>
                  <h3>Health & Fitness</h3>
                  <h3>Home</h3>
                  <h3>Phone and Accessories</h3>
                  <h3>Productivity</h3>
                  <h3>Transportation</h3>
                  <h3>Travel & Outdoors</h3>
              </div>
              <div>
                  <h3>Art</h3>
                  <h3>Comics</h3>
                  <h3>Dance & Theater</h3>
                  <h3>Film</h3>
                  <h3>Music</h3>
                  <h3>Photogrphic</h3>
              </div>
              <div>
                  <h3>Podcasts, Blog & Vlog</h3>
                  <h3>Tablet Top Games</h3>
                  <h3>Video Games</h3>
                  <h3>Tv Shows</h3>
                  <h3>Writting & Publishing</h3>
              </div>
             </div>
          </div>
          </div>
      </div>
  </div>
      <div class="what">
       <a href="dragonfly.html">Our Top 10 Finds</a>
      </div>
      <div class="what">
          <a href="TeamFavourites.html">Team Favorites</a>
      </div>
      <div class="search">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqM_8XO9ygbbZFl4pa9Q0tYPiICKkM0KZOCkuqwZX-rQ&s" alt="">
      </div>
      </div>
  
       <div class="right">
      <a href="./campaign.html">Start a Campain</a>
      <a href="./do.html">What We Do</a>
      <a href="./login.html">Log In</a>
      <a href="./signup.html">Sign Up</a>
     </div>
  </div>`
}

function dropdown(){
    return ` let one = document.getElementById('one');
    let d1 = document.getElementById('ddo');

  one.addEventListener('click', ()=>{
           
        if(d1.style.display==="none"){
            d1.style.display="grid"
            
        }else{
            d1.style.display="none"

        }

    }) ;`
}

export { navbar,dropdown}