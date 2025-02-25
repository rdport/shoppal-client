<template>
  <div>
    <div v-if="$store.state.isLoading" class="">
      <div id="loadingMask" class="center-viewport" style="background: #fff;">
        <img class="img-fluid" src="../assets/loading-spinning-orange.gif" width="300">
      </div>
    </div>
    <div v-if="!$store.state.isLoading">
      <div class="row justify-center">
        <div class="col-sm col-md-4" v-if="inStockCarts.length">
          <div>
            <CartCard v-for="cart in inStockCarts" :key="cart.id" :cart="cart">
            </CartCard>
          </div>
        </div>
        <div class="col-sm col-md-4 ml-3 mr-2" v-if="!inStockCarts.length && !noStockCarts.length">
          <div class="card mt-4">
            <div class="card-body">
              <h5 class="card-title">No items in your cart.</h5>
              <a href="" @click="goHome" class="btn btn-success">Let's shop</a>
            </div>
          </div>
        </div>
        <div class="col-sm col-md-4" v-if="inStockCarts.length">
          <div class="col mt-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">TOTAL</h5>
                <p class="card-text">{{ formatCurrency(total) }}</p>
                <a href="" v-if="inStockCarts.length" @click.prevent="checkout" class="btn btn-success">Check Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 ml-4 mr-4" v-if="noStockCarts.length">
        <h5 class="bg-warning border rounded" v-if="noStockCarts.length === 1">The following product is out of stock.</h5>
        <h5 class="bg-warning border rounded" v-else>The following products are out of stock.</h5>
      </div>
      <div class="layout-center row row-cols-1 row-cols-md-4 g-4 ml-2 mr-2" v-if="noStockCarts.length">
        <CartCard v-for="cart in noStockCarts" :key="cart.id" :cart="cart">
        </CartCard>
      </div>
    </div>
  </div>

</template>

<script>
import Swal from 'sweetalert2'
import CartCard from '../components/CartCard'
import formatCurrency from '../helpers/formatCurrency'
export default {
  name: 'Cart',
  methods: {
    formatCurrency (price) {
      return formatCurrency(price)
    },
    checkout () {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Please review your order before checking out.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Thank you!',
              'Your order is being processed.',
              'success'
            )
            return this.$store.dispatch('checkout')
          }
        })
        .then(() => {
          this.$store.dispatch('fetchProducts')
          this.$store.dispatch('fetchCarts')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goHome () {
      this.$router.push('/')
    }
  },
  computed: {
    inStockCarts () {
      return this.$store.state.inStockCarts
    },
    noStockCarts () {
      return this.$store.state.noStockCarts
    },
    total () {
      return this.$store.state.total
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCarts')
    if (localStorage.access_token) {
      this.$store.commit('SET_IS_AUTHENTICATED', true)
    }
  },
  components: {
    CartCard
  }
}
</script>

<style>
  .justify-center {
   padding: 1rem 1rem;
   padding-bottom: rem;
   display: flex;
   justify-content: center;
   height: 82vh;
   overflow-y: auto;
  }
</style>
