
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
      box-shadow: 
    0 0 0 4px rgba(255, 255, 255, 0.3), /* inner white border */
    0 4px 6px rgba(0, 0, 0, 0.1), /* shadow */
    0 8px 20px rgba(0, 0, 0, 0.1); /* shadow */
    }
    
    .card__image {
      height: 250px;
      width: 400px;      
    }
    
    .card__title { /* add style for the title */
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
  </style>
  