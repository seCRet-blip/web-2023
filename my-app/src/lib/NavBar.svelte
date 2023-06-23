<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { goto } from '$app/navigation';
  
  let x = [];
  //array of all the links and text for the nav bar//
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
  // `rotationStates` is a writable Svelte store. 
  // It creates an array of boolean values, all set to `false`, with the length same as `dropdownItems` array.
  const rotationStates = writable(dropdownItems.map(() => false));
  // `dropdownStates` is a writable Svelte store. It is initialized as an empty object.
  const dropdownStates = writable({});
  // `marginTop` is a tweened Svelte store. It is initialized with a value of `20`. 
  // `tweened` store allows for smooth transition between its values.
  // The `cubicOut` easing function will make transitions slower at the end.
  const marginTop = tweened(20, { duration: 200, easing: cubicOut });
  // Placeholder variable for the value of `rotationStates`
  let rotationStatesVal;
  // Subscribing to the changes in `rotationStates` store. 
  // Whenever the state updates, `rotationStatesVal` will be set to the updated state.
  rotationStates.subscribe(val => rotationStatesVal = val);
  function moveDivDown(id) {
  // Updates the dropdownStates store based on the function passed to it
  dropdownStates.update(states => {
    // Checks if the dropdown with the given id is open
    const isDropdownOpen = states[id];
    // Closes all other dropdowns
    Object.keys(states).forEach(key => {
      if (key !== id) {  // If the key is not the current id
        x[key - 1].style.display = 'none';  // hide the dropdown
        x[key - 1].style.zIndex = '0';  // set its z-index to 0
        states[key] = false;  // update the state to indicate that the dropdown is closed
        // Update the rotationStates store to indicate that the dropdown is closed
        rotationStates.update(rs => {
          rs[key - 1] = false;
          return rs;
        });
      }
    });
    // Toggles the current dropdown
    if (isDropdownOpen) {  // If the dropdown is open
      x[id - 1].style.display = 'none';  // hide the dropdown
      x[id - 1].style.zIndex = '0';  // set its z-index to 0
      marginTop.set(20);  // set the margin-top to 20
    } else {  // If the dropdown is not open
      x[id - 1].style.display = 'block';  // show the dropdown
      x[id - 1].style.zIndex = '1';  // set its z-index to 1
      marginTop.set(40);  // set the margin-top to 40
    }
    // Toggle the dropdown state in the states object
    states[id] = !isDropdownOpen;
    // Update the rotationStates store to reflect the new dropdown state
    rotationStates.update(rs => {
      rs[id - 1] = !isDropdownOpen;
      return rs;
    });
    // Return the updated states object to update the dropdownStates store
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



async function scrollToTest(event, link, targetClass, id) {
  // Prevents the default event behavior
  event.preventDefault();
  // Logs the targetClass to the console for debugging purposes
  console.log(targetClass);
  // Uses the svelte's goto function to navigate to a different page
  await goto(link);
  // Selects the element on the page that matches the targetClass
  const element = document.querySelector(targetClass);
  // If the element exists, smoothly scrolls the element into view
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // Call the moveDivDown function with the id parameter to close the dropdown after navigation
  moveDivDown(id);
}

</script>
<!-- Begin the Navigation Bar -->
<div class="desktopNav absolute">

  <!-- Container for the Main Navigation Links -->
  <div class="links position-fixed {showLinks ? 'active' : ''}">

    <!-- Loop through each Item in dropdownItems Array -->
    {#each dropdownItems as item, index (item.id)}

      <!-- Navigation Link -->
      <a class="MainLinks relative text-style {item.clicked ? 'clicked' : ''}" href="/"
          on:click|preventDefault={() => {changeColour(item); moveDivDown(item.id);}}
      >
        <!-- Display the Title of the Link -->
        {item.title}

        <!-- Dropdown Icon (Arrow), rotates when dropdown is active -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class:rotated={rotationStatesVal[index]} class="relative feather feather-arrow-down dropdown-icon"
          id="dropdown-icon">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    {/each}
  </div>

  <!-- Begin Each Dropdown Menu -->
  {#each dropdownItems as item, index (item.id)}

    <!-- Dropdown Menu Container -->
    <div class="box position-fixed" bind:this={x[index]}>
      
      <!-- Inner Container for Links in Dropdown -->
      <div class="linksContainer flex-center">

        <!-- Links in Dropdown -->
        <div class="dropDownContent-n firstDrop flex-center text-style ">

          <!-- Loop through each Link in the Item's links Array -->
          {#each item.links as link}
            <!-- Navigation Link in Dropdown -->
            <a class="text-style" href="/" on:click|preventDefault={(e) => scrollToTest(e, link.link, link.class, item.id)}>{link.text}</a>

          {/each}
        </div>

      </div>
    </div>
  {/each}

</div>


