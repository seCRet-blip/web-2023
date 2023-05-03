<!-- TextCard.svelte -->

    <div class="text-card">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  
  
  <script>
    export let title;
    export let text;
  </script>
  
  <style>
.text-card {
  width: 500px;
  height: 400px;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  text-align: left; /* align the text to the left */

}

    h2 {
      font-size: 24px;
      margin: 0 0 10px 0;
      font-weight: 700;
      text-align: left;
    }
  
    p {
      font-size: 25px;
      margin: 0;
      text-align: left;
    }
  </style>
  