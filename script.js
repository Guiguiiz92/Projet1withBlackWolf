// DOMContentLoaded'{ assure que le code JavaScript ne s'exécute qu'une fois que le DOM (la structure de la page HTML) a été entièrement chargé.
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const citationDiv = document.getElementById("citation");

  citationDiv.style.display = "none"; // Cacher la div au chargement de la page

  // Chargement du fichier JSON
  fetch("citations.json")
    .then((response) => response.json()) //le fichier JSON est converti en un objet JavaScript.
    .then((data) => {
      const citations = data.citations;

      // Fonction pour choisir une citation aléatoire
      //Math.floor() est utilisée pour arrondir ce nombre flottant à l'entier inférieur le plus proche.
      function choisirCitationAleatoire(citations) {
        return citations[Math.floor(Math.random() * citations.length)];
      }

      // Écouteur d'événement pour le clic sur le bouton
      button.addEventListener("click", function () {
        const citationAleatoire = choisirCitationAleatoire(citations);
        const citationHTML = `<p>${citationAleatoire.citation}<br>- ${citationAleatoire.auteur}</p>`;
        citationDiv.innerHTML = citationHTML;
        citationDiv.style.display = "block"; // Afficher la div une fois le bouton cliqué
      });
    })
    .catch((error) =>
      console.error(
        "Une erreur s'est produite lors du chargement du fichier JSON :",
        error
      )
    );
});
