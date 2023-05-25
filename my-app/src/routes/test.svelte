<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  let dropdownItems = [
  {id: 1, title: 'Games', links: ['PS5', 'PS4','PS VR' , 'PS Plus' , 'Buy Games'],secondLinks: ['PLaystation indies', 'PS4 games on PS5', 'Free to play' ,
  'Playstation games on pc' ,'Deals & offers']},
  {id: 2, title: 'Hardware', links: ['PS5', 'PS4', 'PS VR2'],secondLinks: ['DualSense wireless controller', 'PULSE 3D wireless headset', 'PS plus']}, 
  {id: 3, title: 'Services', links: ['PS Plus', 'PS Stars'],secondLinks: ['News', 'Testing', 'PS plus']}, 
  {id: 4, title: 'News', links: ['PS Blog', 'This month on Playstation'],secondLinks: ['News', 'Testing', 'PS plus']}, 
  {id: 5, title: 'Shop', links: ['Support', 'IT Support', 'PS Status'],secondLinks: ['News', 'Testing', 'PS plus']}, 
  {id: 6, title: 'Support', links: ['Support', 'IT Support', 'PS Status'],secondLinks: ['News', 'Testing', 'PS plus']}
  // Add more items as needed
];

const rotationStates = writable(dropdownItems.map(() => false));
  const dropdownStates = writable({});
  const marginTop = tweened(20, { duration: 200, easing: cubicOut });

  
  let x = [];

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


</script>

<div class="links">
  {#each dropdownItems as item, index (item.id)}
    <a class="MainLinks" href="/" 
       style:color={item.clicked ? '#2608eb' : 'initial'} 
       on:click|preventDefault={() => {changeColour(item); moveDivDown(item.id);}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class:rotated={rotationStatesVal[index]} class="feather feather-arrow-down dropdown-icon"
        id="dropdown-icon">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
      {item.title}
    </a>
  {/each}
</div>
{#each dropdownItems as item, index (item.id)}
  <div class="box" bind:this={x[index]}>
    <div class="linksContainer">
      <div class="dropDownContent firstDrop">
        <!-- Links -->
        {#each item.links as link}
          <a href="/">{link}</a>
        {/each}
      </div>
      <div class="dropDownContent secondLinksContainer">
        <!-- Second Links -->
        {#each item.secondLinks as secondLink}
            <a href="/"> <span class="dot"></span> {secondLink}</a>
        {/each}
      </div>
    </div>
  </div>
{/each}

<style>




  .dropdown-icon {
  transition: transform 0.3s ease-in-out;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.MainLinks{
  color: black;
  text-decoration: none;
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
  padding-left: 30px;
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


</style>
