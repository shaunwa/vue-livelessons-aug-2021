<template>
	<input placeholder="Name" v-model="name" />
	<input placeholder="Age" type="number" v-model.number="age" />
	<input placeholder="Favorite Food" v-model="favoriteFood" />
	<button @click="saveChanges">Submit</button>
</template>

<script>
export default {
	name: 'FormPage',
	data() {
		return {
			name: '',
			age: '',
			favoriteFood: '',
		}
	},
	methods: {
		displayValues() {
			alert(`name: ${this.name}, age: ${this.age}, favoriteFood: ${this.favoriteFood}`);
		},
		saveChanges() {
			alert('Saved changes');
			this.name = '';
			this.age = '';
			this.favoriteFood = '';
		}
	}
}
</script>