$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
    });
    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
      function DisableMonday(date) {
         
        var day = date.getDay();
       // If day == 1 then it is MOnday
       if (day == 1) {
       
       return [false] ; 
       
       } else { 
       
       return [true] ;
       }
        
      }
        
       $(function() {
       $( "#datepicker" ).datepicker({
       beforeShowDay: DisableMonday
       });
       });