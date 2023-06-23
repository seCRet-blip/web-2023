<script>
      import { goto } from '$app/navigation';
      //array for all the content in and links in the footer//
  let items = [
    {
      title: "Home",
      links: [
        { text: 'Design and Simulation', link:"/", class: '.test2' }, 
        { text: 'Innovation in Gaming Consoles', link:"/", class: '.GamingD' },
        { text: 'The Future of Technology', link:"/", class: '.TechnologyD' },
        { text: 'Ai Intro', link:"/" ,class:'.AI_IntroD' }
      ]
    },
    {
      title: "The Future",
      links: [
        { text: 'Future of Gaming Consoles', link:"/about", class: '.Future' },
        { text: 'The Future of Technology', link:"/", class: '.TechnologyD' },
        { text: 'Virtual Reality in Gaming', link:"/about", class: '.Virtual' }
      ]
    },
    {
      title: "About",
      links: [
        { text: 'NVIDIA Graphics Technology', link:"/about", class: '.NVIDIA' }, 
        { text: 'Gaming Console Hardware', link:"/about", class: '.Gaming-Console' },
        { text: 'Future of Gaming Consoles', link:"/about", class: '.Future' },
        { text: 'Virtual Reality in Gaming', link:"/about", class: '.Virtual' },
        { text: 'Artificial Intelligence in Gaming', link:"/about", class: '.Artificial' },
        { text: 'Impact of Cloud Gaming', link:"/about", class: '.Impact' }
      ]
    },
    {
      title: "Gaming",
      links: [
        { text: 'Gaming Console Hardware', link:"/about", class: '.Gaming-Console' },
        { text: 'Innovation in Gaming Consoles', link:"/", class: '.GamingD' },
        { text: 'Future of Gaming Consoles', link:"/about", class: '.Future' },
        { text: 'Virtual Reality in Gaming', link:"/about", class: '.Virtual' },
        { text: 'Artificial Intelligence in Gaming', link:"/about", class: '.Artificial' },
        { text: 'Impact of Cloud Gaming', link:"/about", class: '.Impact' }
      ]
    }
    
  ];
  async function navigate(event, link, targetClass) {
      event.preventDefault();
       // Close the menu when a link is clicked
  
      // Navigate to the new page
      await goto(link);
        
      // Scroll to the desired element
      const element = document.querySelector(targetClass);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
</script>

<footer>
  <div class="grid-container">
    {#each items as item}
      <div class="grid-item">
        <div class="grid-content .text-align text-style">
          <h3 class="text-style">{item.title}</h3>
          {#each item.links as link}
            <p><a class="text-style" href={link.link} on:click|preventDefault={(e) => navigate(e, link.link, link.class)}>{link.text}</a></p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</footer>
  

  

