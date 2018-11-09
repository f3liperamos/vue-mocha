<template>
  <h1>{{message}}</h1>
</template>

<script>
import MessagEntity from './MessageEntity'

export default {
  name: 'App',
  props: {
    message: {
      default: new MessagEntity().message,
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  h1
    color blue
</style>
