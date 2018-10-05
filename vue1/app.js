new Vue({
  el: '#vue-app',
  data: {
    name: 'Aakash',
    job: 'sleeping',
    website: 'http://www.thenoobydev.me/',
    websiteTag: '<a href="http://www.thenoobydev.me">this is something</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
