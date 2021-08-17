<template>
	<NavBar />
	<router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar';

export default {
	name: 'App',
	components: {
		NavBar,
	},
}
</script>

<style>
button {
	background-color: black;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 16px;
	padding: 8px;
}
</style>
