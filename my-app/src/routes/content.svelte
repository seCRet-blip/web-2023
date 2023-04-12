<div class="container">
  <div class="text-container">
    <h3>Design and Simulation</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Justo laoreet sit amet cursus sit. Vehicula ipsum
      a arcu cursus vitae congue mauris rhoncus. Massa sed 
      elementum tempus egestas. Commodo viverra maecenas 
      accumsan lacus vel facilisis volutpat est velit.
      Ultricies lacus sed turpis tincidunt.
      Dignissim sodales ut eu sem integer vitae. Nec feugiat in
      fermentum posuere urna nec tincidunt praesent.
      Quis vel eros donec ac odio tempor. Proin nibh nisl condimentum id venenatis.</p>
  </div>
  <div class="image-container">
    <img class="first-image" src="src\lib\images\playstation.jpg" alt="">
    <div class="text-U-image">
      Simulation&ensp;|&ensp;Anncouncement 
      <div class="text">
        <p>Dignissim sodales ut eu sem integer vitae. Nec feugiat in
         fermentum posuere urna nec tincidunt praesent.
         Quis vel eros donec ac odio tempor. Proin nibh nisl condimentum id venenatis</p> 
       </div>
    </div>
  </div>
  <div class="image-container">
    <img class="second-image" src="src\lib\images\playstation.jpg" alt="">
    <div class="text-U-image">
      Simulation&ensp;|&ensp;Anncouncement
      <div class="text">
       <p>Dignissim sodales ut eu sem integer vitae. Nec feugiat in
        fermentum posuere urna nec tincidunt praesent.
        Quis vel eros donec ac odio tempor. Proin nibh nisl condimentum id venenatis</p> 
      </div>
    </div>
  </div>
</div>

<style>
  .container{
    width: 100%;
    height: 700px;
    padding-top: 50px;
  }
  
  .text-container{
    width: 500px;
    height: 150px;
    font-size: 20px;
    display: inline-block;
    vertical-align: top;
    padding-left: 20px;
  }

  .image-container{
    height: 200px;
    width: 400px;
    
    display: inline-block;
    vertical-align: top;
    padding-top: 70px;
  }
  
  .second-image{
    height: 230px;
    width: 400px;
    position: absolute;
  }
  
  .first-image{
    height: 230px;
    width: 400px;
    position: absolute;
  }
  .text-U-image {
  position: relative;
  margin-top: 10px;
  padding-top: 250px;
  padding-left: 15px;
}
  
  @media (max-width: 768px) {
    .container {
      flex-wrap: wrap;
    }

    .text-container {
      width: 100%;
      padding-right: 0;
    }

    .image-container {
      flex-basis: 50%;
      max-width: 50%;
      margin-right: 0;
      margin-bottom: 20px;
    }

    .image-container:last-child {
      margin-bottom: 0;
    }
  }
</style>
