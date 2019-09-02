<script>
	export let name = 'Fulano'
	export let prof = 'l33t'
	export let src = 'default'
</script>

<style>
	.my-card{
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		transition: 0.3s;

		width: 200px;
		height: 300px;
		background-color: aquamarine;
		border-radius: 5px;
		
	}
	.my-card:hover{
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	.properties{
		padding: 2px 16px;
	}
</style>

<!-- {@debug person}-->

<div class="my-card">
	<img src={src} alt={name}>
	<div class='properties'>
		<h4>{name}</h4>
		<p>{prof}</p>
	</div>
</div>