<template>
  <div>
    <div div v-if="error && !loading">>
      <ErrorMessage v-for="(message, index) in messages" :key="index" :message="message" ref="error"></ErrorMessage>
    </div>
    <div v-if="loading" class="">
      <div id="loadingMask" class="center-viewport" style="background: #fff;">
        <img class="img-fluid" src="../assets/loading-spinning-orange.gif">
      </div>ß
    </div>
    <div class="container login-page" v-if="!loading">
      <div class="container shadow register-form-background">
        <img class="shopping1-img" src="../assets/shopping1.svg" width="">
        <img class="star-img" src="../assets/star2.svg" width="">
        <img class="cart-img" src="../assets/cart2.svg" width="">
        <img class="box3-img" src="../assets/box3.svg" width="">
        <div class="container register-form-container">
          <div class="card shadow register-form-card">
            <div class="form-content">
              <div class="mb-2">
                <img class="" src="../assets/Shoppal.svg" alt="shoppal" width="200">
              </div>
              <p style="font-weight: bold; margin-bottom: 0;">REGISTER</p>
              <b-form @submit="onSubmit">

              <b-form-group
                id="input-group-1"
                label="First Name"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.first_name"
                  type="text"
                  required
                  placeholder="John"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Last Name"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.last_name"
                  type="text"
                  placeholder="Doe"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Email"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="form.email"
                  type="email"
                  placeholder="johndoe@mail.com"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label="Password" label-for="input-4">
                <b-form-input
                  id="input-4"
                  v-model="form.password"
                  type="password"
                  required
                ></b-form-input>
              </b-form-group>
              <div class="d-flex justify-content-between">
              <b-button type="submit" id="register-btn-reg" variant="success">Register</b-button>
              <b-button type="button" id="register-btn-cancel" :to="{ name: 'Login' }" variant="dark" class="ml-2">Cancel</b-button>
              </div>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosinstance'
import ErrorMessage from '../components/ErrorMessage'
import Swal from 'sweetalert2'
export default {
  name: 'Register',
  data () {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      },
      error: false,
      loading: false,
      messages: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.loading = true
      axios
        .post('/customer/register', this.form)
        .then(({ data }) => {
          Swal.fire(
            'Registered!',
            'Please Sign In!',
            'success'
          )
          this.$router.push('/login')
          this.loading = false
        })
        .catch((err) => {
          this.loading = false
          console.log(err)
          this.messages = err.response.data.messages
          this.error = true
          this.$nextTick(() => {
            // console.log(this.$refs.error)
            this.$refs.error[0].$el.scrollIntoView()
          })
        })
    }
  },
  components: {
    ErrorMessage
  }
}
</script>
