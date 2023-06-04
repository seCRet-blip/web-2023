<script>
    import { goto } from '$app/navigation';
    let showNav = false;
  
    let navItems = [
      { title: "Home", link: "/", class: '.test' },
      { title: "About", link: "/about", class: ".aboutSection" },
      { title: "Services", link: "/about", class: ".servicesSection" },
      { title: "Contact", link: "/about", class: ".contactSection" },
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
  
  <style>
.mobileNav {
    display: none;
    width: 100%;
  }

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    background-color: white;
    color: white;
    width: 100%;
    position: fixed;
    z-index: 10;
  }

  .toggle {
    font-size: 2rem;
    background: none;
    border: none;
    color: black;
  }

  nav {
    display: flex;
    flex-direction:row;
    background-color: white;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 10px 0;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075);
    z-index: 1;
  }

  nav a {
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }

  @media (max-width: 800px) {
    .mobileNav {
      display: block;
    }
  }
  </style>