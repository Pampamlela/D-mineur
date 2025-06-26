function genererGrille(M,N){
    let grille = []
    for (let i = 0; i<M ; i++){
        let ligne = [];
        
        for (let j = 0; j<N; j++){
            ligne.push(0);
        }
        grille.push(ligne);
    }
    return grille;
}

console.log(genererGrille(4, 4));



function genererBombe(M,N,K){
    let grille = genererGrille(M,N)
    for (let i = 0; i<K; i++){
        let randomBombeLigne = Math.floor(Math.random()*M)
        let randomBombeColonne = Math.floor(Math.random()*N)

        while (grille[randomBombeLigne][randomBombeColonne] === 'X'){
            randomBombeLigne = Math.floor(Math.random()*M)
            randomBombeColonne = Math.floor(Math.random()*N)
    
        }
        grille[randomBombeLigne][randomBombeColonne] = 'X'
        
    }
    console.log("attention aux bombes")
    console.log( grille)  
}
genererBombe(4,4,5)

