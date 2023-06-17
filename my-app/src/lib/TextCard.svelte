<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  export let title;
  export let text;
  export let textCardType;

  let dropdownState = false;

  let LinkItems = [
  {  
    title: "About", 
    link:"/about", 
    class: null
  }, 
  {
    title: "|Virtual Reality", 
    link:"/about", 
    class:'.Virtual'
  },
  {  
    title: "|Gaming Console", 
    link:"/about", 
    class:'.Gaming-Console'
  }, 
  {  
    title: "|AI", 
    link:"/about", 
    class:'.Artificial'
  }, 
];

  let links = ["Shop", "Newsroom", "Professionals", "Creators", "Developers", "Researchers", "XR"];
  let showMore = false;
  let numSentences = 2; // Number of sentences to display initially

  function handleClick() {
    showMore = !showMore; // Toggle the visibility of additional text
  }

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

}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="text-card" class:readmore-card={textCardType === 'readmore'} on:click={handleClick}>
  <h2 class="title-c">{title}</h2>
  {#if textCardType === 'dropdown'}
    <p class="text-c">{text}</p>

    <div class="dropdown">
      <!-- Dropdown code here -->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <a on:click={toggleDropdown}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class:rotated={dropdownState} class="feather feather-chevron-down dropdown-icon"
        id="dropdown-icon">
     <polyline points="6 9 12 15 18 9"></polyline>
   </svg>
   
        Links
      </a>
      <div class={dropdownState ? 'dropDownContent show absolute' : 'dropDownContent'} on:clickoutside={hideDropdown}>
        {#each LinkItems as link }
        <a href="/" on:click|preventDefault={(e) => scrollToTest(e, link.link, link.class, link.id)}>{link.title}</a>
        {/each}
      </div>
    </div>
    {:else if textCardType === 'readmore'}
    <div class="readmore-card">
      {#if !showMore}
        {#each text.split('.').slice(0, numSentences) as sentence}
          <p class="text-c">{sentence}{#if !showMore && numSentences > 0 && sentence !== text.split('.').slice(0, numSentences).pop()}...{/if}</p>
        {/each}
        {#if text.split('.').length > numSentences}
          <p class="text-c"> <strong>Click to read more</p>
        {/if}
      {:else}
        <p class="text-c">{text}</p>
      {/if}
    </div>
  {/if}
</div>


<style>

  /* Responsive styles */
  @media only screen and (max-width: 600px) {
    
    .text-card {
      width: 100%;
      height: auto;
      margin-left: -20px;
      margin-right: 0;
      transform: none;
      height: 80px;
      z-index: 0;
      
    }

    h2 {
      font-size: 50px;
      padding-bottom: 10px;
      margin-right: 0;
      line-height: 50px;
    }

    p {
      font-size: 40px;
      text-align: left;
      line-height: 60px;
      
    }

    .dropdown {
      text-align: center;
      display: none;
    }

    .dropDownContent {
      width: 100%;
      position: static;
      display: none;
      flex-wrap: wrap;
      justify-content: center;
    }
 
    .readmore-card p{
      font-size: 25px;
      line-height: 55px;
      text-align: left;
      padding-left: 10%;
     
  }
  .readmore-card h2{
    margin-left: 30px;
    font-size: 60px;
    line-height: 60px;
  }
    .dropDownContent a {
      padding: 5px 10px;
      
    }
  }

  @media only screen and (min-width: 700px) {
    .text-card{
      margin-left: 0;
      width: 400px;
    }
  }
  @media only screen and (min-width: 1000px) {
    .text-card{
      margin-left: 0;
      width: 500px;
    }
  }
  
</style>