// On récupère les élements HTML
const select1V = document.querySelector(".select1V");
const select2V = document.querySelector(".select2V");
const divButtonColor = document.getElementById("buttonColor");
const divButtonColorDeuxV = document.getElementById("buttonColorDeuxV");
const titreOuverture = document.getElementById("titreOuverture");
const titreModele = document.getElementById("titreModele");
const modelesPrefal1V = document.getElementById("modelesPrefal1V")
const modelesPrefal2V = document.getElementById("modelesPrefal2V")
const modelesTechnal1V = document.getElementById("modelesTechnal1V")
const modelesTechnal2V = document.getElementById("modelesTechnal2V")
const FYM1V = document.querySelector(".FYM1V");
const FYM2V = document.querySelector(".FYM2V")
const FYA1V = document.querySelector(".FYA1V")
const FYA2V = document.querySelector(".FYA2V")
const visible1V = document.querySelector(".visible1V")
const visible2V = document.querySelector(".visible2V")
const cache1V = document.querySelector(".cache1V")
const cache2V = document.querySelector(".cache2V")
const RAL7016 = document.getElementById("RAL7016")
const RAL9016 = document.getElementById("RAL9016")
const Champ = document.getElementById("Champ")
const RAL7035 = document.getElementById("RAL7035")
const argent = document.getElementById("argent")
const titreFinition = document.getElementById("titreFinition")
const imgProduit = document.getElementById("imgProduit");
const imgProduitFace = document.getElementById("imgProduitFace")
const imgProduitPoignee = document.getElementById("imgProduitPoignee")
const imgProduitArriere = document.getElementById("imgProduitArriere")
const flecheG = document.getElementById("flecheG")
const flecheD = document.getElementById("flecheD")
const poigneesPrefal = document.getElementById("poigneesPrefal")
const poigneesTechnal = document.getElementById("poigneesTechnal")
const poigneePrefal1 = document.getElementById("poigneePrefal1")
const poigneePrefal2 = document.getElementById("poigneePrefal2")
const poigneeTechnal1 = document.getElementById("poigneeTechnal1")
const poigneeTechnal2 = document.getElementById("poigneeTechnal2")
const titrePoignee = document.getElementById("titrePoignee")
const save = document.getElementById("save")
const vueOptions = document.getElementById("vueOptions")
const vueRecap = document.getElementById("vueRecap")
const recapOptions = document.getElementById("recapOptions")
const back = document.getElementById("back")


let vueActuelle = "VueCote"; // Initialisation de la vue caméra de départ



// Initialisation de l'application
afficherImage()
select1V.classList.add("active");
FYM1V.classList.add("active");
afficherElem ([modelesPrefal1V, modelesTechnal1V,poigneesTechnal])
masquerElem ([modelesPrefal2V,modelesTechnal2V,poigneesPrefal])
rendreActif (RAL7016)
rendreActif (poigneeTechnal1)
sessionStorage.setItem("cam","VueCote")
sessionStorage.setItem("modele","modele1VFYM")
sessionStorage.setItem("couleur","7016")
sessionStorage.setItem("poignee","poignee1")
console.log(imgProduit.src)
masquerElem([vueRecap])





//--------------
// LES FONCTIONS

function afficherImage() {
  // Récupérer les valeurs depuis sessionStorage
  const modele = sessionStorage.getItem("modele") || "modele1VFYM"; // Valeur par défaut si non présente
  const coloris = sessionStorage.getItem("couleur") || "7016"; // Valeur par défaut si non présente
  const poignee = sessionStorage.getItem("poignee") || "poignee1"; // Valeur par défaut si non présente
  const camera = sessionStorage.getItem("cam") || "VueCote"; // Valeur par défaut si non présente
  

  // Construire le chemin de l'image en fonction des choix
  const cheminImage = `Images/modeles/${modele}/${coloris}/${poignee+camera}.png`;
  console.log(cheminImage)

  // Mettre à jour l'attribut src de l'image avec le chemin construit
  imgProduit.src = cheminImage;
  imgProduit.alt = `Fenêtre - Modèle: ${modele}, Coloris: ${coloris}, Poignée: ${poignee}, Cam: ${camera}`;
  console.log(cheminImage)
}


function rendreActif (elem) {
  elem.classList.add("active")
}

function rendreInactif (elem) {
  elem.classList.remove("active")
}

function afficherElem (elem) {
  for (let elements of elem) {
  elements.style.display = "flex"
} }

function masquerElem (elem) {
  for (let elements of elem) {
  elements.style.display = "none"
} }

