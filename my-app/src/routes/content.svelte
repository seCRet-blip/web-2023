<div class="container">
  <div class="text-container">
    <h3>Design and Simulation</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Justo laoreet sit amet cursus sit. Vehicula ipsum
      a arcu cursus vitae congue mauris rhoncus. Massa sed 
      elementum tempus egestas. Commodo viverra maecenas 
      accumsan lacus vel facilisis volutpat est velit.
      Ultricies lacus sed turpis tincidunt.
      Dignissim sodales ut eu sem integer vitae. Nec feugiat in
      fermentum posuere urna nec tincidunt praesent.
      Quis vel eros donec ac odio tempor. Proin nibh nisl condimentum id venenatis.</p>
  </div>
  <div class="image-container">
    <img src="src\lib\images\playstation.jpg" alt="">
  </div>
  <div class="image-container">
    <img src="src\lib\images\playstation.jpg" alt="">
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
  }

  .text-container {
    width: 30%;
    padding-right: 20px;
  }

  .image-container {
    flex: 1;
    max-width: 200px;
  }

  .image-container img {
    width: 100%;
  }

  .image-container:nth-child(2) {
    margin-left: auto;
  }

  @media (max-width: 768px) {
    .container {
      flex-wrap: wrap;
    }

    .text-container {
      width: 100%;
      padding-right: 0;
    }

    .image-container {
      flex-basis: 50%;
      max-width: 50%;
      margin-right: 0;
      margin-bottom: 20px;
    }

    .image-container:last-child {
      margin-bottom: 0;
    }
  }
</style>
