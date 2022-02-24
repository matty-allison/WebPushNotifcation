<template>
  <div class="display"></div>
  <form class="form">
      <input type="text" required placeholder="Type...">
      <button>Send</button>
  </form>
</template>

<script>
export default {
  setup() {
  }
}
</script>

<style scoped>
.form {
  display: flex;
}
.form input{
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 15px;
  margin: 10px;
  outline: none;
}
.form button {
  height: 40px;
  width: 120px;
  background: none;
  border: 3px solid #00d9ff;
  border-radius: 25px;
  margin: 20px;
  font-size: 15px;
  font-weight: 600;
}

.form button:hover {
  color: white;
  background: #00d9ff;
}

.display {
    height: 80vh;
    width: 80vh;
    background-color: #eeeeee;
}
</style>