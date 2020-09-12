(function(){
  angular
    .module("hoverEffects")
    .controller("demoTwoController", DemoTwoController);

    DemoTwoController.$inject = ["demoFactory"];

    function DemoTwoController(demoFactory){

      this.demoFactory = demoFactory;
      this.showCode = showCode;

      function showCode(){
        demoFactory.makeCodeActive('demoTwoCode');
      }

    }
})();
