<template>
  <div class="home pb-4 pt-4">
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
                @click.prevent="removeInternet(p)"
              >x</span>
              <input 
                :id="`rinternet-${p.id}`"
                type="radio" 
                name="internet" 
                @change="selectInternet($event, p)"
              >
              <h4 class="card-title font-weight-bold">{{ p.plan }}</h4>
              <p class="card-text font-weight-bold">R$ {{ p.price }}</p>
              <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-neutral text-default font-weight-light">+ DETALHES</a>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>

    <!-- Tel -->
    <div class="package-tel mb-3">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-3">
            <h2 class="title text-primary">Fixo</h2>
            <p>Agora escolha seu pacote de telefone fixo</p>
          </div>
        </div>

        <div class="row">
          <div v-for="(p, idx) in products.tel" :key="idx" class="col-sm-4 col-md-4 col-lg-2 mb-3">
            <card class="card-package-tel">
              <span 
                v-if="p.id == selected.products.tel.id" 
                class="close"
                @click.prevent="removeTel(p)"
              >x</span>
              <input 
                :id="`rtel-${p.id}`"
                type="radio" 
                name="tel"
                @change="selectTel($event, p)"
              >
              <h4 class="card-title font-weight-bold">{{ p.package }}</h4>
              <p class="card-text font-weight-bold">R$ {{ p.price }}</p>
            </card>
          </div>
        </div>
      </div>
    </div>

    <!-- Subtotal -->
    <div class="subtotal">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table">
              <tbody>
                <tr>
                  <td class="">Taxa de instalação</td>
                  <td class="text-right">Grátis</td>
                </tr>
                <tr v-if="selected.products.internet && Object.values(selected.products.internet).length >= 1">
                  <td>{{ selected.products.internet.plan }}</td>
                  <td class="text-right">R$ {{ selected.products.internet.price }}</td>
                </tr>
                <tr v-if="selected.products.tel && Object.values(selected.products.tel).length >= 1">
                  <td>{{ selected.products.tel.package }}</td>
                  <td class="text-right">R$ {{ selected.products.tel.price }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="text-primary font-weight-bold">Total</td>
                  <td class="text-primary text-right font-weight-bold">R$ {{ subtotal }}/mês</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- continue -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <base-button class="animation-on-hover" type="light">Continuar</base-button>
        </div>
      </div>
    </div>

    <!-- debug -->
    <div class="container">
      <div class="row mt-3">
        <div class="col-12">
          <pre class="bg-dark text-white p-1">
            {{ JSON.stringify(selected, false, 2) }}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      products: {
        internet: [
          {id: 3, plan: '4 MEGA', price: '79.90'},
          {id: 1, plan: '1 MEGA', price: '34.90'},
          {id: 2, plan: '2 MEGA', price: '49.90'},
          {id: 4, plan: '8 MEGA', price: '89.90'}
        ],
        tel: [
          {id: 1, package: 'VIVO FIXO ILIMITADO BRASIL', price: '49.99'},
        ]
      },
      selected: {
        products: {
          internet: {},
          tel: {},
        },
        totalCart: '0.00'
      },
    }
  },
  methods: {
    selectInternet(event, p) {
      this.selected.products.internet = p
    },
    selectTel(event, p) {
      this.selected.products.tel = p
    },
    removeInternet(p) {
      const self = this
      let subTotal =  (parseFloat(self.selected.totalCart) - parseFloat(p.price))
      self.selected.totalCart =  subTotal
      self.selected.products.internet = {}
      document.getElementById(`rinternet-${p.id}`).checked = false;
    },
    removeTel(p) {
      const self = this
      let subTotal = (parseFloat(self.selected.totalCart) - parseFloat(p.price))
      console.log(subTotal)
      self.selected.totalCart =  subTotal
      self.selected.products.tel = {}
      document.getElementById(`rtel-${p.id}`).checked = false;
    }
  },
  computed: {
    subtotal() {
      const self = this
      let pInternet = self.selected.products.internet
      let pTel = self.selected.products.tel
      let total = parseFloat(self.selected.totalCart)

      if (pTel.hasOwnProperty('price') && pInternet.hasOwnProperty('price')) {
        total = parseFloat(pTel.price) + parseFloat(pInternet.price)

      } else {
        if (pInternet.hasOwnProperty('price')) {
          total = parseFloat(pInternet.price)
        }

        if (pTel.hasOwnProperty('price')) {
          total = parseFloat(pTel.price)
        }
      }

      self.selected.totalCart = total.toFixed(2)
      return total.toLocaleString('pt-br', {minimumFractionDigits: 2})
    }
  }
}
</script>

<style lang="scss" scoped>
  input[type="radio"] {cursor: pointer}
  h2.title {margin-bottom: 10px;}
  .plan-internet, .package-tel {
    .btn-neutral {padding: 5px 5px 5px;}  
    .card-internet, .card-package-tel {
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
    .table > tbody > tr > td {padding: 2px 7px;}
    .table th, .table td {border-top: 0;}
    .table th, .table tr:first-child {border-top: 0.0625rem solid #e3e3e3;}
    .table th, .table tr:first-child td { padding-top: 15px;}
    .table th, .table tr:last-child td { padding-bottom: 15px;}
  }
</style>
