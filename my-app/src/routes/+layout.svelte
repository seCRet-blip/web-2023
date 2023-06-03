<script>
    
   
  import Nav from '$lib/test.svelte';
  import Footer from '$lib/Footer.svelte';

  import './Main.css'

</script>
<div class="container">
  <Nav />
</div>
  <div class="container" >
    <slot />
  </div>
  <div class="container" >
    <Footer />  
  </div>
  