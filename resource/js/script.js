

$(document).ready(function(){
    alert("hey");

    $( `#lospictos` ).click(function() {
        $( ".picto" ).toggle( "explode" );
        $( ".line" ).toggle( "explode" );
      });


})