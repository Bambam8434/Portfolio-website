$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

function saveData(){
let name,email,number,query,message;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
number=document.getElementById("number").value;
query=document.getElementById("query").value;
message=document.getElementById("message").value;

 let record=new Array();
 record=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
if(record.some((v)=>{return v.email==email})){
  alert(" This Email Is Already Use Plese Enter Another Email.")
}
else{
  
  record.push({
   "name":name,
   "email":email,
   "number":number,
   "query":query,
   "message":message,
 
 })
 localStorage.setItem("user",JSON.stringify(record));
}
// localStorage.setItem("name",name)
// localStorage.setItem("emial",emial)
// localStorage.setItem("query",query)
// localStorage.setItem("message",message)
}