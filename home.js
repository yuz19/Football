 /***coockies */
 const pseudo=document.getElementById("pseudo");
 const btn=document.getElementById("valider");
 btn.onclick=function(){
    if(pseudo.value!=""){
        document.cookie =  pseudo.value;
        window.location.href = "index.html";
    }

 
 }
