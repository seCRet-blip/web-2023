<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let dropdownItems = [
    {id: 1, title: 'Games', links: ['News', 'Testing', 'PS plus']},
    {id: 2, title: 'Hardware', links: ['PS5', 'PS4', 'PS VR2']}, 
    {id: 3, title: 'Services', links: ['PS Plus', 'PS Stars']}, 
    {id: 4, title: 'News', links: ['PS Blog', 'This month on playstation']}, 
    {id: 5, title: 'Shop', links: ['Support', 'IT Support', 'PS Status']}, 
    {id: 6, title: 'Support', links: ['Support', 'IT Support', 'PS Status']}, 
     
    // Add more items as needed
  ];
  let rotated = false;
  const dropdownStates = writable({});
  const marginTop = tweened(20, { duration: 200, easing: cubicOut });

  
  let x = [];

  function moveDivDown(id) {
    rotated = !rotated;
    dropdownStates.update(states => {
      // Close all other dropdowns
      for (let key in states) {
        if (states[key] && key != id) {
          x[key-1].style.display = 'none'; // keys start from 1
          states[key] = false;
        }
      }

      // Toggle the current dropdown
      if (states[id]) {
        x[id-1].style.display = 'none'; // ids start from 1
        marginTop.set(20);
        states[id] = false;
      } else {
        x[id-1].style.display = 'block'; // ids start from 1
        marginTop.set(40);
        states[id] = true;
      }

      return states;
    });
  }
</script>

<div class="links">
  {#each dropdownItems as item (item.id)}
    <a class="MainLinks" href="/" on:click|preventDefault={() => moveDivDown(item.id)}>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class:rotated={rotated} class="feather feather-arrow-down dropdown-icon"
           id="dropdown-icon">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>{item.title}</a>
  {/each}
</div>

{#each dropdownItems as item, index (item.id)}
  <div class="box" bind:this={x[index]} style="margin-top: {$marginTop}px">
    <div class="dropDownContent">
      {#each item.links as link}
        <a href="/">{link}</a>
      {/each}
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
  margin-left: 15px;
}


  .box {
    display: none;
    width: 100%;
    height: 100px;
    background-color: lightblue;
  }
  .dropDownContent {
  display: inline-block;
  margin-left: 40%;
  margin-right: 25%;
  padding-top: 40px; /* Add this line */
}
.dropDownContent a {
  padding-left: 15px;
  color: black;
  
}

</style>
