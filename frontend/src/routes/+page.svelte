<script lang="ts">
  import Navbar from "../comps/Navbar.svelte";
  import Form from "../comps/track/Form.svelte";

  let date = (new Date().toString().split(" ").splice(0,4)).join(" ");
  
  let user = "";
  let forms = null;

  const names = ['Nick Cage', 'Johnny Depp', 'Ryan Gosling']
  
  // Dumbie function for testing.
  const change = () => {
    const index = Math.floor(Math.random() * names.length);
    user = names[index];
  } 

  change();
</script>

<Navbar />

<section>
  <h1 id="date-box">{user} - {date}</h1>
  <div id="current-nav">
    <div class="Box" id="current-page">
      <!-- Main Panel -->
      <Form />

    </div>
    <div class="Box" id="current-widgets">
  
      <!-- Widget Panel -->
      <Form />
   
    </div>
  </div>
</section>

<style>

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2vw;
  }

  #current-nav{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 2vh 0vh 0vh 0vh;
    height: 100%;
  }

  #current-page {
    width: 180%;
    margin-right: 1%;
  }

  #current-widgets {
    width: 100%;
  }

</style>