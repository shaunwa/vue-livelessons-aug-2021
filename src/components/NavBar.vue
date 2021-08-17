<template>
	<ul>
		<li>
			<router-link to="/">Home</router-link>
		</li>
		<li>
			<router-link to="/counter-button">Counter Button</router-link>
		</li>
		<li>
			<router-link to="/people">People List</router-link>
		</li>
		<li>
			<router-link to="/form">Form</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'NavBar',
}
</script>