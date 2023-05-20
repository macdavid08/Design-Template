$(document).ready (()=> {

    $(".send").click(function (){
        

        validatName()
        validatMail()
        validatNumb()
        validatPassword()

        $("#name").val("")
        $("#mail").val("")
        $("#phone").val("")
        $("#password").val("")

        
        

        // $(".success").text("Submission successful").addClass("submit")


       
    })

    

    let validatName = ()=> {

        if(!nameChk()){
            $(".txt").text(" Space can't be empty")
            return
        }else{
           
        }
       

    }

    let validatMail = ()=> {

        if(!emailChk()){
            $(".mail-txt").text("Space can't be empty")
        }else{
            return
        }
       

    }

    let validatNumb = ()=> {

        if(!phoneChk()){
            $(".pNumb").text("Space can't be empty")

        }else{
            return
        }
       

    }

    let validatPassword = ()=> {

        if(!passwordChk()){
            $(".txt1").text("Space can't be empty ")

        }else{
            return
        }
       

    }



    $("#name").keyup(()=>{
        nameChk()
    })
    let nameChk = ()=> {
    
        let name = $("#name").val()
    
        let regN = /[a-zA-Z\s]+$/
    
        if (!regN.test(name)){
           
            $("#name").css("border", "1px solid red")
            $(".txt").text("Only texts allowed")
            $(".txt").addClass("style").fadeOut(2000)
            
        }else {
            $("#name").css("border", "1px solid green")
            $(".txt").remove("")
     
        }

    
    }


    $("#password").keyup(()=>{
        passwordChk()
    })


    let passwordChk = ()=> {

        let password = $("#password").val()

        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        

        if (!passwordRegex.test(password)) {

            $("#password").css("border", "1px solid red")
            $(".txt1").text("Password not Valid ")
            $(".txt1").addClass("style").fadeOut(2000)

            return
           

        }else{
            $("#password").css("border", "1px solid green")
            $(".txt1").remove()
            return
        }
    }


    $("#phone").keyup(()=>{
        phoneChk()
        

    })

    let phoneChk = ()=> {
        let numb = $("#phone").val()
        let numbRegex = /^\d{11,13}$/

        if(!numbRegex.test(numb)) {
            $("#phone").css("border", "1px solid red")
            $(".pNumb").text("Number cant be less than 11 digits or greater than")
            $(".pNumb").addClass("style").fadeOut(2000)
           

        }else{
            $("#phone").css("border", "1px solid green")
            $(".pNumb").remove()
        }

    }


    $("#mail").keyup(()=>{
        emailChk()
    })


    let emailChk = ()=> {

        let email = $("#mail").val()

        let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!mailRegex.test(email)) {
            $("#mail").css("border", "1px solid red")
            $(".mail-txt").text("Email not valid")
            $(".mail-txt").addClass("style").fadeOut(2000)
            return
        }else {
            $("#mail").css("border", "1px solid green")
            $(".mail-txt").remove()

        }
    }
    

   

})    






