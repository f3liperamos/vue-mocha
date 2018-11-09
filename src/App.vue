<template>
  <div>
    <Message :message="message" />
  </div>
</template>

<script>
import Message from './components/Message.vue'
export default {
  name: 'App',
  components: {
    Message
  },
  props: {
    message: String
  }
}
</script>
