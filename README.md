Enoncé
Le but de cet exercice, comme son nom l’indique, est de programmer un démineur !

Etape 1

Pour commencer, avant de pouvoir poser nos bombes, il nous faut une grille et par conséquent une fonction génératrice de grille.

    Notre générateur de grille pourrait, à partir d'une taille de côté M - ou 2 tailles (M,N) pour une grille rectangulaire -, générer une superbe grille. Remplie de 0 par exemple pour simplifier le coté "vide".
    Et qui pourrait, à partir d'un entier K, générer une grille (superbe rappelons-le) parsemée de K merveilleuses cases pleines (ou noires, ou True, ou X) dans un océan de M*N-K cases vides (ou blanches, ou False). Ces K cases pleines seraient, réparties aléatoirement sur la grille.

Générer cette grille en ligne de commande en python.

Etape 2 - Cachez cette grille que je ne saurais voir !

Mais imaginez, si la grille était d'abord neutre, et que vous puissiez, les une après les autres, sélectionner les cases (par exemple en renseignant leurs coordonnées en ligne de commande), et les découvrir : soit pleines (ou noires, ou True), soit vides (ou blanches, ou False) ?

Ce serait tout de même diablement intriguant !

Il vous faut pour cela une logique en boucle :

    La grille est affichée dans un certain état A. Au début, cette état est "neutre" : on ne connait pas le contenu des cases.
    Le jeu attend une action, un ordre ; vous l'exécutez (vous renseignez des coordonnées par exemple, ou - si vous vous êtes déjà diversifié dans le graphisme - vous cliquer sur une case, ...).
    Le jeu vous affiche le nouvel état B de la grille (l'état A plus le résultat de votre action).
    On recommence la boucle avec ce nouvel état B.

Etape 3 - Full graphix

La ligne de commande, c'est cool, mais vous vous dites que pouvoir faire la même chose, mais avec une interface graphique, ça serait encore mieux. Changez votre affichage pour avoir quelque chose de plus visuel que de simples caractères ASCII.
Etape 4 - Un vrai démineur

Bon, maintenant que vous avez tout ce qu’il vous faut, vous pouvez rajouter les règles du démineur et faire une petite partie !

Les règles du démineur sont assez simples :

    La grille est générée avec un nombre de mines connu, et leurs emplacements sont figés.
    Lorsqu'on interroge la grille (on clique sur une case, ou on renseigne en ligne de commande les coordonnées d'une case, ...), deux cas possibles :
        La case est occupée par une mine : désolé, vous avez perdu !
        La case n'est pas occupée par une mine : bien joué, vous pouvez continuer !
    Et en plus, cette case affiche maintenant le nombre de mines dans l'ensemble des 8 cases adjacentes.
