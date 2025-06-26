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


function grilleVisible(M,N){
    let grille = []
    for (let i = 0; i<M ; i++){
        let ligne = [];
        
        for (let j = 0; j<N; j++){
            ligne.push("?");
        }
        grille.push(ligne);
        
    }
    return grille;

}


function afficherGrille(grille){
    console.log("Ma jolie grille")
    for (let i = 0; i < grille.length; i++) {
        console.log(grille[i].join(" "));
    }
}

afficherGrille(grilleVisible(4,4))


function revelerCase(grilleSecrete, grilleVisible,a,b){

    if(grilleSecrete[a][b]==="X"){
        grilleVisible[a][b] = "X"
        return true
    }else{
        grilleVisible[a][b] = 0
        return false
    }
}

function jouer(M,N,K){
    let grilleSecrete = genererBombe(M,N,K);
    let grilleJeu = grilleVisible(M,N);

    let jeuEnCours = true;
    let aPerdu = false;
    
    while(jeuEnCours && !aPerdu) {
        // 1. Afficher la grille
        afficherGrille(grilleJeu);
        
        // 2. Demander coordonnées au joueur
        let ligne = Number(window.prompt("quelle case tu veux jouer ? coordonnées x "))
        let colonne = Number(window.prompt("quelle case tu veux jouer ? coordonnées y"))
        
        if (ligne < 0 || ligne >= M || colonne < 0 || colonne >= N) {
            alert("Coordonnées invalides !");
            continue;
        }
        if (grilleJeu[ligne][colonne] !== "?") {
            alert("Case déjà découverte !");
            continue;
        }

        // 3. Révéler la case
        let resultat = revelerCase(grilleSecrete, grilleJeu, ligne, colonne);
        console.log(resultat)
        // 4. Vérifier si le joueur a perdu
        if(resultat === true) {
             aPerdu = true;
        }
        
        // 5. Vérifier si le joueur a gagné
        // (toutes les cases non-bombes sont découvertes)
        let casesRestantes = 0;
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (grilleJeu[i][j] === "?") {
                    casesRestantes++;
                }
            }
        }

        // Si il ne reste que K cases cachées (les bombes), c'est gagné !
        if (casesRestantes === K) {
            jeuEnCours = false; // ou une variable "aGagne = true"
        }
    }
    afficherGrille(grilleJeu);
    if (aPerdu){
        alert("Pas de chance !")
    }else{
        alert("Bravo !")
    }
    
}
console.log("on joue?")
jouer(5,5,3)