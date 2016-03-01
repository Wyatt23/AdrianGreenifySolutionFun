(function($){
  $.fn.greenify = function(){
    this.css("color", "green")
    return this;
  }
  $.fn.newPlugin = function(){
    this.css("font-size","48px")
    this.css("color","blue")
    return this;
  }
  $.fn.addGreenDiv = function(){
    this.append($("<div>jQuery plugins are really really cool!</div>").greenify().newPlugin())
    return this;
  }
  $.fn.newPlugin = function(){
    this.css("font-size","48px")
    this.css("color","blue")
    return this;
  }
})(jQuery);
