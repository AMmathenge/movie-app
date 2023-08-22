<script>
    import { PopularMovies } from '$lib/components'
    import { SearchBar } from '$lib/components'
    
    export let data;
    console.log(data)
    
</script>
<SearchBar/>
<PopularMovies movies={data.props?.data}/>


