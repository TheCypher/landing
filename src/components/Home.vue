<template>
<div class="login-page sidebar-collapse">
    <!-- Navbar -->
      <nav class="navbar navbar-expand-lg bg-vue-green fixed-top  " color-on-scroll="400">
            <div class="container">
                <div class="dropdown button-dropdown">
                    <a href="#pablo" class="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                        <span class="button-bar"></span>
                        <span class="button-bar"></span>
                        <span class="button-bar"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-header">Dropdown header</a>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">One more separated link</a>
                    </div>
                </div>
                <div class="navbar-translate">
                    <a class="navbar-brand" href="/" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom">
                        <img src="../assets/img/kweli_text_logo_white.png" alt="" width="89.42" height="19">
                    </a>
                    <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar bar1"></span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="../assets/img/blurred-image-1.jpg">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/login">
                            About us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <!-- End Navbar -->
    <div class="wrapper">
        <div class="page-header page-header-small">
            <div class="page-header-image" data-parallax="true" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
            </div>
            <div class="container">
                <div class="col-md-4 content-center">
                    <div class="card card-login card-plain">
                            <div class="header header-primary text-center">
                                <div class="logo-container">
                                    <img src="../assets/img/kweli_text_logo_white.png" alt="">
                                </div>
                            </div>
                            <h3 class="title">Coming soon!</h3>
                            <div class="content">
                                <div class="input-group form-group-no-border input-lg">
                                    <input 
                                    type="text" 
                                    placeholder="Email..." 
                                    class="form-control" 
                                    v-model="email" />
                                </div>
                                <div class="input-group form-group-no-border input-lg">
                                    <input 
                                    type="number" 
                                    placeholder="ZIP Code..." 
                                    class="form-control" 
                                    v-model="zipCode" />
                                </div>
                            </div>
                            <div v-if="add_return">
                                <h4 class="title">{{ add_return }}</h4>
                            </div>
                            <div v-if="error">
                                <h4 class="title">{{ error }}</h4>
                            </div>
                            <div class="footer text-center">
                                <button 
                                class="btn btn-primary btn-round btn-lg btn-block" 
                                @click="addCustomer">
                                  Notify Me
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section section-about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Who we are & what we do.</h2>
                        <h5 class="description">
                            When it comes to maintaining a healthy life, adding fruit and veggies to our diet is key. Kwelli is able to deliver fresh organic produce right to your door while tracking essential nutrients in each purchase for your personal assessment.
                        </h5>
                    </div>
                </div>
                <div class="separator separator-primary"></div>
            </div>
        </div>
        <div class="section section-team text-center">
            <div class="container">
                <h2 class="title">Here's how it works.</h2>
                <div class="team">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="team-player">
                                <img src="../assets/img/shopping.png" alt="Thumbnail Image" class="roundeda-circle img-fluid img-raised">
                                <h4 class="title text-primary">You shop</h4>
                                <p class="description">
                                    Shop for your produce.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-player">
                                <img src="../assets/img/farmer.png" alt="Thumbnail Image" class="roundeda-circle img-fluid img-raised">
                                <h4 class="title text-primary">We pick</h4>
                                <p class="description">
                                    Then we go pick them.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="team-player">
                                <img src="../assets/img/delivery.png" alt="Thumbnail Image" class="roundeda-circle img-fluid img-raised">
                                <h4 class="title text-primary">We deliver</h4>
                                <p class="description">
                                    Then we deliver. 100% free delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer footer-default">
            <div class="container">
                <div class="copyright">
                    &copy;
                    Kweli
                </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
import CustomerServices from '@/services/CustomerServices'
export default {
  name: 'Home',
  data () {
    return {
      image: 'http://www.responsiblebusiness.com/wp-content/uploads/2017/08/MOA86d.jpg',
      email: '',
      zipCode: '',
      add_return: null,
      error: null
    }
  },
  methods: {
    async addCustomer() {
        this.add_return = null
        this.error = null

        const customer_data = {
            email: this.email,
            zipCode: this.zipCode
        }

        for (var data in customer_data) {
            if (customer_data[data] == '') {
                this.error = 'all fields must be filled'
                return
            }
        }

        const addCustomer = await CustomerServices.addCustomer({
            email: this.email,
            zipCode: this.zipCode
        })

        if (addCustomer.data[1]['code'] == 200) {
            this.add_return = addCustomer.data[1]['message']
        } else {
            this.error = addCustomer.data[1]['message']
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
