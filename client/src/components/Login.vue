<template lang="html">
  <div id="login">
    <div class="container">
      <div class="row">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please Sign In</h2>
          <label for="username">Username</label>
          <input type="text" v-model="username" class="form-control" placeholder="username" required autofocus>
          <label for="password">Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="password" required autofocus>
          <br>
          <router-link to="Register">Register</router-link>
          <br>
          <br>
          <button type="submit" class="btn btn-primary" @click="login()">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  component: {Register},
  methods: {
    login () {
      this.$http.post(`http://localhost:3000/api/signin`, {username: this.username, password: this.password})
      .then(res => {
        console.log(res.data)
        var token = res.data.token
        localStorage.setItem('token', token)
        localStorage.setItem('id', res.data.user_id)
        localStorage.setItem('username', res.data.username)
        this.$router.push('/Home')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
</style>
