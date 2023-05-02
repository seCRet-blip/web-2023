<script>
    export let imageSrc;
    export let imageAlt;
    export let text;
  </script>
  
  <div class="card">
    <img class="card__image" src="{imageSrc}" alt="{imageAlt}">
    <div class="card__text">{text}</div>
  </div>
  
  <style>
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .card__image {
      height: 200px;
      width: 400px;
      margin-top: 50px;

    }
    
    .card__text {
      margin-top: 20px;
      font-size: 16px;
      text-align: center;
    }
  </style>
  