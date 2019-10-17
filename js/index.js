$(document).on("click","#login",function(){
$("#Login").fadeIn(1000);
});
$(document).on("click","#Registro",function(){
$("#RegistroM").fadeIn(1000);
});
//Salir del login 
$(document).on("click","#Login",function(e) {
                    
         var container = $("#caja");
                            
            if (!container.is(e.target) && container.has(e.target).length === 0) { 
               $("#Login").fadeOut(1000);             
            }
     });

$(document).on("click","#RegistroM",function(e) {
                    
         var container = $("#caja");
                            
            if (!container.is(e.target) && container.has(e.target).length === 0) { 
               $("#RegistroM").fadeOut(1000);             
            }
     });