function modifierTexte (titre, contenu) {
  titre.textContent = contenu ;
}

function changerVueDroite() {
  if (vueActuelle === "VueCote") {
    vueActuelle = "VueFace";
  } else if (vueActuelle === "VueFace") {
    vueActuelle = "VuePoignee";
  } else if (vueActuelle === "VuePoignee") {
    vueActuelle = "VueArriere";
  } else {
    vueActuelle = "VueCote"; // Si l'état est "VueArriere", revenir à "VueCote"
  }
  sessionStorage.setItem("cam", vueActuelle); // 
  afficherImage(); // 
}

function changerVueGauche () {
  if (vueActuelle === "VueArriere") {
    vueActuelle = "VuePoignee";
  } else if (vueActuelle === "VuePoignee") {
    vueActuelle = "VueFace"
  } else if (vueActuelle === "VueFace") {
    vueActuelle = "VueCote"
  } else {
    vueActuelle = "VueArriere"
  }
  sessionStorage.setItem("cam", vueActuelle)
  afficherImage()
}




//--------------
// LES ECOUTEURS

flecheD.addEventListener("click", changerVueDroite)

flecheG.addEventListener("click", changerVueGauche)

select1V.addEventListener("click", function () {
  sessionStorage.setItem("modele", "modele1VFYM");
  afficherImage("modele1VFYM", "7016", "poignee1");
  rendreActif(select1V)
  rendreInactif(select2V)
  afficherElem ([modelesPrefal1V, modelesTechnal1V])
  masquerElem ([modelesPrefal2V,modelesTechnal2V])
  modifierTexte (titreOuverture, "1 vantail")
  afficherImage();
});

select2V.addEventListener("click", function () {
  sessionStorage.setItem("modele", "modele2VFYM");
  rendreActif(select2V)
  rendreInactif(select1V)
  rendreInactif(FYA2V)
  rendreActif(FYM2V)
  afficherElem ([modelesPrefal2V,modelesTechnal2V])
  masquerElem ([modelesPrefal1V, modelesTechnal1V])
  modifierTexte (titreOuverture, "2 vantaux")
  afficherImage();
  
});

FYM1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1VFYM");
  rendreActif(FYM1V)
  rendreInactif(FYM2V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(visible1V)
  rendreInactif(visible2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal FYM")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

FYA1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1VFYA");
  rendreActif(FYA1V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA2V)
  rendreInactif(visible1V)
  rendreInactif(visible2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal FYA")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

FYM2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2VFYM");
  rendreActif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(visible1V)
  rendreInactif(visible2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal FYM")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

FYA2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2VFYA");
  rendreActif(FYA2V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(visible1V)
  rendreInactif(visible2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Technal FYA")
  afficherImage();
  afficherElem([poigneesTechnal])
  masquerElem([poigneesPrefal])

});

visible1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1Vvisible");
  rendreActif(visible1V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(visible2V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Prefal Visible")
  afficherImage();
  afficherElem([poigneesPrefal])
  masquerElem([poigneesTechnal])

});

visible2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2Vvisible");
  rendreActif(visible2V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(visible1V)
  rendreInactif(cache1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Prefal Visible")
  afficherImage();
  afficherElem([poigneesPrefal])
  masquerElem([poigneesTechnal])

});

cache1V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele1Vcache");
  rendreActif(cache1V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(visible2V)
  rendreInactif(visible1V)
  rendreInactif(cache2V)
  modifierTexte (titreModele, "Prefal Caché")
  afficherImage();
  afficherElem([poigneesPrefal])
  masquerElem([poigneesTechnal])

});

cache2V.addEventListener("click", function() {
  sessionStorage.setItem("modele", "modele2Vcache");
  rendreActif(cache2V)
  rendreInactif(FYM2V)
  rendreInactif(FYM1V)
  rendreInactif(FYA1V)
  rendreInactif(FYA2V)
  rendreInactif(visible2V)
  rendreInactif(visible1V)
  rendreInactif(cache1V)
  modifierTexte (titreModele, "Prefal Caché")
  afficherImage();
  afficherElem([poigneesPrefal])
  masquerElem([poigneesTechnal])

});


RAL7016.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "7016");
  afficherImage();
  rendreActif(RAL7016)
  rendreInactif(RAL9016)
  rendreInactif(Champ)
  rendreInactif(RAL7035)
  rendreInactif(argent)
  modifierTexte (titreFinition, "RAL 7016")
});

