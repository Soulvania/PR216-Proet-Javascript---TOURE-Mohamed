const chx = document.querySelectorAll(".choix");

//Les scores ayant l'id scoreJoueur et scoreOrdi seront mis à jour.

const condition = document.querySelectorAll(".options");
let scoreJoueur = 0;
let scoreOrdi = 0;

chx.forEach((option) => {
    // La fonction suivante sera activée par le clique d'un des boutons.
    option.addEventListener("click", function() {
        //Affecter choix joueur à une variable
        const cJoueur = this.value;

        //Choix ordinateur randomisé entre les 3 options
        const choix_Ordi = ["Pierre", "Feuille", "Ciseaux"];
        //Affecter choix ordinateur à une deuxieme variable
        const cOrdi = choix_Ordi[Math.floor(Math.random() * 3)];

        //Appel foncition maj images
        majComp(cJoueur, cOrdi);
        //On appelle la fonction Choix_vs pour comparer le choix du joueur
        //et de l'ordinateur
        choix_vs(cJoueur, cOrdi);
        //Mis à jour du score
        scoreUpdate();
        //Remise à zéro des scores en fin de partie
        if (condVictoire()) {
            scoreJoueur = scoreOrdi = 0;
            scoreUpdate();
        }
    });
});
//Mettre a jour les images correspondants aux choix
function majComp(cJoueur, cOrdi) {
    document.getElementById("compJoueur").src = `./img/${cJoueur}.svg`;
    document.getElementById("compOrdi").src = `./img/${cOrdi}.svg`;
}
//On crée une fonction pour comparer les choix du joueur et de l'ordinateur
function choix_vs(cJoueur, cOrdi) {
    const choix_vs = `${cJoueur} vs ${cOrdi}`;

    // En cas d'égalité
    if (cJoueur === cOrdi) {
        alert(`${choix_vs} est une égalité`);
        return;
    }

    // Si le joueur choisi Pierre
    if (cJoueur === "Pierre") {
        if (cOrdi === "Ciseaux") {
            alert(`${choix_vs} = Vous avez gagné`);
            scoreJoueur++;
        } else {
            alert(`${choix_vs} = Vous avez perdu`);
            scoreOrdi++;
        }
    }

    // Si le joueur choisi Feuille
    else if (cJoueur === "Feuille") {
        if (cOrdi === "Pierre") {
            alert(`${choix_vs} = Vous avez gagné`);
            scoreJoueur++;
        } else {
            alert(`${choix_vs} = Vous avez perdu`);
            scoreOrdi++;
        }
    }

    // Si le joueur choisi Ciseaux
    else {
        if (cOrdi === "Feuille") {
            alert(`${choix_vs} = Vous avez gagné`);
            scoreJoueur++;
        } else {
            alert(`${choix_vs} = Vous avez perdu`);
            scoreOrdi++;
        }
    }
}

//Fonctions Scores du jeu
function scoreUpdate() {
    document.getElementById("scoreJoueur").textContent = scoreJoueur;
    document.getElementById("scoreOrdi").textContent = scoreOrdi;
}

//Verification Conditions de score finale
function condVictoire() {
    if (scoreJoueur === 10 || scoreOrdi === 10) {
        const vainqueur =
            scoreJoueur === 10 ?
            "FELICITATION!! Vous avez gagné! Une nouvelle partie?" :
            "Dommage, vous avez perdu. Une petite revanche?";
        alert(vainqueur);
        return true;
    }
    return false;
}