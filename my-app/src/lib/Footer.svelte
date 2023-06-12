<script>
      import { goto } from '$app/navigation';
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
        <div class="grid-content">
          <h3>{item.title}</h3>
          {#each item.links as link}
            <p><a href={link.link} on:click|preventDefault={(e) => navigate(e, link.link, link.class)}>{link.text}</a></p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</footer>


  
<style>
  .grid-content {
    text-align: left;
    margin-right: 25%;
  }
  .grid-content, a ,h3{
    text-decoration: none;
    color: #333;
  }
  .grid-content, a:hover{
    color: #2608eb;
  }
  footer {
    padding: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
  }
  
  .grid-item {
    padding: 10px;
    height: 250px;
    width: 100%;
    text-align: center;
    border-left: 1px solid #333;
  }
  
  .grid-item:first-child {
    border-left: none;
  }
  
  /* Smartphone portrait and landscape */
  @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 480px) { 
      .grid-container {
        grid-template-columns: repeat(2, 1fr);
      }
      .grid-item{
        height: 400px;
        
      }
      .grid-content {
        margin-right: 0;
      }
      .grid-content ,a{
        font-size: 30px;
      }
  }
  
  /* Tablet portrait and landscape */
  @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) { 
      .grid-container {
          grid-template-columns: repeat(2, 2fr); 
      }
      .grid-content {
        margin-right: 10%;
      }
  }
  
  </style>
  

