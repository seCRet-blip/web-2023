
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
      transform: translateX(100px);
      border: 1px solid rgba(0, 0, 0, 0.3); /* use rgba to set the border color with alpha transparency */
      border-radius: 10px; /* add a border radius */
    }
    
    .card__image {
      height: 250px;
      width: 400px;
      
      align-self: flex-start !important;
      
    }
    
    .card__title { /* add style for the title */
    margin-top: 20px;
    font-size: 24px;
    text-align: center;
  }
    .card__text {
      margin-top: 20px;
      font-size: 16px;
      text-align: center;
    }
  </style>
  