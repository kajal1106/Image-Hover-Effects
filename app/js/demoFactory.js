(function(){
  angular
    .module("hoverEffects")
    .factory("demoFactory", DemoFactory);

    function DemoFactory(){
      var demoObj = {
        activeButton: 'Demo 1',
        defaultDemo: true,

        codeSnippets: {
         demoOneCode: false,
         demoTwoCode: false,
         demoThreeCode: false,
         demoFourCode: false
       },
       makeCodeActive: function(activeCode){
          for(var code in this.codeSnippets){
            if(code === activeCode){
              this.codeSnippets[code] = true;
            }else{
              this.codeSnippets[code] = false;
            }
          }
        },
        hideCode: function(){
          for(var code in this.codeSnippets){
            this.codeSnippets[code] = false;
          }
        },
        removeDefaultDemo: function(){
          this.defaultDemo = false;
        },
        changeText: function(){
          var btnText = angular.element( document.querySelector(".flex__button"));
          var code = angular.element( document.querySelector(".code__container"));
          var codeHeading = angular.element( document.querySelectorAll(".code__heading"));
          var codePre = angular.element( document.querySelectorAll(".pre"));

          var elementsArray = [code, codeHeading, codePre];
  
          if(code.hasClass('ng-hide')){
            btnText.text("Hide code");
            elementsArray.forEach(function(el){
              el.removeClass("hide-element"); 
            });
            
          }else{
            btnText.text("Show code");
            elementsArray.forEach(function(el){
              el.addClass("hide-element");
            });
            
          }
        }
     };
     return demoObj;
  }
})();
