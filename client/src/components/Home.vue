<template lang="html">
  <div>
    <navbar></navbar>
    <div class="container" style="margi-top:60px">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">
              <router-link to="/createTodo" class="btn btn-primary">Create Todo</router-link>
            </div> 
            <div class="panel-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="todo in data">
                    <td>{{todo.title}}</td>
                    <td>{{todo.content}}</td>
                    <td>
                      <router-link :to="'/Home/updateTodo/' + todo._id" class="btn btn-info"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></router-link>
                      <button type="submit" class="btn btn-danger"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import createTodo from '@/components/CreateTodo'
// import updateTodo from '@/components/UpdateTodo'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {navbar, createTodo},
  methods: {
    getAllTodos () {
      // console.log(localStorage.getItem('token'))
      this.$http.get('http://localhost:3000/api/todo', {headers: {token: localStorage.getItem('token')}})
      .then(res => {
        console.log(res)
        this.data = res.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    cekLogin () {
      if (localStorage.token) {
        this.isLogin = true
      } else {
        this.isLogin = false
        this.$router.push('/')
      }
    }
  },
  created () {
    this.getAllTodos()
    this.cekLogin()
  }
}
</script>

<style lang="css">
</style>
