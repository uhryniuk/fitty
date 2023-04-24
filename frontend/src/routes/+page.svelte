<script>
  import Navbar from "../comps/Navbar.svelte";

  let date = (new Date().toString().split(" ").splice(0,4)).join(" ");

  let counter = 0;

  let increment = () => {
    counter += 1;
  };

</script>

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

<Navbar />

<section>
  <h1 id="date-box">{date}</h1>
  
  <div id="current-nav">
    <div class="Box" id="current-page">
      <div id="form">
      <div class="Box-header"><h2 class="Box-title"> First thing to track</h2></div>
      <div class="Box-footer">
        Contains the main for to fill out the daily data.

        it should go as follows:
      
        Sections (dropdown / collapsable)
        - Some form data, xyz.
        Sections (dropdown / collapsable)
        - Some form data, xyz.
        - Some form data, xyz.
        </div>
      </div>

      <div id="form">
      <div class="Box-header"><h2 class="Box-title"> Some other feature to track</h2></div>
      <div class="Box-footer">
        Make these sections drag and droppable to reorder them.
        These sections should be custom components that we parse on the initial fetch request.
        </div>
      </div>

    </div>
   
    <div id="current-widgets">
      sub content box
    </div>
  
  </div>
</section>
