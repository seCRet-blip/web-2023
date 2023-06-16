<script>
  export let imageSrc;
  export let imageAlt;
  export let announcement;
  export let title;
  export let caption;
  
</script>

<div class="card-I card-base">
  <img class="card__image" src="{imageSrc}" alt="{imageAlt}">
  <div class="card__announcement">{announcement}</div>
  <h2 class="card__title">{title}</h2> <!-- add title here -->
  <div class="card__text">{caption}</div>
</div>

<style>



  /* Responsive styles for phone view */
  
    @media only screen and (max-width: 600px) {


    .card-I{
      scroll-snap-align: start; /* Snap cards to the start of the viewport */
      flex: 0 0 auto;
      width: 100%;
      max-width: 700px; /* Limit the width of each card */
      margin-right: 10px;
      height: 160vh;
      transform: translateY(-100px);

    }

    .card__image {
      height: 400px;
      width: 100%;
      object-fit: cover;
    }


    .card__title {
      margin-top: 10px;
      font-size: 50px;
    }

    .card__text {
      margin-top: 5px;
      margin-left: 15px;
      margin-right: 10px;
      font-size: 40px;
    }
    .card__announcement{
      font-size: 40px;
    }
  }
</style>



