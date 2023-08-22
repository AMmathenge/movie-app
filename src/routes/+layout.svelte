<script>
  import "../app.postcss";
  import global from '../global.css';
  import { NavBar } from '$lib/components'
</script>
<svelte:head>
  <title>Movie zone</title>
</svelte:head>

<NavBar />

<slot />
