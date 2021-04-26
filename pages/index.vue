<template>
  <div class="home">
    <div v-if="loadingData">
      <loading style="min-height: 100vh"></loading>
    </div>

    <div v-if="!loadingData" class="pb-4 pt-4">
      <!-- Internet -->
      <div class="container">
        <card-product
          title="Internet"
          subTitle="Selecione um plano de internet para continuar"  
          slug="internet"
          detail="link-detalhes"
          :product="products.internet"
        ></card-product>
      </div>

      <div v-if="getSelected.products.internet && Object.values(getSelected.products.internet).length >= 1">
        <div v-show="getSelectedLoading" class="container mb-4">
          <loading></loading>
        </div>

        <zoom-center-transition :duration="600" :delay="500">
          <div v-show="!getSelectedLoading">
            <div class="container">
              <!-- Tel -->
              <card-product
                title="Fixo"
                subTitle="Agora escolha seu pacote de telefone fixo"  
                slug="tel"
                :product="products.tel"
              ></card-product>

              <!-- TV -->
              <card-product
                title="TV"
                subTitle="Agora escolha seu plano de TV"  
                slug="tv"
                :product="products.tv"
              ></card-product>
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
                v-if="getSelected.products.internet && Object.values(getSelected.products.internet).length >= 1"
                class="d-flex justify-content-between">

                <span>{{ getSelected.products.internet.plan }}</span>
                <span>R$ {{ getSelected.products.internet.price | currencyPtBr }}</span>
              </div>

              <div 
                v-if="getSelected.products.tel && Object.values(getSelected.products.tel).length >= 1"
                class="d-flex justify-content-between">

                <span>{{ getSelected.products.tel.package }}</span>
                <span>R$ {{ getSelected.products.tel.price | currencyPtBr }}</span>
              </div>
              
              <div 
                v-if="getSelected.products.tv && Object.values(getSelected.products.tv).length >= 1"
                class="d-flex justify-content-between">

                <span>{{ getSelected.products.tv.plan }}</span>
                <span>R$ {{ getSelected.products.tv.price | currencyPtBr }}</span>
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
              {{ JSON.stringify(getSelected, false, 2) }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '@/services/api'
import { mapGetters, mapActions } from "vuex";
import { ZoomCenterTransition } from 'vue2-transitions';
import { CardProduct } from '~/components';

export default {
  name: 'index',
  components: {
    ZoomCenterTransition,
    CardProduct
  },
  data () {
    return {
      loadingData: true,
      debug: false,
      modals: { 
        modal0: false 
      }
    }
  },
  mounted() {
    this.getDataFromApi()
  },
  methods: {
    ...mapActions(['actionSelectTotalCart']),
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
    ...mapGetters(['getSelected', 'getSelectedLoading']),
    subtotal() {
      const self = this
      let pInternet = self.getSelected.products.internet
      let pTel = self.getSelected.products.tel
      let pTV = self.getSelected.products.tv
      let total = parseFloat(self.getSelected.totalCart).toFixed(2)

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

      self.actionSelectTotalCart(total)
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    
    .subtotal {
      .line-horizontal {margin-bottom: 8px; margin-top: 8px}
    }
  }
</style>
