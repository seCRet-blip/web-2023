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
      width: 300px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 20px;
      margin-right: 20px;
    }
  
    h2 {
      font-size: 24px;
      margin: 0 0 10px 0;
      font-weight: 700;
      text-align: center;
    }
  
    p {
      font-size: 18px;
      margin: 0;
      text-align: center;
    }
  </style>
  