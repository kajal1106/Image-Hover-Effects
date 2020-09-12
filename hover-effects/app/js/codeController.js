(function(){
    angular
      .module("hoverEffects")
      .controller("codeController", codeController);
  
      codeController.$inject = ["demoFactory"];
  
      function codeController(demoFactory){
  
        this.demoFactory = demoFactory;

      }
  })();
  