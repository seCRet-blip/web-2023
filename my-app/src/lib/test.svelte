<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { goto } from '$app/navigation';
  let dropdownItems = [
  {
    id: 1,
    title: "Home",
    links: [
      { text: 'Design and Simulation', link:"/", class: '.test2' },
      { text: 'Innovation in Gaming Consoles', link:"/", class: '.GamingD' },
      { text: 'The Future of Technology', link:"/", class: '.TechnologyD' },
      { text: 'Ai Intro', link:"/", class: '.AI_IntroD' }
      ]
  },
  {
    id: 2,
    title: "The Future",
    links: [
      { text: 'Future of Gaming Consoles', link:"/about", class: '.Future' },
      { text: 'The Future of Technology', link:"/", class: '.TechnologyD' },
      { text: 'Virtual Reality in Gaming', link:"/about", class: '.Virtual' }
    ],
    secondLinks: []
  },
  {
    id: 3,
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
    id: 4,
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




let x = [];


const rotationStates = writable(dropdownItems.map(() => false));
  const dropdownStates = writable({});
  const marginTop = tweened(20, { duration: 200, easing: cubicOut });
  let rotationStatesVal;
rotationStates.subscribe(val => rotationStatesVal = val);

function moveDivDown(id) {
  dropdownStates.update(states => {
    const isDropdownOpen = states[id];
    
    // Close all other dropdowns
    Object.keys(states).forEach(key => {
      if (key !== id) {
        x[key - 1].style.display = 'none';
        x[key - 1].style.zIndex = '0';
        states[key] = false;
        rotationStates.update(rs => {
          rs[key - 1] = false;
          return rs;
        });
      }
    });

    // Toggle the current dropdown
    if (isDropdownOpen) {
      x[id - 1].style.display = 'none';
      x[id - 1].style.zIndex = '0';
      marginTop.set(20);
    } else {
      x[id - 1].style.display = 'block';
      x[id - 1].style.zIndex = '1';
      marginTop.set(40);
    }

    states[id] = !isDropdownOpen;
    rotationStates.update(rs => {
      rs[id - 1] = !isDropdownOpen;
      return rs;
    });

    return states;
  });
}
function changeColour(clickedItem) {
  // Iterate over all items
  dropdownItems.forEach(item => {
    // If the item is the clicked item and is already 'clicked', unclick it
    // If it's not 'clicked', click it
    if (item === clickedItem) {
      item.clicked = !item.clicked;
    } else {
      // All other items should be 'unclicked'
      item.clicked = false;
    }
  });
  // This line is to make Svelte reactivity work
  dropdownItems = dropdownItems;
}
let showLinks = false;




async function scrollToTest(event,link, targetClass, id) {
    event.preventDefault();
  console.log(targetClass)
    // Navigate to the new page
    await goto(link);

    // Scroll to the desired element
    const element = document.querySelector( targetClass); // added the dot here
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    moveDivDown(id);
}


  
</script>




<div class="desktopNav">
  <div class="links {showLinks ? 'active' : ''}">
    {#each dropdownItems as item, index (item.id)}
      <a class="MainLinks" href="/" 
         style:color={item.clicked ? '#2608eb' : 'initial'} 
         on:click|preventDefault={() => {changeColour(item); moveDivDown(item.id);}}
      >
        {item.title}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class:rotated={rotationStatesVal[index]} class="feather feather-arrow-down dropdown-icon"
          id="dropdown-icon">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    {/each}
  </div>
  
  {#each dropdownItems as item, index (item.id)}
    <div class="box" bind:this={x[index]}>
      <div class="linksContainer">
        <div class="dropDownContent firstDrop">
          <!-- Links -->
          {#each item.links as link}
          <a href="/" on:click|preventDefault={(e) => scrollToTest(e, link.link, link.class, item.id)}>{link.text}</a>

          {/each}
        </div>
       
      </div>
    </div>
  {/each}
</div>  
<style>
    .desktopNav {
      position: absolute;
      width: 100%;
    display: block;  /* Display navbar on desktop by default */
  }

* {
  box-sizing: border-box;
}

  .dropdown-icon {
  transition: transform 0.3s ease-in-out;
  transform: translateY(5px);
  height: 20px;
  width: 20px;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
  
}

.MainLinks{
  color: initial;
  text-decoration: none;
  padding-left: 15px; 
}

.MainLinks:hover, .MainLinks:hover svg {
  color: #2608eb !important;
  
}

.linksContainer::after {
  content: '';
  position: absolute;
  bottom: 90px;
  left: 0;
  right: 0;
  height: 1px; 
  background-color: #797777; 
  transform: translateY(40px);
}



/* start*/
.dropDownContent a {
  color: black;
  text-decoration: none; 
}


.firstDrop a:nth-child(n+2){
  padding-left: 90px;
}

  .box {
    position: fixed;
    width: 100%;
    height: 150px;
    background-color: white;
    display: none;
    z-index: 1;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075);
  }

  .linksContainer {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.dropDownContent {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.links{
  position: fixed;
  z-index: 10;
  background-color: white;
  width: 100%;
  height: 50px;
}

@media (max-width: 800px) {
    .desktopNav {
      display: none;  /* Hide navbar on mobile */
    }
  }

</style>

