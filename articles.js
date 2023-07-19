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

document.addEventListener("click", (e) => {
    var ScreenWidth = window.innerWidth;
    if(ScreenWidth<1101){
    if(enableclosemenu==true){
        let ourelem=document.getElementById("filter-menu");
        let filterbtn=document.getElementById("filter-btn");
        let clickedElem = e.target;
        do {
        if (clickedElem == ourelem) {
        return;
        }
        else if(filterbtn==clickedElem){
          
            return;
        }

       clickedElem=clickedElem.parentNode;
        } while (clickedElem);
        document.getElementById("filter-btn").style.display = "flex";
        document.getElementById("filter-menu").style.display = "none";
    
        enableclosemenu=false;
    }
}
    });

var enableclosemenu;
document.getElementById("filter-btn").addEventListener("click", function(){
    document.getElementById("filter-btn").style.display = "none";
    document.getElementById("filter-menu").style.display = "block";
    document.getElementById("filter-menu").style.backgroundColor = "#F5F5F7";
    enableclosemenu=true;
});


window.addEventListener('resize', function(event){ 
    var ScreenWidth = window.innerWidth;
    if(ScreenWidth>1100){
        document.getElementById("filter-menu").style.display = "block";
        document.getElementById("filter-btn").style.display = "none";
    }
    else{
        document.getElementById("filter-menu").style.display = "none";
        document.getElementById("filter-btn").style.display = "flex";
    }

});


function copyToClipboard(clicked_id)
{
      var url="https://www.iklimbilinci.com.tr/articles.php?articleID="+clicked_id;
      navigator.clipboard.writeText(url).then(function() {     
      }).catch(function(err) {
        console.error('Metin kopyalanırken bir hata oluştu: ', err);
      }); 
}

$('.share-btn').on('click',function(){
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Bağlantı panoya kopyalandı.',
        showConfirmButton: false,
        timer: 1000
      })
});

/*

 overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;*/ 
var readmorelistener=false;
function SeeMore(click_listener){
    listener_id = document.getElementById(click_listener).innerHTML;
    
    function sayilariBirlestir(str) {
        var sayilar = str.match(/\d/g);
        var birlesikSayi = sayilar.join("");
        return birlesikSayi;
      }

    var birlesikSayi = sayilariBirlestir(click_listener);
     var desc_id="article-desc-"+birlesikSayi;
     
       
     
     if(listener_id.includes("Devamını Oku...")){
        document.getElementById(desc_id).style.height="auto";
       /* document.getElementById(desc_id).style.overflow="hidden";
        document.getElementById(desc_id).style.display="block";
        document.getElementById(desc_id).style.webkitLineClamp="none";*/
        document.getElementById(click_listener).innerText="Makaleyi Daralt";
         
        readmorelistener=true;
        for (let i = 0; i < bulunanSayilar.length; i++) {
           alert(bulunanSayilar[0]);
          }
    }
    else if(listener_id.includes("Makaleyi Daralt")){
        document.getElementById(desc_id).style.height="145px";
       /* document.getElementById(desc_id).style.overflow="hidden";
        document.getElementById(desc_id).style.display="-webkit-box";
        document.getElementById(desc_id).style.webkitLineClamp="4";*/
        document.getElementById(click_listener).innerText="Devamını Oku...";
        readmorelistener=false;
    }
}
