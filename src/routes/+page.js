export async function load({ fetch }) {
    const res = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=4067efced7bad4e2d9cb4de85dc0a520&language=en-US&page=1`
        );
        let data = await res.json();
        console.log(data)
        if(res.ok){ 
            return{
                props: { data : data.results }
            };
        } 
}