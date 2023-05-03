
<script>
  export let imageSrc;
  export let imageAlt;
  export let title;
  export let caption;
</script>

<div class="card">
  <img class="card__image" src="{imageSrc}" alt="{imageAlt}">
  <h2 class="card__title">{title}</h2> <!-- add title here -->
  <div class="card__text">{caption}</div>
</div>

  <style>
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
      transform: translateX(30px);
    }
    
    .card__image {
      height: 200px;
      width: 300px;
      margin-top: 50px;

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
  