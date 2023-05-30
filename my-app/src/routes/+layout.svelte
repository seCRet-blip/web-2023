<script>
    
    import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import Nav from './test.svelte';

  let contentContainer;
  let moveDiv = false;
  const marginTop = tweened(20, { duration: 500, easing: cubicOut });

  function moveDivDown() {
    moveDiv = !moveDiv;
    marginTop.set(moveDiv ? 10 : 20);
  }

  function toggleDropdown(dropdownId) {
    var dropdownMenu = document.querySelector(dropdownId);
    moveDiv = !moveDiv;

    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
      dropdownMenu.style.marginTop = "0";
    } else {
      dropdownMenu.style.display = "block";
      dropdownMenu.style.zIndex = 9999; // set a high z-index value

      const contentContainer = document.querySelector('.content-container');
      const contentContainerRect = contentContainer.getBoundingClientRect();
      dropdownMenu.style.marginTop = `${contentContainerRect.height}px`;
    }
  }


 </script>
 <Nav />
<body>
  <div class="content-container" bind:this={contentContainer}>
    <slot />
  </div>
  

  <footer>
    <div class="grid-container">
      <div class="grid-item">
        <div class="grid-content">
          <h3 >About</h3>
          <p>Careers</p>
          <p>Corporate Social Responsibility</p></div>
        </div>
      
      <div class="grid-item">
        <div class="grid-content">
               <h3>Shop</h3>
               <p>Games</p>
               <p>Hardware</p>
               <p>Merchandise</p>
               <p>Sales & deals</p>
               <p>Exclusives</p>
               <p>Online service</p>
               
      </div>
        </div>
   
      <div class="grid-item">
        <div class="grid-content">
           <h3>My store</h3>
              <p>Order details</p>
               <p>Shipping info</p>
               <p>Returns & exchanges</p>
               <p>FQA</p>
      </div>
        </div>
       
      <div class="grid-item">
        <div class="grid-content">
          <h3>Support</h3>
          <p>Switch</p>
          <p>Accounts</p>
          <p>Other systems</p>
          <p>Repairs</p>
          <p>Nintendo product recycling</p>

        </div>
        </div>
       
      <div class="grid-item">
        <div class="grid-content">
              <h3>Parents</h3>
              <p>Info for parents</p>
              <p>Parental controls</p>
              <h3>Privacy</h3>
              <p>Privacy policy</p>
      </div>
        </div>
    
      <div class="grid-item">
        <div class="grid-content">
             <h3>Community</h3>
             <p>Community guidelines</p>
            <p>Online safety principles</p>
      </div>
        </div>
        </div>
        
  </footer>
  
</body>

<style>
body{
    widows: 1000px;
    margin: 0 auto;
  }
.grid-content{
  text-align: left;
}
footer {
  background-color: white;
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, 1fr); 
  
}
/*this is formating the items that are in the grid*/
.grid-item {
  background-color: #fff;
  padding: 10px;
  height: 250px;
  width: 100%;
  text-align: center;
  border-left: 1px solid #333;
}
/*this removes the border on the first child of the parent*/
.grid-item:first-child{
  border-left: none;
}












.content-container {
  margin-top: 50px; /* Replace with the desired value, such as 20px */
}

</style>