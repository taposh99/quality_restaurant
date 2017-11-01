Vue.filter('currency', function(value) {
  return '$' + value.toFixed(2);
});

var app = new Vue ({
  el: "#main",
  data: {
    services: [
      {
        name: 'One Day Restautant booking',
        price: 500,
        active: true
      },
      {
        name: 'Beer',
        price: 100,
        active: false
      },
      {
        name: 'Night Party',
        price: 200,
        active: false
      },
      {
        name: 'weding',
        price: 300,
        active: false
      }
	 
    ]
  },
  methods: {
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;
      
      this.services.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });
      
      return total;
    }
  }
});