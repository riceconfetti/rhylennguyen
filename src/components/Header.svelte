<script>
    export let name;
    export let w;
    let textWidth;
    $: count = Math.round(w/textWidth)+1;

    function nameOutput(c) {
        let output =[];
        for(let i=0; i <c; ++i) {
            output.push({id:i, name:{name}});
        }
        return output;
    }

    $: output = nameOutput(count);
    $: dCount = w > 1100 ? Math.round(((w-1100)/2)/textWidth) : 0;
    $: dOutput = nameOutput(dCount);
    $: marginLeft = w>1100 ? ((dCount+1)*textWidth) : textWidth;

</script>

<div class="fancy" style="margin-left: -{marginLeft}px">
    <span bind:clientWidth={textWidth}>{name}</span>
    {#each dOutput as d}
        <span>{name}</span>
    {/each} 
    <div class="heading">
        <h2>{name}</h2>
    </div>
    {#each output as o}
        <span>{name}</span>
    {/each}

</div>


<style lang="scss">
    :global(body) {
        overflow-x: hidden;
    }
    .fancy {
        display:flex;
        align-items: center;
    }
    span {
        font-weight: 500;
        color: rgba(52, 53, 56, 0.24);
        font-size: var(--font-size-lg);
        line-height: 0%;
    }
    
    .heading{ 
        width:max-content;
        h2 {
            line-height: 0%;
            &::before{
                content:"#";
            }
        }
    }
</style>