(function(){
  angular
    .module("hoverEffects")
    .controller("demoFourController", DemoFourController);

    DemoFourController.$inject = ["demoFactory"];

    function DemoFourController(demoFactory){

      this.demoFactory = demoFactory;
      this.showCode = showCode;

      function showCode(){
        demoFactory.makeCodeActive('demoFourCode');
      }

    }
})();
