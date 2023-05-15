<script>
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let dropdownItems = [
    {id: 1, title: 'Games', links: ['News', 'Testing', 'PS plus']},
    {id: 2, title: 'Support', links: ['Support', 'IT Support', 'PS Status']},
    // Add more items as needed
  ];

  const dropdownStates = writable({});
  const marginTop = tweened(20, { duration: 200, easing: cubicOut });

  let x = [];

  function moveDivDown(id, index) {
    dropdownStates.update(states => {
      if (states[id]) {
        x[index].style.display = 'none';
        marginTop.set(20);
        states[id] = false;
      } else {
        x[index].style.display = 'block';
        marginTop.set(40);
        states[id] = true;
      }
      return states;
    });
  }
</script>

<style>
  .box {
    display: none;
    width: 100%;
    height: 100px;
    background-color: lightblue;
  }
  .dropDownContent{
    display: inline;
  }
  .dropDownContent a{
    padding-left: 15px;
  }
</style>

{#each dropdownItems as item, index (item.id)}
  <a href="/" on:click|preventDefault={() => moveDivDown(item.id, index)}>{item.title}</a>
  <div class="box" bind:this={x[index]} style="margin-top: {$marginTop}px">
    <div class="dropDownContent">
      {#each item.links as link}
        <a href="/">{link}</a>
      {/each}
    </div>
  </div>
{/each}
