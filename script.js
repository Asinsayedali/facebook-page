$(document).ready(function(){
    
    $("#sumbit-form").validate({
        rules:{
            
            fname:{
                
                required:true,
                console,log(hello)
                ,minlength: 5
            },
            sname:{
                required:true,
                minlength:4
                
            }  
        }
    })
})