<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">Title: {{title}}</h3>
            </div>
            <div class="panel-body">
              Content: {{content}}
            </div>
            <div class="panel-footer">
              Created: {{createdAt}}
              <p align="right">
                <router-link to="/home"><button type="submit" class="btn btn-danger">Back</button></router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import navbar from '@/components/Navbar'
export default {
  data () {
    return {
      title: '',
      content: '',
      createdAt: ''
    }
  },
  props: ['id'],
  components: {navbar},
  methods: {
    getOneTodo () {
      this.$http.get(`http://localhost:3000/api/todo/${this.id}`)
      .then(res => {
        // console.log(res)
        this.title = res.data.title
        this.content = res.data.content
        this.createdAt = moment(res.data.createdAt).format('LLLL')
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
