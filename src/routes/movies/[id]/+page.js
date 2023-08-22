 
export async function load({ fetch, params }) {


  const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=4067efced7bad4e2d9cb4de85dc0a520&language=en-US`
    );
    let data = await res.json();
    console.log(data)
    if(res.ok){ 
      return{
          movie:data
      };
    }else{
      return {
        movie:{}
      }
    }    
  }