<script>
    import { PopularMovies } from '$lib/components'
    import { SearchBar } from '$lib/components'
    
    export let data;
    
    
</script>
<SearchBar/>
<PopularMovies movies={data.props?.data}/>


