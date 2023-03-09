   <!-- svelte-ignore a11y-missing-attribute -->
   
    <script>
      const game = document.querySelector(".game");
// get this working in the weekend
      function displaytoConsol(){
        console.log("hope this works");
      }

      
    </script> 
<nav>
    <div class="menu-toggle">
      <i class="fa fa-bars"></i>
    </div>
    <ul class="menu">
      <li><a class="game" href={'#'}>Games </a>
        <ul class="sub-menu">
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
        </ul>
      </li>
      <li><a href={'#'}>Hardware</a>
        <ul class="sub-menu">
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
        </ul>
      </li>
      <li><a href={'#'}>Services</a>
        <ul class="sub-menu">
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
        </ul>
      </li>
      <li><a href={'#'}>News</a>
        <ul class="sub-menu">
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
        </ul></li>
      <li><a href={'#'}>Shop</a>
        <ul class="sub-menu">
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
          <li><a href={'#'}>Blank</a></li>
        </ul></li>
      <li><a href={'#'}>Support</a>
        <ul class="sub-menu">
        <li><a href={'#'}>Blank</a></li>
        <li><a href={'#'}>Blank</a></li>
        <li><a href={'#'}>Blank</a></li>
      </ul></li>
    </ul>
</nav>
<style>
    nav{
  background-color: #fff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.menu-toggle {
  display: none;
  padding: 10px;
  cursor: pointer;
}

.menu {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-right: 75%;
  list-style: none;
}

.menu li {
  position: relative;
  font-size: 20px;
}

.menu li a {
  display: block;
  padding: 10px;
  color: #444;
  text-decoration: none;
}

.menu li:hover > a {
  color: #045dbb;
}

.sub-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: white;
}

.sub-menu li {
  display: block;
}

.sub-menu li a {
  display: block;
  padding: 10px;
  color: #444;
  text-decoration: none;
}

.menu li:hover > .sub-menu {
  display: block;
  animation: fadeInDown 0.5s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    margin: 0;
  }
  
  .menu li {
    display: block;
    border-bottom: 1px solid #444;
  }
  
  .menu li:last-child {
    border-bottom: none;
  }
  
  .menu li a {
    display: block;
    padding: 10px;
    color: #fff;
    text-decoration: none;
  }
  
  .menu li:hover > .sub-menu {
    display: block;
    position: static;
    background-color: #444;
  }
}

</style>
  