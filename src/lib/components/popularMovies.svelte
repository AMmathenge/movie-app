<script>
    export let movies;
    import { MovieCard } from '$lib/components'

    
</script>
<h3 class="px-16 py-8  font-bold">Popular Movies</h3>
<div class="popular-movies grid grid-cols-auto-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 minmax(200px, 1fr) gap-x-8 gap-y-4">
    {#each  movies as movie}
    <MovieCard {movie} />
    {/each}
</div>
