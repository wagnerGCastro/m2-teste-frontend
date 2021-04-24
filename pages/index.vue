<template>
  <div class="home">
    <div v-if="loadingData">
      <loading style="min-height: 100vh"></loading>
    </div>

    <div v-if="!loadingData" class="pb-4 pt-4">
      <!-- Internet -->
      <div class="plan-internet">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-3">
              <h2 class="title text-primary">Internet</h2>
              <p>Selecione um plano de internet para continuar</p>
            </div>
          </div>
          <div class="row">
            <div v-for="(p, idx) in products.internet" :key="idx" class="col-sm-4 col-md-4 col-lg-2">
              <card v-if="p" class="card-internet">
                <span 
                  v-if="p.id == selected.products.internet.id"
                  class="close"
                  @click.prevent="removeProduct(p, 'internet', `rinternet-${p.id}`)"
                >x</span>
                <input 
                  :id="`rinternet-${p.id}`"
                  type="radio" 
                  name="internet" 
                  @change.prevent="selectProduct(p, 'internet')"
                >
                <h4 class="card-title font-weight-bold">{{ p.plan }}</h4>
                <p class="card-text font-weight-bold">R$ {{ p.price | currencyPtBr }}</p>
                <div class="d-flex justify-content-end">
                  <a href="#" class="btn btn-neutral text-default font-weight-light">+ DETALHES</a>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selected.products.internet && Object.values(selected.products.internet).length >= 1">
        <div v-show="selectedLoading" class="container mb-4">
          <loading></loading>
        </div>

        <zoom-center-transition :duration="600" :delay="500">
          <div v-show="!selectedLoading">
            <!-- Tel -->
            <div class="package-tel">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-3">
                    <h2 class="title text-primary">Fixo</h2>
                    <p>Agora escolha seu pacote de telefone fixo</p>
                  </div>
                </div>
                <div class="row">
                  <div v-for="(p, idx) in products.tel" :key="idx" class="col-sm-4 col-md-4 col-lg-2">
                    <card class="card-package-tel">
                      <span 
                        v-if="p.id == selected.products.tel.id" 
                        class="close"
                        @click.prevent="removeProduct(p, 'tel', `rtel-${p.id}`)"
                      >x</span>
                      <input 
                        :id="`rtel-${p.id}`"
                        type="radio" 
                        name="tel"
                        @change.prevent="selectProduct(p, 'tel')"
                      >
                      <h4 class="card-title font-weight-bold">{{ p.package }}</h4>
                      <p class="card-text font-weight-bold">R$ {{ p.price | currencyPtBr }}</p>
                    </card>
                  </div>
                </div>
              </div>
            </div>

            <!-- TV -->
            <div class="plan-tv">
              <div class="container">
                <div class="row">
                  <div class="col-12 mb-3">
                    <h2 class="title text-primary">TV</h2>
                    <p>Agora escolha seu plano de TV</p>
                  </div>
                </div>
                <div class="row">
                  <div v-for="(p, idx) in products.tv" :key="idx" class="col-sm-4 col-md-4 col-lg-2 mb-3">
                    <card class="card-plan-tv">
                      <span 
                        v-if="p.id == selected.products.tv.id" 
                        class="close"
                        @click.prevent="removeProduct(p, 'tv', `rtv-${p.id}`)"
                      >x</span> 
                      <input 
                        :id="`rtv-${p.id}`"
                        type="radio" 
                        name="tv"
                        @change.prevent="selectProduct(p, 'tv')"
                      >
                      <h4 class="card-title font-weight-bold">{{ p.plan }}</h4>
                      <p class="card-text font-weight-bold">R$ {{ p.price | currencyPtBr }}</p>
                    </card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </zoom-center-transition>
      </div>
      
      <!-- Subtotal -->
      <div class="subtotal mb-4">
        <div class="container">
          <div class="row">
            <div class="col-12">

              <hr class="line-horizontal"/>

              <div class="d-flex justify-content-between">
                <span>Taxa de instalação</span>
                <span>Grátis</span>
              </div>

              <div 
                v-if="selected.products.internet && Object.values(selected.products.internet).length >= 1"
                class="d-flex justify-content-between">

                <span>{{ selected.products.internet.plan }}</span>
                <span>R$ {{ selected.products.internet.price | currencyPtBr }}</span>
              </div>

              <div 
                v-if="selected.products.tel && Object.values(selected.products.tel).length >= 1"
                class="d-flex justify-content-between">

                <span>{{ selected.products.tel.package }}</span>
                <span>R$ {{ selected.products.tel.price | currencyPtBr }}</span>
              </div>

              <div 
                v-if="selected.products.tv && Object.values(selected.products.tv).length >= 1"
                class="d-flex justify-content-between">

                <span>{{ selected.products.tv.plan }}</span>
                <span>R$ {{ selected.products.tv.price | currencyPtBr }}</span>
              </div>

              <hr class="line-horizontal"/>

              <div class="d-flex justify-content-between">
                <span class="text-primary font-weight-bold">Total</span>
                <span class="text-primary font-weight-bold">R$ {{ subtotal | currencyPtBr }}/mês</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- continue -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <base-button 
              class="animation-on-hover" 
              type="light"
              @click="modals.modal0 = true"
            >Continuar</base-button>
          </div>
        </div>
      </div>

      <!-- modal -->
      <modal :show.sync="modals.modal0">
        <template slot="header">
          <h3 class="modal-title" id="exampleModalLabel">Uauuu! falta pouco!</h3>
        </template>
        <div>
         Escolha um dos produtos se você ainda não escolheu.
        </div>
      </modal>

      <!-- debug -->
      <div v-if="debug" class="container">
        <div class="row mt-3">
          <div class="col-12">
            <pre class="bg-dark text-white p-1">
              {{ JSON.stringify(selected, false, 2) }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/services/api'
import { ZoomCenterTransition } from 'vue2-transitions';

export default {
  name: 'index',
  components: {
    ZoomCenterTransition
  },
  data () {
    return {
      products: {},
      selected: {
        products: {
          internet: {},
          tel: {},
          tv: {}
        },
        totalCart: '0.00'
      },
      loadingData: true,
      selectedLoading: true,
      debug: false,
      modals: { 
        modal0: false 
      }
    }
  },
  filters: {
    currencyPtBr(value) {
      if (!value) return ''
      return parseFloat(value).toLocaleString('pt-br', {minimumFractionDigits: 2})
    }
  },
  mounted() {
    this.getDataFromApi()
  },
  methods: {
    selectProduct(p, type) {
      const self = this
      window.setTimeout(() => self.selectedLoading = false, 700)

      switch (type) {
        case 'internet':
          self.selected.products.internet = p
          break;
        case 'tel':
          self.selected.products.tel = p
          break;
        case 'tv':
          self.selected.products.tv = p
          break;
      }
    },
    removeProduct(p, type, selector) {
      const self = this
      let subTotal =  (parseFloat(self.selected.totalCart) - parseFloat(p.price))
      self.selected.totalCart = subTotal
      document.getElementById(selector).checked = false;

      switch (type) {
        case 'internet':
          self.selected.products.internet = {}
          self.selected.products.tel = {}
          self.selected.products.tv = {}
          self.selected.totalCart = '0.00'
          self.selectedLoading = true
          break;
        case 'tel':
          self.selected.products.tel = {}
          break;
        case 'tv':
          self.selected.products.tv = {}
          break;
      }
    },
    notifyVue({msg, icon, horAlign, vertAlign, color}) {
      this.$notify({
        message: msg ? msg : 'Opss!, algo deu errado, tente novamente mais tarde!',
        timeout: 5000,
        icon: (icon ? icon : 'tim-icons icon-bell-55'),
        horizontalAlign: (horAlign ? horAlign : 'center'),
        verticalAlign: (vertAlign ? vertAlign : 'bottom'),
        type: color ? color : 'primary'
      });
    },
    async getDataFromApi() {
      const self = this
        
      try {

        let { data } = await service.products.getProductsAll()
        self.products = data
        self.loadingData = false

      } catch (err) {
        
        /** Errors Default */
        if (err.response) {
          if(err.response.status == 500) {
            // Error Server
            self.notifyVue({msg: 'Opss! algo deu errado, tente novamente mais tarde.', color:'danger'})

          } else {
            // Error global
            self.notifyVue({msg: 'Erro desconhecido!', color:'danger'})
          }
        }

        /** Network Error Desconection */
        if (err.name == 'Error') {
          if (err.message == 'Network Error') {
            self.notifyVue({msg: 'Erro: Sem conexão com o servidor!', color:'danger'})
          }

          if (err.message == 'Request failed with status code 500') {
            self.notifyVue({msg: 'Houve um erro inesperado com o servidor.', color:'danger'})
          }
        }

      }
    } 
  },
  computed: {
    subtotal() {
      const self = this
      let pInternet = self.selected.products.internet
      let pTel = self.selected.products.tel
      let pTV = self.selected.products.tv
      let total = parseFloat(self.selected.totalCart).toFixed(2)

      if (pInternet.hasOwnProperty('price') && pTel.hasOwnProperty('price') && pTV.hasOwnProperty('price')) {
        total = parseFloat(pInternet.price) + parseFloat(pTel.price) + parseFloat(pTV.price)

      } else if (pInternet.hasOwnProperty('price') && pTel.hasOwnProperty('price')) {
        total = parseFloat(pInternet.price) + parseFloat(pTel.price) 

      } else if (pInternet.hasOwnProperty('price') && pTV.hasOwnProperty('price')) {
        total = parseFloat(pInternet.price) + parseFloat(pTV.price)

      } else {
        if (pInternet.hasOwnProperty('price')) {
          total = parseFloat(pInternet.price)
        }
      }

      self.selected.totalCart = total
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    input[type="radio"] {cursor: pointer}
    h2.title {margin-bottom: 10px;}
    .plan-internet, .package-tel, .plan-tv {
      .btn-neutral {padding: 5px 5px 5px;}  
      .card-internet, .card-package-tel, .card-plan-tv {
        .close {
          cursor: pointer;
          background: #b3b3b3;
          color: #fff;
          padding: 7px;
          line-height: 10px;
          font-size: 15px;
          border-radius: 50%;
          position: absolute;
          right: -8px;
          top: -8px;
          border: 1px solid #ccc;
          opacity: 0.5;

          &:hover { opacity: 1;}
        }
      }
    }  
    .subtotal {
      .line-horizontal {margin-bottom: 8px; margin-top: 8px}
    }
  }
</style>
