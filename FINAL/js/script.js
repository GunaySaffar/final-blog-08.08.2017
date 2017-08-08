var slid=document.querySelector('.polosa');
var btn=document.querySelectorAll('.btns-my');
var btn_2=document.querySelectorAll('.little-btns .center-btn span');
var count=0;
 $(".btn-left , .btn-right , .little-btns .center-btn span").click(function(event) {
    p= $('.polosa-1').css('left');
    for (var i = 0; i < btn_2.length; i++) {
        btn_2[i].style.background="transparent"
      }
    switch(p){
      case "0px":
      $(".polosa-1").css('left', '-780px');
      
      btn_2[1].style.background="white"
      break;
      case "-780px":
      $(".polosa-1").css('left', '-1580px');
      btn_2[2].style.background="white"
      break;
      case "-1580px":
      $(".polosa-1").css('left', '0px');
      btn_2[0].style.background="white"
      z=0;
      break;
    }
 });