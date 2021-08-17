<template>
	<PeopleList :people="people" />
</template>

<script>
import axios from 'axios';
import PeopleList from '../components/PeopleList';

export default {
	name: 'PeopleListPage',
	components: {
		PeopleList,
	},
	data() {
		return {
			people: [],
		}
	},
	created() {
		axios.get('http://localhost:8000/people')
			.then(response => this.people = response.data);
	},
}
</script>