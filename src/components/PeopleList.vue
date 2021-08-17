<template>
	<h3>People</h3>
	<ul>
		<li v-for="person in people" :key="person.id">{{ person.name }} - {{ person.age }} years old</li>
	</ul>
</template>

<script>
export default {
	name: 'PeopleList',
	props: ['people'],
}
</script>