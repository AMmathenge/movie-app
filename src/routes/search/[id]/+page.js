 
export async function load({ params }) {


    const res = await fetch(
           `https://api.themoviedb.org/3/search/movie?api_key=4067efced7bad4e2d9cb4de85dc0a520&query=${params.id}&include_adult=false&language=en-US&page=1`
      );
      let data = await res.json();
      console.log(data.results);
      if(res.ok){ 
        return{
            props: { data : data.results }
        };
      }    
    }