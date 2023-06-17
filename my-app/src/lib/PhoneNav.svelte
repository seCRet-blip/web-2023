<script>
    import { goto } from '$app/navigation';
    let showNav = false;
  
    let navItems = [
      { title: "Home", link: "/", class: null },
      { title: "About", link: "/about", class: null },
      { title: "Future Consoles", link: "/", class: ".Technology" },
      { title: "In the Clouds", link: "/about", class: ".Impact" },
    ];
  
    function toggleNav() {
      showNav = !showNav;
    }
  
    async function navigate(event, link, targetClass) {
      event.preventDefault();
      showNav = false; // Close the menu when a link is clicked
  
      // Navigate to the new page
      await goto(link);
        
      // Scroll to the desired element
      const element = document.querySelector(targetClass);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  </script>
  
  <div class="mobileNav">
    <div class="header">
      <button class="toggle" on:click={toggleNav}>
        ☰
      </button>
      {#if showNav}
        <nav>
          {#each navItems as item (item.title)}
            <a href={item.link} on:click|preventDefault={(e) => navigate(e, item.link, item.class)}>
              {item.title}
            </a>
          {/each}
        </nav>
      {/if}
    </div>
    
  </div>
  
  <style>
.mobileNav {
    display: none;
    width: 100%;
  }

  .header {
    display: flex;
    top: 0;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    background-color: white;
    color: white;
    width: 100%;
    position: fixed;
    z-index: 999;
  }

  .toggle {
    font-size: 5rem;
    background: none;
    border: none;
    color: black;
  }

  nav {
    display: flex;
    flex-direction:column;
    background-color: white;
    position: absolute;
    align-items: center;
    top: 110px;
    left: 0;
    right: 0;
    width: 100%;
    height: 300px;
    padding: 10px 0;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075);
    z-index: 999;
  }

  nav a {
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 40px;
    display: block;
  }

  @media (max-width: 800px) {
    .mobileNav {
      display: block;
    }
  }
  @media screen and (min-width: 700px){
    .mobileNav{
      display: block;
    }
    .header{
      height: 60px;
    }
    .toggle{
      font-size: 3rem;
    }
    nav{
      top: 50px;
      height: 210px;
    }
    nav a{
      font-size: 25px;
    }
  }
  @media screen and (min-width: 1000px){
    .mobileNav{
      display: none;
    }
  }
  </style>