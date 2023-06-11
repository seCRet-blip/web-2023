<script>
  import { onMount } from 'svelte';

  export let title;
  export let text;
  export let textCardType;

  let dropdownState = false;
  let links = ["Shop", "Newsroom", "Professionals", "Creators", "Developers", "Researchers", "XR"];

  function toggleDropdown() {
    dropdownState = !dropdownState;
  }

  function hideDropdown() {
    dropdownState = false;
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  function handleClickOutside(event) {
    if (!event.target.closest('.dropdown')) {
      hideDropdown();
    }
  }
  function handleClick() {
    console.log("this is the read me function")
  }
</script>

<div class="text-card">
  <h2>{title}</h2>
  <p>{text}</p>
  <!-- svelte-ignore a11y-missing-attribute -->

{#if textCardType ==='dropdown'}

  <div class="dropdown">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a on:click={toggleDropdown}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class:rotated={dropdownState} class="feather feather-arrow-down dropdown-icon"
           id="dropdown-icon">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
      Links
    </a>
    <div class={dropdownState ? 'dropDownContent show' : 'dropDownContent'} on:clickoutside={hideDropdown}>
      {#each links as link }
        <a href="/">{link}</a>
      {/each}
    </div>
  </div>
  {:else  if textCardType === 'readmore'}
  <button on:click={handleClick}>Read more</button>

  {/if}
</div>

<style>
  .text-card {
    width: 450px;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    text-align: left;
    transform: translateY(-30px);
    line-height: 40px;
  }

  h2 {
    font-size: 24px;
    margin: 0 0 10px 0;
    font-weight: 700;
    text-align: center;
    margin-right: 40%;
  }

  p {
    font-size: 25px;
    margin: 0;
    text-align: left;
  }
  .dropDownContent.show {
    display: block;
}

  .dropdown-icon {
    transition: transform 0.3s ease-in-out;
  }

  .dropdown-icon.rotated {
    transform: rotate(180deg);
  }

  .dropDownContent {
    display: none;
    position: absolute;
    z-index: 1;
    width: 500px;
    flex-wrap: wrap;
  }

  .dropDownContent a {
    display: inline;
    padding: 5px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .dropDownContent a:hover {
    background-color: #eee;
  }
  
  /* Responsive styles */
  @media only screen and (max-width: 800px) {
    .text-card {
      width: 100%;
      height: auto;
      margin-left: 0;
      margin-right: 0;
      transform: none;
      height: 100px;
    }

    h2 {
      font-size: 20px;
      margin-right: 0;
    }

    p {
      font-size: 18px;
      text-align: center;
    }

    .dropdown {
      text-align: center;
    }

    .dropDownContent {
      width: 100%;
      position: static;
      display: none;
      flex-wrap: wrap;
      justify-content: center;
    }

    .dropDownContent a {
      padding: 5px 10px;
    }
  }
</style>