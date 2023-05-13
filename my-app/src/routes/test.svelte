<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let moveDiv = false;
  const marginTop = tweened(20, { duration: 500, easing: cubicOut });
  let x;

  function moveDivDown() {
    moveDiv = !moveDiv;
    marginTop.set(moveDiv ? 40 : 20);
  }

  $: if (x) {
    if (moveDiv) {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
</script>

<style>
  .box {
    display: none;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }
</style>

<a href="#" on:click|preventDefault={moveDivDown}>Click me to move the div down</a>
<div class="box" bind:this={x} style="margin-top: {$marginTop}px">


<a href="/">test</a>
<a href="/">test</a>
<a href="/">test</a>
<a href="/">test</a>

</div>
