<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
  
    let moveDiv = false;
    const marginTop = tweened(20, { duration: 500, easing: cubicOut });
  
    function moveDivDown() {
      moveDiv = !moveDiv;
      marginTop.set(moveDiv ? 40 : 20);
    }
  </script>
  
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  </style>
  
  <a href="/" on:click|preventDefault={moveDivDown}>Click me to move the div down</a>
  <div class="box" style="margin-top: {$marginTop}px">I'm a moving div!</div>
  