<script>
    
   
  import Nav from '$lib/test.svelte';
  import Footer from '$lib/Footer.svelte';

  import './Main.css'

</script>
<div class="container">
  <Nav />
</div>

    <slot />

  <div class="container" >
    <Footer />  
  </div>
  