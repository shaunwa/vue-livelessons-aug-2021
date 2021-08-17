<template>
	<h1>Congratulations, you've reached {{ threshold }} clicks!</h1>
</template>

<script>
export default {
	name: 'Congratulations',
	props: ['threshold'],
}
</script>