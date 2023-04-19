// nome repo di oggi: js-lista-spesa
// Descrizione:
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
// Consigli:
// Come posso ciclare su un array con il ciclo while?



eleListaSpesa= ['pasta','acqua','pane','biscotti','latte'];


eleList = document.getElementById('lista');
let i = 0;

while (i < eleListaSpesa.length) {
    console.log(eleListaSpesa[i]);
    document.getElementById ('lista').innerHTML += (`<li class="color">${eleListaSpesa[i]}</li>`);
    i++;
}

