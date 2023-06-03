<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  let dropdownItems = [
  { 
    id: 1, 
    title: 'Games', 
    links: [
      { text: 'Design and Simulation', class: '.test' }, 
      { text: 'Gaming Redefined', class: '.Gaming' },
      { text: 'PS VR', class: 'psvrClass' },
      { text: 'PS Plus', class: 'psplusClass' },
      { text: 'Buy Games', class: 'buyGamesClass' }
    ], 
    secondLinks: [
      'Playstation indies',
      'PS4 games on PS5',
      'Free to play',
      'Playstation games on pc',
      'Deals & offers'
    ]
  },
  { 
    id: 2, 
    title: 'Hardware', 
    links: [
      { text: 'PS5', class: 'ps5Class' }, 
      { text: 'PS4', class: 'ps4Class' },
      { text: 'PS VR2', class: 'psvr2Class' }
    ], 
    secondLinks: [
      'DualSense wireless controller',
      'PULSE 3D wireless headset',
      'DUALSHOCK 4 wireless controller',
      'PS5 & PS4 accessories',
      'PlayStation VR'
    ]
  },
  { 
    id: 3, 
    title: 'Services', 
    links: [
      { text: 'PS Plus', class: 'psplusClass' },
      { text: 'PS Stars', class: 'psstarsClass' }
    ], 
    secondLinks: [
      'PS5 entertainment',
      'PS4 entertainment'
    ]
  },
  { 
    id: 4, 
    title: 'News', 
    links: [
      { text: 'PS Blog', class: 'psblogClass' },
      { text: 'This month on Playstation', class: 'thismonthClass' }
    ], 
    secondLinks: [
      'Accessibility',
      'TestingPrivacy & Safety'
    ]
  },
  { 
    id: 5, 
    title: 'Shop', 
    links: [
      { text: 'Digital Games and Services', class: 'digitalGamesClass' }
    ], 
    secondLinks: [
      'New releases',
      'Latest discounts',
      'Collections',
      'Buy gift card',
      'Subscribe to PS Plus'
    ]
  },
  { 
    id: 6, 
    title: 'About', 
    links: [
      { text: 'Support', class: 'supportClass' },
      { text: 'IT Support', class: 'itSupportClass' },
      { text: 'PS Status', class: 'psStatusClass' }
    ], 
    secondLinks: [
      'Account',
      'Store',
      'Games',
      'Hardware'
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

function toggleLinks() {
  showLinks = !showLinks;
}
import { goto } from '$app/navigation';

async function scrollToTest(event, targetClass) {
    event.preventDefault();

    // Navigate to the new page
    await goto('/');

    // Scroll to the desired element
    const element = document.querySelector(targetClass);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  
</script>



<div class="navBar">
  <div class="burger" on:click={toggleLinks}>
    <div></div>
    <div></div>
    <div></div>
  </div>
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
        <a href="/" on:click|preventDefault={(e) => scrollToTest(e, link.class)}>{link.text}</a>
        {/each}
      </div>
      <div class="dropDownContent secondLinksContainer">
        <!-- Second Links -->
        {#each item.secondLinks as secondLink}
          <a href="/about"> <span class="dot"></span> {secondLink}</a>
        {/each}
      </div>
    </div>
  </div>
{/each}



  
</div>

<style>

.burger {
  width: 2rem;
  height: 80px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  padding-left: 15px;
}
* {
  box-sizing: border-box;
}

.burger div {
  width: 5rem;
  height: 0.5rem;
  background-color: #333;
}
  .navBar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: white;
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

.secondLinksContainer {
  position: absolute;
  top: 100%; /* Position the second links below the border */
  left: 0;
  right: 0;
  transform: translateY(-50px); /* Adjust this value to create a gap between the border and second links */
}

/* start*/
.dropDownContent a {
  color: black;
  text-decoration: none; 
}


.firstDrop a:nth-child(n+2){
  padding-left: 90px;
}
.secondLinksContainer a:nth-child(n+2)
{
  padding-left: 30px; 
  
}


.dot {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    width: 10px;
    background-color: #2608eb;
    border-radius: 50%;
    
  }
  .box {
    position: absolute;
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
    padding-top: 20px;
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
}

.navBar .links.active {
  display: flex;
  flex-direction: column;
}
@media screen and (max-width: 600px) {
    .links {
        /* Styles for screens smaller than 600px */
        flex-direction: column;
        padding: 10px 0;
        text-align: center;
    }
    .navBar{
      width: 100%;
      height: 80px;
    }
    
    .MainLinks{
        padding: 5px 0; 
    }
    .MainLinks svg{
      display: none;
    }
    .navBar .links {
    display: none;
  }
  
  .navBar .burger {
    display: flex;
  }
  .box{
    visibility: hidden;
  }
}


</style>