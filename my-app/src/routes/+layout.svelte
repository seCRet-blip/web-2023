<script>
    
    import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

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
 
<body>
  <nav>
    <ul>
      <li class="dropdown">
        <a href="/" on:click={() => toggleDropdown('dropdown-menu2')}>Games</a>
        <ul class="dropdown-menu2" id="dropdown-menu2" style="margin-top: {$marginTop}px" >
          <li><a href="/">Service 1</a></li>
          <li><a href="/">Service 2</a></li>
          <li><a href="/">Service 3</a></li>
        </ul>      
      </li>
  
      <li class="dropdown">
        <a href="/" on:click={() => toggleDropdown('dropdown-menu3')}>Hardware</a>
        <ul class="dropdown-menu3" id="dropdown-menu3">
          <li><a href="/">Service 1</a></li>
          <li><a href="/">Service 2</a></li>
          <li><a href="/">Service 3</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="/" on:click={() => toggleDropdown('dropdown-menu')}>Services</a>
        <ul class="dropdown-menu" id="dropdown-menu">
          <li><a href="/">Service 1</a></li>
          <li><a href="/">Service 2</a></li>
          <li><a href="/">Service 3</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="/" on:click={() => toggleDropdown('dropdown-menu4')}>News</a>
        <ul class="dropdown-menu4" id="dropdown-menu4">
          <li><a href="/">Service 1</a></li>
          <li><a href="/">Service 2</a></li>
          <li><a href="/">Service 3</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="/" on:click={() => toggleDropdown('dropdown-menu5')}>Shop</a>
        <ul class="dropdown-menu5" id="dropdown-menu5">
          <li><a href="/">Service 6</a></li>
          <li><a href="/">Service 2</a></li>
          <li><a href="/">Service 3</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="/" on:click={() => toggleDropdown('dropdown-menu6')}>Support</a>
        <ul class="dropdown-menu6" id="dropdown-menu6">

          <li><a href="/">Service 1</a></li>
          <li><a href="/">Service 2</a></li>
          <li><a href="/">Service 3</a></li>
        </ul>
      </li>
    </ul>
  </nav>
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

nav {
  background-color: white;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  position: relative;
}

nav ul li a {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

nav ul li a:hover {
  color: navy;
}

/* Select all classes that start with "dropdown-menu" */
nav ul li [class^="dropdown-menu"] {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw; /* Set width to 100% of the viewport width */
  background-color: #333;
  padding: 0;
  margin: 0;
}

nav ul li [class^="dropdown-menu"] li {
  width: 100%; /* Set width to 100% */
}

nav ul li [class^="dropdown-menu"] li a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.content-container {
  margin-top: 20px; /* Replace with the desired value, such as 20px */
}

</style>