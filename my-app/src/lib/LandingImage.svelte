<script>
    import { page } from '$app/stores';
  
    let images = ($page.data.props?.images || []).slice(); //turns the prop from the js file into an array//
    let backgroundImage = images[10];  // Set the first image as the background
  </script>
  <!-- this is a landing image that the user will see as soon as they are on the about page-->
  <div class="landing-container relative">
    <div class="image relative" style="background-image: url({backgroundImage});">
      <div class="overlay text-left absolute flex-center">
        <h1 class="title"><!--The reason for spans is to be able to style the invidual word in the title-->
          <span class="special-word1 special-word-base relative">Why</span>
          <span class="special-word special-word-base relative">Choose</span>
          <span class="special-word3 special-word-base relative">Us</span>
        </h1>
      </div>
    </div>
  </div>
  
  <style>
@media (max-width: 600px) {
    .title {
        font-size: 30px; /* Decrease the font size of the title for smaller screens */
    }
    .image {

        height: 100vh; /* Take up the full height of the screen on smaller screens */
    }
    .landing-container {
        width: 800px;
        height: 100vh; /* Take up the full height of the screen on smaller screens */
    }
    .special-word {
        font-size: 35px; /* Decrease the font size of the special word for smaller screens */
        top: -10px; /* Adjust the vertical position of the special word for smaller screens */
    }
    .special-word1 {
        font-size: 40px; /* Decrease the font size of the first special word for smaller screens */
        top: -30px; /* Adjust the vertical position of the first special word for smaller screens */
    }
    .special-word3 {
        font-size: 30px; /* Decrease the font size of the third special word for smaller screens */
        top: 20px; /* Adjust the vertical position of the third special word for smaller screens */
    }
}

  </style>
  