(function(){
  angular
    .module("hoverEffects")
    .controller("demoThreeController", DemoThreeController);

    DemoThreeController.$inject = ["demoFactory"];

    function DemoThreeController(demoFactory){

      this.demoFactory = demoFactory;
      this.showCode = showCode;

      function showCode(){
        demoFactory.makeCodeActive('demoThreeCode');
      }

    }
})();
