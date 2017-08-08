<template lang="html">
  <div id="register">
    <div class="container">
      <div class="row">
        <form class="form-register">
          <h2 class="form-signin-heading">Please Sign Up</h2>
          <label for="name">Name</label>
          <input v-model="name" type="text" class="form-control" placeholder="name" required autofocus>
          <label for="email">Email</label>
          <input v-model="email" type="text" class="form-control" placeholder="email" required autofocus>
          <label for="username">Username</label>
          <input v-model="username" type="text" class="form-control" placeholder="username" required autofocus>
          <label for="password">Password</label>
          <input v-model="password" type="password" class="form-control" placeholder="password" required autofocus>
          <label for="role">Role</label>
          <select class="form-control" v-model="selected">
            <option value="">User</option>
            <option value="">Admin</option>
          </select>
          <br>
          <button type="submit" class="btn btn-primary" @click="signUp()">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      selected: ''
    }
  },
  methods: {
    signUp () {
      this.$http.post(`http://localhost:3000/api/signup`, {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        selected: this.selected
      })
      .then(res => {
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.form-register {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
</style>
