var footerItem1Active=false,footerItem2Active=false,footerItem3Active=false,footerItem4Active=false,footerItem5Active=false;
var enabledClickEvent=false;
if(window.innerWidth<1101){
  enabledClickEvent=true;
}

var makalelerKonteyneri = document.getElementById('articles-container-slider');
var basiliTutma = false;
var basiliTutmaBaslangicX = 0;

makalelerKonteyneri.addEventListener('mousedown', function(event) {
  basiliTutma = true;
  basiliTutmaBaslangicX = event.clientX;
});

document.addEventListener('mouseup', function() {
  basiliTutma = false;
});

document.addEventListener('mousemove', function(event) {
  if (basiliTutma) {
    var hareket = event.clientX - basiliTutmaBaslangicX;
    makalelerKonteyneri.scrollLeft -= hareket;
    basiliTutmaBaslangicX = event.clientX;
  }
});


window.addEventListener('resize', function(event){
  var ScreenWidth = window.innerWidth;

    if(ScreenWidth < 1101){
      enabledClickEvent=true;
      footerItem1Active=false;
      footerItem2Active=false;
      footerItem3Active=false;
      footerItem4Active=false;
      footerItem5Active=false;
    document.getElementById("footer-item-desc-1").style.display="none";
    document.getElementById("footer-item-desc-2").style.display="none";
    document.getElementById("footer-item-desc-3").style.display="none";
    document.getElementById("footer-item-desc-4").style.display="none";
    document.getElementById("footer-item-desc-5").style.display="none";
  }
  else{
    document.getElementById("footer-item-desc-1").style.display="block";
    document.getElementById("footer-item-desc-2").style.display="block";
    document.getElementById("footer-item-desc-3").style.display="block";
    document.getElementById("footer-item-desc-4").style.display="block";
    document.getElementById("footer-item-desc-5").style.display="block";
    enabledClickEvent=false;
  }
  });

document.getElementById("menu-state-icon").addEventListener("click", function(){
    
    document.getElementById("popup-menu").style.display = "flex";
    document.getElementById("header-id").style.zIndex=0;
    document.getElementById("header-id").style.position="static";
    document.body.style.overflow="hidden"
});

document.getElementById("close-btn").addEventListener("click", function(){

    document.getElementById("popup-menu").style.display = "none";
    document.getElementById("header-id").style.zIndex=5;
    document.getElementById("header-id").style.position="fixed";
    document.body.style.overflow="scroll"
});

document.getElementById("navigator-1").addEventListener("click", function(){

  document.getElementById("popup-menu").style.display = "none";
  document.getElementById("header-id").style.zIndex=5;
  document.getElementById("header-id").style.position="fixed";
  document.body.style.overflow="scroll"
});

document.getElementById("navigator-2").addEventListener("click", function(){

  document.getElementById("popup-menu").style.display = "none";
  document.getElementById("header-id").style.zIndex=5;
  document.getElementById("header-id").style.position="fixed";
  document.body.style.overflow="scroll"
});

document.getElementById("navigator-3").addEventListener("click", function(){

  document.getElementById("popup-menu").style.display = "none";
  document.getElementById("header-id").style.zIndex=5;
  document.getElementById("header-id").style.position="fixed";
  document.body.style.overflow="scroll"
});

document.getElementById("navigator-4").addEventListener("click", function(){

  document.getElementById("popup-menu").style.display = "none";
  document.getElementById("header-id").style.zIndex=5;
  document.getElementById("header-id").style.position="fixed";
  document.body.style.overflow="scroll"
});


document.getElementById("footer-item-1").addEventListener("click", function(){
  if(enabledClickEvent===true){
  if(footerItem1Active===false){
    document.getElementById("footer-item-desc-1").style.display="block";
    footerItem1Active=true;
  }
  else{
    document.getElementById("footer-item-desc-1").style.display="none";
    footerItem1Active=false;
}
}
 });
 document.getElementById("footer-item-2").addEventListener("click", function(){
  if(enabledClickEvent===true){
  if(footerItem2Active===false){
    document.getElementById("footer-item-desc-2").style.display="block";
    footerItem2Active=true;
  }
  else{
    document.getElementById("footer-item-desc-2").style.display="none";
    footerItem2Active=false;
  }
}
 });
 document.getElementById("footer-item-3").addEventListener("click", function(){
  if(enabledClickEvent===true){
  if(footerItem3Active===false){
    document.getElementById("footer-item-desc-3").style.display="block";
    footerItem3Active=true;
  }
  else{
    document.getElementById("footer-item-desc-3").style.display="none";
    footerItem3Active=false;
  
}
  }
 });
 document.getElementById("footer-item-4").addEventListener("click", function(){
  if(enabledClickEvent===true){
  if(footerItem4Active===false){
    document.getElementById("footer-item-desc-4").style.display="block";
    footerItem4Active=true;
  }
  else{
    document.getElementById("footer-item-desc-4").style.display="none";
    footerItem4Active=false;
  }
  }
 });
 document.getElementById("footer-item-5").addEventListener("click", function(){
  if(enabledClickEvent===true){
  if(footerItem5Active===false){
    document.getElementById("footer-item-desc-5").style.display="block";
    footerItem5Active=true;
  }
  else{
    document.getElementById("footer-item-desc-5").style.display="none";
    footerItem5Active=false;
  }
  }
 });



 



