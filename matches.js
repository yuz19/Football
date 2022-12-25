/*JOUER*/
var requestURL1='matches.json';
var matches_c=document.querySelector(".matches_c")
 

var request1 = new XMLHttpRequest();
var data;
 
request1.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        data=JSON.parse(this.responseText);  

        for(let i=0;i<data.length;i++){
                 createMatch();
             //equipe1
     
        }
        var matches=document.querySelectorAll(".match");
        for(let i=0;i<data.length;i++){
        matches[i].querySelector(".equipe1 img").src=data[i].equipe1Img;
        matches[i].querySelector(".equipe1 h2").textContent=data[i].equipe1;
        matches[i].querySelector(".equipe1 h1").textContent=data[i].scores[0];
           //equipe2
           matches[i].querySelector(".equipe2 img").src=data[i].equipe2Img;
           matches[i].querySelector(".equipe2 h2").textContent=data[i].equipe2;
           matches[i].querySelector(".equipe2 h1").textContent=data[i].scores[1]; 
        }

        
     
   

    }
};
request1.open("GET",requestURL1, true);  
Request.reponseType="json";
request1.send();
function createMatch(){
    const divmatch=document.createElement("div")
    divmatch.classList.add("match")
    
        const divEquipe1=document.createElement("div")
        divEquipe1.classList.add("equipe1")

        const divEquipe2=document.createElement("div")
        divEquipe2.classList.add("equipe2")
            const img=document.createElement("img")
            const h1=document.createElement("h1")
            const h2=document.createElement("h2")
        
   
    
    divEquipe1.appendChild(img.cloneNode("True"))
    divEquipe1.appendChild(h2.cloneNode("True"))
    divEquipe1.appendChild(h1.cloneNode("True"))

    divEquipe2.appendChild(img.cloneNode("True"))
    divEquipe2.appendChild(h2.cloneNode("True"))
    divEquipe2.appendChild(h1.cloneNode("True"))

    divmatch.appendChild(divEquipe1.cloneNode("True"));
    divmatch.appendChild(divEquipe2.cloneNode("True"));



    matches_c.appendChild(divmatch.cloneNode("True"))
}