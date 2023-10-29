let jug = 0;
function jugar(){
    const total = (Math.floor(Math.random()*185))+185;// 37*5=185
    const numCaido = total%37;
    jug+=1

    console.log(jug,":", total, "caido en numero", numCaido)
}
for(let i=0; i<10; i++){
    jugar();
}
