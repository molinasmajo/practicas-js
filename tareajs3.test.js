function angul(){
    var inicial = Math.floor(Math.random()*360);
    var angulof = (inicial+randomxd)%360;
    var randomxd = (Math.floor(Math.random()*1800)+1800);//360*5 =1800 (5 vueltas enteras)

    console.log("inicial:", inicial);
    console.log("valor random:", randomxd);
    console.log("final:", angulof);

    test('string with a single number should result in the number itself', () => {
        expect(angulof).toBeGreaterThanOrEqual(0);
        expect(angulof).toBeLessThanOrEqual(360);
      })
}
angul();
