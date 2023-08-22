<script>
    export let movie;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

</script>
<div class="flex flex-col p-4">
    <a href={'/movies/'+movie.id}>
        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} class="w-full h-30vh rounded-xl mb-4 ">
    </a>
    <div class="h-5vh">
        <h2 class="font-bold ">{movie.title}</h2>
        <p >{movie.release_date}</p>
        
    </div>  
</div>
   