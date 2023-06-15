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
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 20px rgba(0, 0, 0, 0.1);
  height: 550px;
  transition: transform 0.3s ease-in-out;
  
  transform-style: preserve-3d;
}
.card__announcement{
  font-size: 20px;
}

.card:hover {
  transform: translateX(238px) scale(1.05);
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
  font-size: 20px;
  text-align: left;
}


  /* Responsive styles for phone view */
  
    @media only screen and (max-width: 600px) {


    .card {
      scroll-snap-align: start; /* Snap cards to the start of the viewport */
      flex: 0 0 auto;
      width: 100%;
      max-width: 750px; /* Limit the width of each card */
      margin-right: 10px;
      height: 150vh;
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



