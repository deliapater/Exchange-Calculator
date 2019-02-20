import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      selectedCurrencyIndex: "",
      selectedCurrency: null,
      selectedCurrencyRates: {}

    },
    mounted: function(){
      this.getRates()
    },

    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencies = data.rates)
      },

      }
  })
})
