<template>
  <div>
    <div class="modal fade" id="info-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
       <div class="modal-dialog" role="document">
          <div class="info-modal-content modal-content">
            <div class="info-modal-header modal-header">
              <h5 class="modal-title" style="font-weight:bold" id="exampleModalLongTitle">Welcome to Shoppal!</h5>
              <button type="button" @click="$emit('closeShowInfo', 'setIsInfoShown')" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="info-modal-text-container">
                <h1 class="text-center mb-3">Tech Stack</h1>
                <div class="card-deck row" id="tech-stack-deck">
                  <!-- <Techstack
                  v-for="tech in techs"
                  :key="tech"
                  :tech="tech"
                  :src="require(`../assets/ + ${tech}`)"
                  :alt="tech"
                  >
                  </Techstack> -->

                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/HTML5.svg" alt="HTML5">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">HTML5</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/CSS3.svg" alt="CSS3">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">CSS3</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/BootstrapVue.png" alt="BootstrapVue">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">BootstrapVue</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/Vue.js.svg" alt="Vue.js">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">Vue.js</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/Express.svg" alt="Express">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">Express</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/Sequelize.svg" alt="Sequelize">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">Sequelize</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/Node.js.svg" alt="Node.js">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">Node.js</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/PostgresSQL.svg" alt="PostgresSQL">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">PostgresSQL</h5>
                         </div>
                      </div>
                  </div>
                  <div class="col-4">
                       <div class="info-card card">
                           <img class="card-img-top" src="../assets/JavaScript.svg" alt="JavaScript">
                           <div class="info-card-body card-body">
                             <h5 class="info-card-title card-title text-center">JavaScript</h5>
                         </div>
                      </div>
                  </div>
                </div>
                <div class="info-description description">
                  <p>
                    A web application for online shopping which is managed by administrators on CMS website,
                    <a href="https://shoppal-cms-client-rdport.onrender.com">Shoppal CMS</a>.
                  </p>
                  <h2>Features</h2>
                    <ul>
                        <li>Sign in and register with email</li>
                        <li>Choose categories on the side bar</li>
                        <li>Filter products by name and category</li>
                        <li>Add products to cart and wishlist</li>
                        <li>Remove products from cart and wishlist</li>
                        <li>Add products to cart from wishlist</li>
                        <li>Add products to wishlist from cart</li>
                        <li>Completing the purchase will update product stock</li>
                        <li>Show and delete completed purchases in transaction history</li>
                        <li>Responsive design enables this website to adapt to the size of the screen</li>
                    </ul>
                    <h2>P.S.</h2>
                    <ul>
                      <li>Payment services have not been added.</li>
                      <li>Database transaction feature has not been utilized.</li>
                      <li>Please check out the "Welder" project which has implemented database transactions.</li>
                      <li><a href="https://github.com/rdport/welder-client">welder-client on github</a>, <a href="https://github.com/rdport/welder-server">welder-server on github</a>, <a href="https://welder-client.onrender.com">Welder website</a></li>
                      <li>Simple authentication is used for the purpose of prototyping, where the access token and full name are stored in the local storage.</li>
                      <li>Please check out the "Fancytodo" project which has implemented more advanced authentication with secure access token, csrf token and refresh token.</li>
                      <li><a href="https://github.com/rdport/fancytodo-client">fancytodo-client on github</a>, <a href="https://github.com/rdport/fancytodo-server">fancytodo-server on github</a>, <a href="https://fancytodo-client.onrender.com">Fancytodo website</a></li>
                      <li>The frontend, backend and database of this project are using free tier hosting services so this website might not be always accessible.</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="$emit('closeShowInfo')" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Info',
  data () {
    return {
      techs: ['HTML5', 'CSS3', 'BootstrapVue', 'Vue.js', 'Express', 'Sequelize', 'Node.js', 'PostgresSQL', 'JavaScript']
    }
  }
}
</script>
<style>
</style>
