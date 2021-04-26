<template>
  <div class="product">
    <div class="row">
      <div class="col-12 mb-3">
        <h2 class="title text-primary">{{ title }}</h2>
        <p>{{ subTitle }}</p>
      </div>
    </div>  
    <div class="row">  
      <div v-for="(p, idx) in product" :key="idx" class="col-sm-4 col-md-4 col-lg-2">
        <card v-if="p" :class="`card-product card-${slug}`">
          <span 
            v-if="p.id == stateSelected.products[slug].id"
            class="close"
            @click.prevent="removeProduct(slug, `r${slug}-${p.id}`)"
          >x</span>
          <input 
            :id="`r${slug}-${p.id}`"
            type="radio" 
            :name="slug" 
            @change.prevent="selectProduct(p, slug)"
          >
          <h4 class="card-title font-weight-bold">{{ p.plan || p.package }}</h4>
          <p class="card-text font-weight-bold">R$ {{ p.price | currencyPtBr }}</p>
          <div v-if="detail" class="d-flex justify-content-end">
            <a :href="detail" class="btn btn-neutral text-default font-weight-light">+ DETALHES</a>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'card-product',
  props: {
    title: {
      type: String,
      default: 'Título do produto',
      description: 'title product',
      required: true
    },
    subTitle: {
      type: String,
      default: 'Subtítulo do produto',
      description: 'product description',
      required: true
    },
    slug: {
      type: String,
      default: 'Slug da categoria do produto',
      description: 'product category slug',
      required: true
    },
    detail: {
      type: String,
      description: 'href link product detail'
    },
    product: {
      type: Array,
      default: [],
      description: 'product',
      required: true
    },
  },
  methods: {
    ...mapActions([
      'actionSelectProduct', 
      'actionSelectRemoveProduct', 
      'actionSelectTotalCart',
      'actionSelectedLoading'
    ]),
    selectProduct(p, type) {
      const self = this
      self.actionSelectProduct({ type: type, item: p })
      window.setTimeout(() => self.actionSelectedLoading(false), 700)
    },
    removeProduct(type, selector) {
      const self = this
      document.getElementById(selector).checked = false;

      if(type == 'internet') {
        self.actionSelectRemoveProduct({ type: 'internet' })
        self.actionSelectRemoveProduct({ type: 'tel' })
        self.actionSelectRemoveProduct({ type: 'tv' })
        self.actionSelectTotalCart('0.00')
        self.actionSelectedLoading(true)
      } else {
        self.actionSelectRemoveProduct({ type: type })
      }
    }
  },
  computed: mapState({ stateSelected: 'selected' }),
}
</script>

<style lang="scss" scoped>
.product {
  input[type="radio"] {cursor: pointer}
  h2.title {margin-bottom: 10px;}

  .card-product {
    .btn-neutral {padding: 5px 5px 5px;}  
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
</style>
