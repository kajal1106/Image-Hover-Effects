(function(){
  angular
    .module("hoverEffects")
    .controller("mainController", MainController);

    MainController.$inject = ["demoFactory"];

    function MainController(demoFactory){

      this.demoFactory = demoFactory;

    }

})();
