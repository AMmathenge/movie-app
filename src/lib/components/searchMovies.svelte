<script>
    import global from '../../global.css'
    import {goto} from '$app/navigation'
    import {onMount} from 'svelte';

    let inputValue = '';
    let active = false;



    function cancelInactive() {
        if(inputValue){
            active = true;
        }else{
            active =false;
        }
    }
    function submitSearch(){
        goto( '/search/'+ inputValue);
    }
    
</script>
<form on:submit|preventDefault={submitSearch} class="relative">

    <div   class="  ">
       {#if !active }
            <label  class=" absolute text-green-500 px-4 py-2" >
                Search Movies
            </label>
       {/if}
        
        <div   class="gap-4 w-1/4  ">
            <input  on:blur={cancelInactive}  on:focus={() => (active = true)} bind:value={inputValue} class="h-full w-full text-white  px-4 py-2  w-full rounded-2xl outline-none  bg-lime-950" type="text" name="" id="">
            {#if inputValue}
                <button type="submit" class="absolute h-full top-0 left-64 bg-blue-700  px-4 py-2 rounded-r-xl text-white cursor-white font-bold h-full">
                    search
                </button>
            {/if}
            
        </div>
    </div>

</form>