<script >
    export let data;
    let movie = data.movie

    let imageBaseUrl = "https://image.tmdb.org/t/p/original"
</script>
<main class="mt-8 mb-8 ml-[20%] mr-[20%]">
    <div>
        <img  src={`${imageBaseUrl}${movie.backdrop_path}`} alt={movie.title} class="w-full h-30vh rounded-xl mb-4">
    </div>
    <div>
        <h1 class="font-bold pt-4 pb-4 pl-0 pr-0">{movie.title}</h1>
        <p class="pt-4 pb-4 pl-0 pr-0">{movie.overview}</p>
        <p class="pt-4 pb-4 pl-0 pr-0">
            <span class="font-bold">Release Date: </span>
            {movie.release_date} <br />
            <span class="font-bold">Budget: </span>
            ${movie.budget}<br />
            <span class="font-bold">Rating:</span>
            {movie.vote_average}<br/>
            <span class="font-bold">Runtime:</span>
            {movie.runtime}mins:
        </p>
        
    </div>
  </main>