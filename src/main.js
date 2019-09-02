import App from './App.svelte';

function getPersonsDB(){
	return [
		{id:1,name:'Paulo', prof:"Designer", src:"none"},
		{id:2,name:'Chad', prof:"Coach", src:"none"},
		{id:3,name:'John', prof:"Instagrammer", src:"none"}
	];
}

const app = new App({
	target: document.body,
	props: {
		data:getPersonsDB()
	}
});

export default app;