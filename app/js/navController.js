(function(){
  angular
    .module("hoverEffects")
    .controller("navController", NavController);

    NavController.$inject = ["demoFactory"];

    function NavController(demoFactory){

      this.demoFactory = demoFactory;
      
    }

})();
