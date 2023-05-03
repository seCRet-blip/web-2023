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
  width: 350px;
  height: 400px;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  
  text-align: left; /* align the text to the left */
  margin-left: 50px; /* move the element to the right by 10px */
}

  
    h2 {
      font-size: 24px;
      margin: 0 0 10px 0;
      font-weight: 700;
      text-align: center;
    }
  
    p {
      font-size: 25px;
      margin: 0;
      text-align: left;
    }
  </style>
  