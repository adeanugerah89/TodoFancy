<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form>
            <div class="form-group">
            <input v-model="title" type="text" class="form-control" placeholder="title">
            </div>
            <textarea v-model="content" rows="8" cols="80" placeholder="description"></textarea>
            <br>
            <button @click='createTodo()' type="submit" class="btn btn-primary">Submit</button>
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
      content: ''
    }
  },
  components: {navbar},
  methods: {
    createTodo () {
      this.$http.post(`http://localhost:3000/api/todo`, {
        title: this.title,
        content: this.content,
        userId: localStorage.getItem('id')
      })
      .then(res => {
        console.log(res)
        this.$router.push('/Home')
      })
    }
  }
}
</script>

<style lang="css">
</style>
