(function(){
  angular
    .module("hoverEffects")
    .controller("demoOneController", DemoOneController);

    DemoOneController.$inject = ["demoFactory"];

    function DemoOneController(demoFactory){

      this.demoFactory = demoFactory;
      this.showCode = showCode;

      function showCode(){
        demoFactory.makeCodeActive('demoOneCode');
      }
    }
})();
