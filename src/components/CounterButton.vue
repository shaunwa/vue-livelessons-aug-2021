<template>
	<p>You have clicked the button {{ numberOfClicks }} times</p>
	<button @click="onButtonClicked">Click me!</button>
</template>

<script>
export default {
	name: 'CounterButton',
	props: ['numberOfClicks'],
	methods: {
		onButtonClicked() {
			this.$emit('onIncrement');
		}
	},
	created() {
		console.log('Created CounterButton component');
	},
	updated() {
		console.log('CounterButton updated!');
	}
}
</script>