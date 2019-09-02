<script>
    import Card from './Card.svelte';
    export let persons ;
    //const personsParsed = JSON.parse(persons);
</script>

<style>
.card-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

}

</style>

<div class='card-container'>
    {#each persons as person}
        <Card {...person}/>
    {/each}
</div>