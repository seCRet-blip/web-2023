<div class="text-card">
  <h2>{title}</h2>
  <p>{text}</p>
  <div class="dropdown">
    <a on:click={toggleDropdown}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class:rotated={rotated} class="feather feather-arrow-down dropdown-icon"
           id="dropdown-icon">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
      Links
    </a>
    <div id="mydropDown" class="dropDownContent {show ? 'show' : ''}" on:clickoutside={hideDropdown}>
      <a href="/">link1</a>
      <a href="/">link2</a>
      <a href="/">link3</a>
      <a href="/">link4</a>
    </div>  
  </div>
</div>

<script>
 export let title;
  export let text;

  let rotated = false;
  let show = false;

  function toggleDropdown() {
    rotated = !rotated;
    show = !show;
  }

  function hideDropdown() {
    show = false;
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      hideDropdown();
    }
  });
</script>


  
  <style>
.text-card {
  width: 450px;
  height: 300px;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  
  text-align: left; /* align the text to the left */
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
}

.show {
  display: block;
}

</style>
  