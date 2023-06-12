<script>
    import { page } from '$app/stores';
  
    let images = ($page.data.props?.images || []).slice();
    let backgroundImage = images[10];  // Set the first image as the background
  </script>
  
  <div class="container">
    <div class="image" style="background-image: url({backgroundImage});">
      <div class="overlay">
        <h1 class="title">
          <span class="special-word1">Why</span>
          <span class="special-word">Choose</span>
          <span class="special-word3">Us</span>
        </h1>
      </div>
    </div>
  </div>
  
  <style>
    .container {
      position: relative;
    }
  
    .image {
      position: relative;
      background-size: cover; 
      background-position: center;
       width: 100%; 
       height: 500px;
    }
  
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 15px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      text-align: left;
    }
  
    .title {
      font-size: 50px; /* Increase the font size */
      margin-bottom: 20px; /* Increase the margin-bottom */
    }
  
    .special-word {
      font-size: 70px; /* Increase the font size */
      color: yellow;
      position: relative;
      top: -20px; /* Adjust the vertical position */
      margin-bottom: 15px; /* Increase the margin-bottom */
    }
  
    .special-word1 {
      font-size: 100px;
      color: white;
      position: relative;
      top: -60px; /* Adjust the vertical position */
      margin-bottom: 15px; /* Increase the margin-bottom */
    }
  
    .special-word3 {
      font-size: 50px;
      color: white;
      position: relative;
      top: 40px; /* Adjust the vertical position */
      margin-bottom: 15px; /* Increase the margin-bottom */
    }


    @media (max-width: 600px) {
  .title {
    font-size: 30px;
  }
  .image{
    height: 100vh;  /* take up the full height of the screen */
  }
  .container{
    height: 100vh;  /* take up the full height of the screen */
  }
  .special-word {
    font-size: 35px;
    top: -10px;
  }

  .special-word1 {
    font-size: 40px;
    top: -30px;
  }

  .special-word3 {
    font-size: 30px;
    top: 20px;
  }
}   
  </style>
  