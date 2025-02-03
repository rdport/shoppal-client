<template>
  <div class="main-page">
    <NavBar @showInfo="showInfo=true"></NavBar>
    <SideBar></SideBar>
    <router-view></router-view>
    <Footer></Footer>
    <Info @closeShowInfo="showInfo=false" v-if="showInfo"></Info>
  </div>
</template>
<script>
import $ from 'jquery'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Info from '../components/Info.vue'
export default {
  name: 'MainPage',
  data () {
    return {
      showInfo: false
    }
  },
  watch: {
    showInfo: function () {
      this.$nextTick()
        .then(() => {
          if (this.showInfo) {
            $('#info-modal').modal('show')
          } else if (!this.showInfo) {
            $('#info-modal').modal('hide')
            $('body').removeClass('modal-open')
            $('.modal-backdrop').remove()
          }
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('SET_IS_AUTHENTICATED', true)
    }
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchProducts')
  },
  components: {
    NavBar,
    SideBar,
    Footer,
    Info
  }
}
</script>
<style>
  .main-page {
    overflow: hidden;
  }
</style>
