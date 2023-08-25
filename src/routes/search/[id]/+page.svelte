<script>
    import  {MovieCard} from '$lib/components';
    export let data;
    
    console.log(data)
</script>
<div class="popular-movies grid grid-cols-auto-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 minmax(200px, 1fr) gap-x-8 gap-y-4">
{#each data.props.data as searchedMovies  }
   <MovieCard movie={searchedMovies}/> 
{/each}
</div>