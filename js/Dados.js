var gabarito  = ["A","D","C","D","A","B","C","A","D","A"]
var pont = 0;




const P1 = {

    Id: "Pergunta numero 1",
    Pergunta: "Que time Pelé Jogou?", 
    RespostaA: "Santos",  
    RespostaB: "São Paulo", 
    RespostaC: "Corinthians",
    RespostaD: "Palmeiras",   


}

const P2 = {
    
    Id: "Pergunta numero 2",
    Pergunta: "Quem ganhou o mundial de 2023?", 
    RespostaA: "Bayern de Munique",  
    RespostaB: "Chelsea", 
    RespostaC: "Juventus",
    RespostaD: "Real Madrid",  
    foto: "https://www.lance.com.br/files/article_main/uploads/2020/12/03/5fc8fb070feab.jpeg"   

}

const P3 = {
    
    Id: "Pergunta numero 3",
    Pergunta: "Qual time Messi não jogou?", 
    RespostaA: "Newlls old Boys",  
    RespostaB: "Barcelona", 
    RespostaC: "Napoli",
    RespostaD: "PSG",  
    foto: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" 

}

const P4 = {
    
    Id: "Pergunta numero 4",
    Pergunta: "Placar de Brasil x Alemanha 2002", 
    RespostaA: "0x2",  
    RespostaB: "1x0", 
    RespostaC: "3x2",
    RespostaD: "2x0",  
    foto: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt927c3b3002406149/60db8ead2446e93b5b63e524/a2eb6b04106a5e193f9a70ff0cca2588d42baa1a.jpg?auto=webp&format=jpg&quality=100" 

}

const P5 = {
    
    Id: "Pergunta numero 5",
    Pergunta: "Quais times tem 3 libertadores?", 
    RespostaA: "Santos/Palmeiras/São Paulo",  
    RespostaB: "São Paulo/Corinthians/Palmeiras", 
    RespostaC: "Santos/Corinthians/Palmeiras",
    RespostaD: "Corinthians/Palmeiras/São Paulo",  
    foto: "https://portaldoatleticano.com.br/wp-content/uploads/2023/02/Libertadores.jpg" 

}

const P6 = {
    
    Id: "Pergunta numero 6",
    Pergunta: "5 ultimos campeões da Copa", 
    RespostaA: "Russia/França/Canadá/Brasil/Colombia",  
    RespostaB: "Argentina/França/Alemanha/Espanha/Italia", 
    RespostaC: "Mexico/Argentina/Italia/França/Portugal",
    RespostaD: "Brasil/Croacia/Italia/Espanha/Holanda",  
    foto: "https://s2.glbimg.com/QNVrmrIqZXDyvCEYVcheiUvTM-M=/0x0:2000x1333/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/12/16/gettyimages-1002807418_6ZXy7wF.jpg " 

}

const P7 = {
    
    Id: "Pergunta numero 7",
    Pergunta: "Goleiro com mais gol na história", 
    RespostaA: "Manuel Neuer",  
    RespostaB: "Gianluigi Buffon", 
    RespostaC: "Rogerio Ceni",
    RespostaD: "Oliver Rolf Kahn",  
    foto: "https://png.pngtree.com/png-clipart/20190921/original/pngtree-soccer-goalkeeper-cartoon-illustration-png-image_4695997.jpg " 

}

const P8 = {
    
    Id: "Pergunta numero 8",
    Pergunta: "Maior artilheiro de Seleções", 
    RespostaA: "Cristiano Ronaldo",  
    RespostaB: "Neymar Jr", 
    RespostaC: "Lionel Messi",
    RespostaD: "Ronaldo Fenomeno",  
    foto: "https://jpimg.com.br/uploads/2018/04/Cristiano-Ronaldo-marcou-um-gola%C3%A7o-de-bicicleta-na-partida-contra-a-Juventus-nesta-ter%C3%A7a-feira-em-Turim-1.jpg " 

}

const P9 = {
    
    Id: "Pergunta numero 9",
    Pergunta: "Hat-trick mais rápido da história", 
    RespostaA: "Roberto Carlos",  
    RespostaB: "Cristiano Ronaldo", 
    RespostaC: "Halland",
    RespostaD: "Robert Lewandowski",  
    foto: "https://www.teclasap.com.br/wp-content/uploads/2014/06/hat-trick-825x506.png " 

}

const P10 = {
    
    Id: "Pergunta numero 10",
    Pergunta: "Tempo gol mais rapido da história", 
    RespostaA: "2.2 s",  
    RespostaB: "1.9 s", 
    RespostaC: "1.8 s",
    RespostaD: "2.1 s",  
    foto: "https://i.ytimg.com/vi/j2kIQL7MbbQ/maxresdefault.jpg " 

}

var vetor = [P1,P2,P3,P4,P5,P6,P7,P8,P9,P10];
function PegaDados() {


    localStorage.nome =   document.getElementById("nome").value;

    
}

function teste () {

    document.getElementById("teste").innerHTML = localStorage.nome;
    document.getElementById("pergunta").innerHTML = P1.Pergunta;
    document.getElementById("respA").innerHTML = P1.RespostaA;
    document.getElementById("respB").innerHTML = P1.RespostaB;
    document.getElementById("respC").innerHTML = P1.RespostaC;
    document.getElementById("respD").innerHTML = P1.RespostaD;

}


 var cont = 1;
   
  function troca() {

        document.getElementById("identifica").innerHTML = vetor[cont].Id;  
        document.getElementById("pergunta").innerHTML = vetor[cont].Pergunta;  
        document.getElementById("respA").innerHTML = vetor[cont].RespostaA;  
        document.getElementById("respB").innerHTML = vetor[cont].RespostaB; 
        document.getElementById("respC").innerHTML = vetor[cont].RespostaC; 
        document.getElementById("respD").innerHTML = vetor[cont].RespostaD; 
        document.getElementById("foto").src = vetor[cont].foto; 


        document.getElementById("respA").style.color = "black";
        document.getElementById("respB").style.color = "black";
        document.getElementById("respC").style.color = "black";
        document.getElementById("respD").style.color = "black";

       cont++; 



    }

    var c = 0;

    function verifica () {

           


        if(v==gabarito[c]){



            document.getElementById("resp" + v).style.color = "green";
            pont++;


        }else{


            
            document.getElementById("resp" + v).style.color = "Red";
            document.getElementById("resp" + gabarito[c]).style.color = "green";

        }

    

      

        c++;

        if(c==10){

            window.location.replace("../html/resultado.html");

            localStorage.ponto = pont;

        }

    }