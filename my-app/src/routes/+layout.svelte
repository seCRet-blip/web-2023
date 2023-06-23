<script>
    
   
  import Nav from '$lib/NavBar.svelte';
  import Footer from '$lib/Footer.svelte';
  import PhoneNav from '$lib/PhoneNav.svelte';
  import '../Main.css'

</script>

  <Nav />
<PhoneNav />
  <slot />
    <Footer />  
  