RAL9016.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "9016")
  rendreActif(RAL9016)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(RAL7035)
  rendreInactif(argent)
  modifierTexte (titreFinition, "RAL 9016")
  afficherImage();
});

Champ.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "champagne")
  rendreActif(Champ)
  rendreInactif(RAL7016)
  rendreInactif(RAL9016)
  rendreInactif(RAL7035)
  rendreInactif(argent)
  modifierTexte (titreFinition, "Champagne anodisé")
  afficherImage();
});

RAL7035.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "7035")
  rendreActif(RAL7035)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(argent)
  rendreInactif(RAL9016)
  modifierTexte (titreFinition, "RAL 7035")
  afficherImage();
});

argent.addEventListener("click", function () {
  sessionStorage.setItem("couleur", "argent")
  rendreActif(argent)
  rendreInactif(RAL7016)
  rendreInactif(Champ)
  rendreInactif(RAL7035)
  rendreInactif(RAL9016)
  modifierTexte (titreFinition, "Argent anodisé")
  afficherImage();
});

poigneeTechnal1.addEventListener("click", function () {
sessionStorage.setItem("poignee", "poignee1")
rendreActif(poigneeTechnal1)
rendreInactif(poigneeTechnal2)
rendreInactif(poigneePrefal1)
rendreInactif(poigneePrefal2)
modifierTexte (titrePoignee, "Poignée Carré Technal")
  afficherImage();
})

poigneeTechnal2.addEventListener("click", function () {
  sessionStorage.setItem("poignee", "poignee2")
  rendreActif(poigneeTechnal2)
  rendreInactif(poigneeTechnal1)
  rendreInactif(poigneePrefal1)
  rendreInactif(poigneePrefal2)
  modifierTexte (titrePoignee, "Poignée Ronde Technal")
  afficherImage();
  })

  poigneePrefal1.addEventListener("click", function () {
    sessionStorage.setItem("poignee", "poignee1")
    rendreActif(poigneePrefal1)
    rendreInactif(poigneeTechnal1)
    rendreInactif(poigneeTechnal2)
    rendreInactif(poigneePrefal2)
    modifierTexte (titrePoignee, "Poignée Cuadro Prefal")
    afficherImage();
    })
  
    poigneePrefal2.addEventListener("click", function () {
      sessionStorage.setItem("poignee", "poignee2")
      rendreActif(poigneePrefal2)
      rendreInactif(poigneeTechnal1)
      rendreInactif(poigneeTechnal2)
      rendreInactif(poigneePrefal1)
      modifierTexte (titrePoignee, "Poignée Rasata Prefal")
      afficherImage();
      })
    



  save.addEventListener("click", function() {
    // Masquer la section "vue-options" et afficher "vue-recap"
    vueOptions.style.display = "none"
    vueRecap.style.display = "block";


  back.addEventListener("click",function () {
    vueOptions.style.display = "block"
    vueRecap.style.display = "none";
  })
    
// Récupérer les valeurs depuis le sessionStorage
let modeleRecap = titreModele.textContent || "";
let couleurRecap = titreFinition.textContent || "";
let poigneeRecap = titrePoignee.textContent || "";
let marqueRecap = ""

const modele = sessionStorage.getItem("modele") || "";
const couleur = sessionStorage.getItem("couleur") || "";
const poignee = sessionStorage.getItem("poignee") || ""


// Afficher les données dans le récapitulatif
recapOptions.innerHTML = `
<img id ="imageRecap" src = Images/modeles/${modele}/${couleur}/${poignee}VueCote.png>
  
    <h4>Modèle:</h4> <p>${modeleRecap}</p>
    <h4>Couleur:</h4> <p>${couleurRecap}</p>
    <h4>Poignée:</h4> <p>${poigneeRecap}</p>
`;
});

 


//--------------
// SCROLL CAM AUTO (DESACTIVER PR LE MOMENT)

// Obtenez la position de l'élément "typePoignee"
// const typePoignee = document.getElementById("typePoignee");
// const positionTypePoignee = typePoignee.offsetTop;

// vueOptions.addEventListener("scroll", function() {
//     // position actuelle de la barre de défilement
//     const scrollPosition = vueOptions.scrollTop;
    
//     // hauteur de la fenêtre visible
//     const windowHeight = vueOptions.clientHeight;

//     // Vérifiez si "typePoignee" est dans la fenetre visible
//     if (scrollPosition + windowHeight >= positionTypePoignee) {
//         // Changer la vue à "VuePoignee"
//         sessionStorage.setItem("cam", "VuePoignee");
//         afficherImage();}
   
// });




