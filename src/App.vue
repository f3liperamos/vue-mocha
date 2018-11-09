<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    message: {
      default: 'Hello World!',
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  h1
    color blue
</style>