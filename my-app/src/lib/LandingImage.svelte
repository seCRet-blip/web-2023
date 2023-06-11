<script>
    import { page } from '$app/stores';
  
    let images = ($page.data.props?.images || []).slice();
    let backgroundImage = images[10];  // Set the first image as the background
</script>
  
<div class="container">
  <div class="image" style="background-image: url({backgroundImage}); background-size: cover; background-position: center; width: 100%; height: 500px;">
  
    <div class="overlay">
      <h1 class="title">Your <span class="special-word">Special</span> Title</h1>
      <p class="text">Your Text</p>
    </div>
  </div>
</div>

<style>.container {
    position: relative;
  }
  
  .image {
    position: relative;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the transparency as needed */
    color: white;
    text-align: center;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .special-word {
    font-size: 36px; /* Adjust the size of the special word */
    color: yellow; /* Adjust the color of the special word */
    position: relative;
    top: -10px; /* Adjust the vertical position of the special word */
  }
  

</style>