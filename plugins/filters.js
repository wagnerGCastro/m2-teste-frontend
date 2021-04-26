import Vue from 'vue'

Vue.filter("currencyPtBr", function (value) {
  if (!value) return ''
  return parseFloat(value).toLocaleString('pt-br', {minimumFractionDigits: 2})
});
