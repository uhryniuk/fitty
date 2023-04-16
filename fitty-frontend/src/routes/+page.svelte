
<script>
import Widget from './Widget.svelte'
let counter = 0


let increment = () => {
    counter += 1;
  }

</script>

<h1>Here is our {counter}</h1>
<button on:click={increment} >Click</button>
<Widget />
