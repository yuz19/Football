/*JOUER*/
var requestURL1='data.json';
var i=0;
const quest=document.getElementById("question");
const rep=document.querySelectorAll(".reponse div");
var score=0;
console.log("gg")
var request1 = new XMLHttpRequest();
var data,question=[],proposition=[],reponse;
request1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        //recuprer le resultat de ajax depuis le fichier data.json
        data=JSON.parse(this.responseText );
        
        //recuprer la question de json
        question=data[i].question;

        //recuprer les propositions et les faire push dans le tableau propositions
        /*data[i].proposition.forEach(element => {    
                proposition.push(element);
        });*/
        proposition=data[i].proposition;
        //recuprer la reponse correct 
        reponse=data[i].reponse
        
         

        quest.textContent=question;
  
        for(let j=0;j<4;j++){
            rep[j].textContent=proposition[j]
            //console.log(proposition );
        }

 
      
  
 
    }
};
request1.open("GET",requestURL1, true);  
Request.reponseType="json";
request1.send();
 
/*
const quest=document.getElementById("question");
const rep=document.querySelectorAll(".reponse div");
 
//intialiser 
 window.onload=function(){
    quest.textContent=question[0];
  
        for(let i=0;i<4;i++){
            rep[i].textContent=proposition[question+'|'+i]
            console.log(proposition );
        }
     
 }

 
function next(  ){
    
    
}*/
 
var num;
rep.forEach(element => {
    
 
    element.addEventListener('click',(e)=>{
        rep.forEach(elemt=>{
            if(elemt.classList.contains("chose")){
                elemt.classList.remove("chose")
            }
        })
        element.classList.add("chose");
        e.preventDefault();
        num=e.target.textContent;
        
        console.log(num);
});})
        
function next(){
 
    console.log(reponse+","+num);
    i++; score++;
    if(i<data.length  && reponse==num){
        rep.forEach(elemt=>{
            if(elemt.classList.contains("chose")){
                elemt.classList.remove("chose")
            }
        })
       
       
        question=data[i].question;
    
        //recuprer les propositions et les faire push dans le tableau propositions
        proposition=data[i].proposition;
        //recuprer la reponse correct 
        reponse=data[i].reponse
        
         

        quest.textContent=question;
    
        for(let j=0;j<4;j++){
            rep[j].textContent=proposition[j]
            //console.log(proposition );
        }
    }else if(reponse!=num){
        document.getElementById("menu_play").textContent="T'as perdu ton score est:"+score;

    }else{
        document.getElementById("menu_play").textContent="T'as gagné ton score est:"+score;
    }
   

}