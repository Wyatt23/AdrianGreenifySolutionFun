$(document).ready(function(){

  $("h1").on("click", function(){
    $("body").append($("<div>jQuery plugins are cool!</div>"))
    blah()///call the function here to mess with the created divs!
  })

  $("h2").on("click", function(){
    $("div").greenify()
  })

  $("h3").on("click", function(){
    $("body").addGreenDiv()
  })

})
var blah = function(){
$("div").on("click",function(){
  $(this).newPlugin();
})
}
