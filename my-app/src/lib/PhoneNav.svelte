<script>
    import { goto } from '$app/navigation';
    let showNav = false;
  //array containing all the links for the phone nav bar//
    let navItems = [
      { title: "Home", link: "/", class: null },
      { title: "About", link: "/about", class: null },
      { title: "Future Consoles", link: "/", class: ".Technology" },
      { title: "In the Clouds", link: "/about", class: ".Impact" },
    ];
  //toggles the drop down state//
    function toggleNav() {
      showNav = !showNav;
    }
  //function to navigate through the site using the built in go to method call//
  //uses the class from the array and targets it//
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
<!-- Outermost container for the mobile navigation -->
<div class="mobileNav">
  <!-- The header contains the toggle button and (conditionally) the navigation links -->
  <div class="header">
    <!-- Toggle button, clicking on it triggers the 'toggleNav' function -->
    <button class="toggle" on:click={toggleNav}>
      ☰
    </button>

    <!-- If 'showNav' is true, render the navigation menu -->
    {#if showNav}
      <nav>
        <!-- Iterate over 'navItems' and create a link for each one. 
        'item.title' is used as the key for each item in the list. 
        Clicking on the link triggers the 'navigate' function with 
        the event, the link, and the class as parameters -->
        {#each navItems as item (item.title)}
          <a href={item.link} on:click|preventDefault={(e) => navigate(e, item.link, item.class)}>
            {item.title}
          </a>
        {/each}
      </nav>
    {/if}
  </div>
</div>
  