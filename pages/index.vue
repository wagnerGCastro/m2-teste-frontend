<template>
  <div class="home pb-4 pt-4">

    <!-- Internet-->
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
            <card v-if="p">
              <input type="radio" name="internet">
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

    <!-- Fixed -->
    <div class="package-tel mb-3">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-3">
            <h2 class="title text-primary">Fixo</h2>
            <p>Agora escolha seu pacote de telefone fixo</p>
          </div>
        </div>

        <div class="row">
          <div v-for="(p, idx) in products.fixed" :key="idx" class="col-sm-4 col-md-4 col-lg-2 mb-3">
            <card class="min">
              <input type="radio" name="fixed">
              <h4 class="card-title font-weight-bold">{{ p.package }}</h4>
              <p class="card-text font-weight-bold">R$ {{ p.price }}</p>
            </card>
          </div>
        </div>
      </div>
    </div>

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
                <tr>
                  <td>1 MEGA</td>
                  <td class="text-right">R$ 79,90</td>
                </tr>
                <tr>
                  <td>VIVO FIXO ILIMITADO BRASIL</td>
                  <td class="text-right">R$ 49,90</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td class="text-primary font-weight-bold">Total</td>
                  <td class="text-primary text-right font-weight-bold">R$ 89,99/mês</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <base-button class="animation-on-hover" type="light">Continuar</base-button>
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
        fixed: [
          {id: 1, package: 'VIVO FIXO ILIMITADO BRASIL', price: '49.99'},
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input[type="radio"] {cursor: pointer}
  h2.title {margin-bottom: 10px;}
  .plan-internet, .package-tel {
    .btn-neutral {padding: 5px 5px 5px;}  
  }  
  .subtotal {
    .table > tbody > tr > td {padding: 7px 7px;}
    .table th, .table td {border-top: 0;}
    .table th, .table tr:first-child {border-top: 0.0625rem solid #e3e3e3;}
  }
</style>
