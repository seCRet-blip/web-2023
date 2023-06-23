<script>
  export let imageSrc; // Prop for the image source URL
  export let imageAlt; // Prop for the alternative text for the image
  export let announcement; // Prop for the announcement text
  export let title; // Prop for the title
  export let caption; // Prop for the caption
</script>
<div class="card-I card-base">
  <!-- Display the image with the provided source and alternative text -->
  <img class="card__image" src="{imageSrc}" alt="{imageAlt}">
  
  <!-- Display the announcement text -->
  <div class="card__announcement">{announcement}</div>
  
  <!-- Display the title -->
  <h2 class="card__title">{title}</h2>
  
  <!-- Display the caption or additional text -->
  <div class="card__text">{caption}</div>
</div>
