<script>
    
   
  import Nav from '$lib/test.svelte';
  import Footer from '$lib/Footer.svelte';

  import './Main.css'
</script>
<div class="container">
  <Nav />
</div>
  <!--i am some common stuff --> 
  <div class="container" >
    <slot />
  </div>
  <div class="container" >
    <Footer />  
  </div>
  