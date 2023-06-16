<script>
    
   
  import Nav from '$lib/test.svelte';
  import Footer from '$lib/Footer.svelte';
  import PhoneNav from '$lib/PhoneNav.svelte';
  import '../Main.css'

</script>
<div class="container">
  <Nav />
<PhoneNav />
</div>

  <slot />



  <div class="container" >
    <Footer />  
  </div>
  