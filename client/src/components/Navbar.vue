<template lang="html">
  <div id="navbar">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <h4 style="color:white;">Welcome {{username}}</h4>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <form class="navbar-form navbar-right">
            <button @click='logout()' type="submit" class="btn btn-danger">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.username = localStorage.getItem('username')
  }
}
</script>

<style lang="css">
</style>
