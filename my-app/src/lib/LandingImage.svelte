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
