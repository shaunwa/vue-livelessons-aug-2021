<template>
	<Congratulations v-if="numberOfClicks >= 10" :threshold="10" />
	<CounterButton
		:numberOfClicks="numberOfClicks"
		@onIncrement="incrementCount" />
</template>

<script>
import Congratulations from '../components/Congratulations';
import CounterButton from '../components/CounterButton';

export default {
	name: 'CounterButtonPage',
	data() {
		return {
			numberOfClicks: 0,
		};
	},
	methods: {
		incrementCount() {
			this.numberOfClicks += 1;
		}
	},
	components: {
		Congratulations, 
		CounterButton,
	},
}
</script>