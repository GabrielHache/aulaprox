$.support.cors = true


$(document).ready(
    function(){
            $.ajax({
            type:"GET",
            url: "http://192.168.10.85:9000/users",
            success: function (data){
               $.each(data, function(i, user) {
                   $('#tabela_tubaina').append(
                    "<tr>"+ 
                    "<td>"+user.guuid+"</td>"+
                    "<td>"+user.guuid+"</td>"+
                    "<td>"+user.guuid+"</td>"+
                    "<td>"+user.guuid+"</td>"+
                    "<td>"+user.guuid+"</td>"+
               "</tr>" )}
               )}})})      
                   

                
            
                       
             