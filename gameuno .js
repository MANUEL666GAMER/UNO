const rl = require("readline-sync");


var deck=[];
var colors=["YELLOW","BLUE","GREEN","RED"];
var type=["comun","especiales","comodines"]
var card={
    color:null,//amarillo,azul, verde y amarillo
    num:null,//0-9
    type:null,//comun,especiales y comodines
};

for (var ccolor =0;ccolor<colors.length;ccolor++){
       
for (var number =0; number < 10; number++) {
    //console.log ("number",number);
    deck.push({color:colors[ccolor],num:number,type:"comun"})    
}
for (var number1 =1; number1 < 10; number1++) {
    //console.log ("number",number1);
    deck.push({color:colors[ccolor],num:number1,type:"comun"})
    
}
deck.push({color:colors[ccolor],num:"+2",type:"especiales"})
deck.push({color:colors[ccolor],num:"+2",type:"especiales"})
deck.push({color:colors[ccolor],num:"B",type:"especiales"})
deck.push({color:colors[ccolor],num:"B",type:"especiales"})
deck.push({color:colors[ccolor],num:"R",type:"especiales"})
deck.push({color:colors[ccolor],num:"R",type:"especiales"})
}
deck.push({color:null,num:"+4",type:"COMODIN"})
deck.push({color:null,num:"+4",type:"COMODIN"})
deck.push({color:null,num:"+4",type:"COMODIN"})
deck.push({color:null,num:"+4",type:"COMODIN"})
deck.push({color:null,num:"CC",type:"COMODIN"})
deck.push({color:null,num:"CC",type:"COMODIN"})
deck.push({color:null,num:"CC",type:"COMODIN"})
deck.push({color:null,num:"CC",type:"COMODIN"})

console.log(deck);
const palyers=rl.question("¿CUANTOS JUGADORES SON?",{})
console.log(palyers)