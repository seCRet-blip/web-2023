<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  export let title;
  export let text;
  export let textCardType;
//array that is containing the links and text for the drop down menu //
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

  
  // 'showMore' is a flag indicating whether to show additional text
  let showMore = false;

  // 'numSentences' specifies the number of sentences to display initially
  let numSentences = 2;

  // 'handleClick' function toggles the visibility of additional text
  function handleClick() {
    showMore = !showMore;
  }

  // 'toggleDropdown' function changes the dropdown state between open and closed
  function toggleDropdown() {
    dropdownState = !dropdownState;
  }

  // 'hideDropdown' function sets the dropdown state to closed
  function hideDropdown() {
    dropdownState = false;
  }

  // 'onMount' function adds an event listener for click events when the component is mounted
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    
    // This return function will be called when the component is unmounted
    // It removes the click event listener from the document
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
  // 'handleClickOutside' function hides the dropdown if a click event occurs outside of the dropdown
  function handleClickOutside(event) {
    if (!event.target.closest('.dropdown')) {
      hideDropdown();
    }
  }
  // 'scrollToTest' function prevents the default click event, navigates to a new page, and scrolls to a specific element
  async function scrollToTest(event, link, targetClass, id) {
    // Prevent the default action of the click event
    event.preventDefault();

    console.log(targetClass);

    // Navigate to the new page
    await goto(link);

    // Scroll to the desired element
    const element = document.querySelector(targetClass);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<!-- The 'text-card' div is an interactive container for your text content, it triggers 'handleClick' function when clicked. -->
<!-- 'svelte-ignore a11y-click-events-have-key-events' is used to suppress warnings about a11y accessibility rules. -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="text-card" class:readmore-card={textCardType === 'readmore'} on:click={handleClick}>
  
  <!-- The title of the card -->
  <h2 class="title-c">{title}</h2>

  <!-- Conditional rendering based on 'textCardType' -->
  {#if textCardType === 'dropdown'}
    <!-- Displays text if 'textCardType' is 'dropdown' -->
    <p class="text-c">{text}</p>

    <!-- A dropdown menu container -->
    <div class="dropdown">
      
      <!-- A clickable link that triggers 'toggleDropdown' function when clicked -->
      <!-- 'svelte-ignore a11y-click-events-have-key-events' and 'svelte-ignore a11y-missing-attribute' are used to suppress warnings about a11y accessibility rules. -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-missing-attribute -->
      <a on:click={toggleDropdown}>
        <!-- SVG arrow to indicate dropdown -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class:rotated={dropdownState} class="feather feather-chevron-down dropdown-icon"
        id="dropdown-icon">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        <!-- Text label for the dropdown -->
        Links
      </a>
      
      <!-- A dropdown content container that shows/hides based on 'dropdownState' -->
      <!-- It also hides when user clicks outside of the dropdown -->
      <div class={dropdownState ? 'dropDownContent show absolute' : 'dropDownContent'} on:clickoutside={hideDropdown}>
        <!-- Iterates over 'LinkItems' and generates a link for each item -->
        {#each LinkItems as link }
        <a href="/" on:click|preventDefault={(e) => scrollToTest(e, link.link, link.class, link.id)}>{link.title}</a>
        {/each}
      </div>
    </div>
  {:else if textCardType === 'readmore'}
    <!-- If 'textCardType' is 'readmore', it will render this block -->
    <div class="readmore-card">
      {#if !showMore}
        <!-- If 'showMore' is false, it will show first 'numSentences' from the 'text' -->
        {#each text.split('.').slice(0, numSentences) as sentence}
          <p class="text-c">{sentence}{#if !showMore && numSentences > 0 && sentence !== text.split('.').slice(0, numSentences).pop()}...{/if}</p>
        {/each}
        <!-- If there are more sentences than 'numSentences', it will show "Click to read more" -->
        {#if text.split('.').length > numSentences}
          <p class="text-c"> <strong>Click to read more</p>
        {/if}
      {:else}
        <!-- If 'showMore' is true, it will show all 'text' -->
        <p class="text-c">{text}</p>
      {/if}
    </div>
  {/if}
</div>
