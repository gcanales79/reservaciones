$("#buscarSerial").on("click",function(event){
    event.preventDefault();
   var numeroDeserie=$("#numeroDeserie").val().trim()
   url="/consulta/"+numeroDeserie;
   console.log("El url es " +url);
   window.location.href=url;

      
});


