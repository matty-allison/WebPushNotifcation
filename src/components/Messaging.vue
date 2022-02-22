<template>
  <div class="container">
    <h2>Hello Component!</h2>
  </div>
</template>

<script>
export default {
  mounted () {
      this.$messaging.getToken({vapidKey: "BB4yVZ9ajlpifdE-VxXCv8s9NEZlubTQ4DBS9zlVVpQFStVkLHLjPOwqy-wBXUUbpWI-s6Uh-TCbOyjGS1xxv40"})
      .then((currentToken) => {
        if (currentToken) {
          console.log('client token', currentToken)
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        })
  }
}
</script>

<style>

</style>