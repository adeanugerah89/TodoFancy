<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form>
            <div class="form-group">
            <input v-model="title" type="text" class="form-control">
            </div>
            <textarea v-model="content" rows="8" cols="80"></textarea>
            <br>
            <button @click='updateTodo()' type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  data () {
    return {
      title: '',
      content: '',
      userId: ''
    }
  },
  props: ['id'],
  components: {navbar},
  methods: {
    updateTodo () {
      this.$http.put(`http://localhost:3000/api/todo/${this.id}`, {
        title: this.title,
        content: this.content,
        userId: localStorage.getItem('id')
      }, {headers: {token: localStorage.getItem('token')}})
      .then(res => {
        console.log(res)
        this.$router.push('/Home')
      })
    },
    getOneTodo () {
      this.$http.get(`http://localhost:3000/api/todo/${this.id}`)
      .then(res => {
        // console.log(res)
        this.title = res.data.title
        this.content = res.data.content
        this.createdAt = res.data.createdAt
        this.userId = res.data.userId
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getOneTodo()
  }
}
</script>

<style lang="css">
</style>
