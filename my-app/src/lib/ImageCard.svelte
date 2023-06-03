<script>
  export let imageSrc;
  export let imageAlt;
  export let announcement;
  export let title;
  export let caption;
</script>

<div class="card">
  <img class="card__image" src="{imageSrc}" alt="{imageAlt}">
  <div class="card__announcement">{announcement}</div>
  <h2 class="card__title">{title}</h2> <!-- add title here -->
  <div class="card__text">{caption}</div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    transform: translateX(238px);
    margin-top: 50px;
    box-shadow: 
      0 0 0 4px rgba(255, 255, 255, 0.3), /* inner white border */
      0 4px 6px rgba(0, 0, 0, 0.1), /* shadow */
      0 8px 20px rgba(0, 0, 0, 0.1); /* shadow */
    height: 400px;
  }

  .card__image {
    height: 250px;
    width: 400px;
    object-fit: cover;
  }

  .card__title {
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
  }

  .card__text {
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 16px;
    text-align: left;
  }

  /* Responsive styles for phone view */
  
    @media only screen and (max-width: 800px) {


    .card {
      scroll-snap-align: start; /* Snap cards to the start of the viewport */
      flex: 0 0 auto;
      width: 100%;
      max-width: 650px; /* Limit the width of each card */
      margin-right: 10px;
      height: 100vh;

    }

    .card__image {
      height: 250px;
      width: 100%;
      object-fit: cover;
    }


    .card__title {
      margin-top: 10px;
      font-size: 50px;
    }

    .card__text {
      margin-top: 5px;
      margin-left: 10px;
      margin-right: 10px;
      font-size: 30px;
    }
  }
</style>
