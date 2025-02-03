<template>
  <div class="">
    <div v-if="error">
      <ErrorMessage :message="message" ref="error"></ErrorMessage>
    </div>
    <div class="container login-page">
      <div class="container shadow login-form-background">
        <img class="shopping1-img" src="../assets/shopping1.svg" width="">
        <img class="star-img" src="../assets/star2.svg" width="">
        <img class="cart-img" src="../assets/cart2.svg" width="">
        <img class="box3-img" src="../assets/box3.svg" width="">
        <div class="container login-form-container">
          <div class="card shadow login-form-card">
            <div class="form-content">
              <div class="login-image-container mb-2">
                <img class="" src="../assets/Shoppal.svg" alt="shoppal" width="200">
              </div>
              <p style="font-weight: bold; margin-bottom: 0;">LOGIN</p>
              <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Email"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="dark" id="login-btn-login" class="mb-0 mt-3">Sign In</b-button>
              <div class="d-flex justify-content-between mb-0 mt-2">
                <b-button type="button" @click="goRegister" variant="info" id="login-btn-reg" class="mr-2">Register</b-button>
                <b-button type="button" @click="goHome" variant="danger" id="login-btn-cancel">Store</b-button>
              </div>
              <!-- <div id="btn-google-container">
                <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
              </div> -->
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Info @closeShowInfo="showInfo=false;$store.commit('SET_IS_INFO_SHOWN', true)" v-if="showInfo && !$store.state.isInfoShown"></Info>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from '../config/axiosinstance'
import ErrorMessage from '../components/ErrorMessage'
import Swal from 'sweetalert2'
import Info from '../components/Info.vue'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: false,
      message: '',
      showInfo: true,
      isInfoShown: false
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios
        .post('/customer/login', this.form)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire(
            'Signed In!',
            'Welcome!',
            'success'
          )
          this.$store.commit('SET_IS_AUTHENTICATED', true)
          this.$store.dispatch('fetchProfile')
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
          this.message = err.response.data.message
          this.error = true
          this.$nextTick(() => {
            this.$refs.error.$el.scrollIntoView()
          })
        })
    },
    onSuccess (googleUser) {
      const googleToken = googleUser.getAuthResponse().id_token
      axios
        .post('/customer/googleLogin', { googleToken })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire(
            'Logged In!',
            'Welcome!',
            'success'
          )
          this.$store.commit('SET_IS_AUTHENTICATED', true)
          this.$store.dispatch('fetchProfile')
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        })
    },
    goRegister () {
      this.$router.push('/register')
    },
    goHome () {
      this.$router.push('/')
    }
  },
  mounted () {
    if (!localStorage.getItem('access_token')) {
      $('#info-modal').modal('show')
    }
  },
  components: {
    ErrorMessage,
    Info
  }
}
</script>
