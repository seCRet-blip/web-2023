<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  let dropdownItems = [
  {id: 1, title: 'Games', links: ['News', 'Testing', 'PS plus']},
  {id: 2, title: 'Hardware', links: ['PS5', 'PS4', 'PS VR2']}, 
  {id: 3, title: 'Services', links: ['PS Plus', 'PS Stars']}, 
  {id: 4, title: 'News', links: ['PS Blog', 'This month on Playstation']}, 
  {id: 5, title: 'Shop', links: ['Support', 'IT Support', 'PS Status']}, 
  {id: 6, title: 'Support', links: ['Support', 'IT Support', 'PS Status']}
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
  
    // Toggle the current dropdown
    if (states[id]) {
      x[id-1].style.display = 'none'; // ids start from 1
      x[id-1].style.zIndex = '0'; // Reset zIndex when hidden
      marginTop.set(20);
      states[id] = false;
      rotationStates.update(rs => {
        rs[id-1] = false;
        return rs;
      });
    } else {
      x[id-1].style.display = 'block'; // ids start from 1
      x[id-1].style.zIndex = '1'; // Increase zIndex when displayed
      marginTop.set(40);
      states[id] = true;
      rotationStates.update(rs => {
        rs[id-1] = true;
        return rs;
      });
    }

    return states;
  });
}


  let dataArray = [];




</script>

<div class="links">
  {#each dropdownItems as item, index (item.id)}
  <a class="MainLinks" href="/" on:click|preventDefault={() => moveDivDown(item.id)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"   
class:rotated={rotationStatesVal[index]} class="feather feather-arrow-down dropdown-icon"
id="dropdown-icon">
<polyline 
points="6 9 12 15 18 9"></polyline
></svg>{item.title}
  </a>
{/each}


</div>

{#each dropdownItems as item, index (item.id)}
  <div class="box" bind:this={x[index]} >
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
  position: absolute; /* Add this line */
  width: 100%;
  height: 100px;
  background-color: white;
  display: none;
  z-index: 1; /* Add this line */
  box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
}

.dropDownContent {
  display: inline-block;
  margin-left: 40%;
  margin-right: 25%;
  padding-top: 40px; 
  border-bottom: 5px solid black;
}

.dropDownContent a {
  padding-left: 15px;
  color: black;
}



</style>
