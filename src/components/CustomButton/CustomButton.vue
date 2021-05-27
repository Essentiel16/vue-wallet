<template>
	<button :class="[ 'btn', computedColor, computedSize ]" v-on="$listeners"> 
    <slot/>
  </button>
</template>

<script src="./CustomButton.js"></script>
<style lang="scss" src="./CustomButton.scss">

</style>
