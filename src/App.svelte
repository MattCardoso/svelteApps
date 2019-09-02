<script>
	import CardGrid from './CardGrid.svelte';
	const personsDb =  [
		{name:'Paulo', prof:"Designer", src:"none"},
		{name:'Chad', prof:"Coach", src:"none"},
		{name:'Alex', prof:"Instagrammer", src:"none"},
		{name:'Luioe', prof:"Influencer", src:"none"},
		{name:'Ginny', prof:"Youtuber", src:"none"},
		{name:'John', prof:"Manager", src:"none"},
	];

	export let data = [];
	
</script>

<style>
.grid-container{
	margin: 10px 10px;
}

</style>
<div class='grid-container'>
	<CardGrid persons={personsDb}/>

</div>