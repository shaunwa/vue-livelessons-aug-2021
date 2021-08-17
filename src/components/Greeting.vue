<template>
	<h1>Hello Mr. {{ lastName }}, welcome to my app!</h1>
</template>

<script>
export default {
	name: 'Greeting',
	props: ['fullName'],
	computed: {
		firstName() {
			return this.fullName.split(' ')[0];
		},
		lastName() {
			return this.fullName.split(' ')[1];
		}
	}
}
</script>

<style scoped>
</style>