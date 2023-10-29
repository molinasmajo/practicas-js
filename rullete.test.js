let jugadas = 0;
function jugar(){
    const total = (Math.floor(Math.random()*185))+185;// 37*5=185
    const num = total%37;
    jugadas+=1

    console.log(jugadas,":", total, "caido en numero", num)
    test('string with a single number should result in the number itself', () => {
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(36);
      })
}
for(let i=0; i<10; i++){
    jugar();
}