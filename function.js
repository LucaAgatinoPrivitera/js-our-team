function milestone1() {
    for (let i = 0; i < ourTeam.length; i++) {

        const ourTeamInside = ourTeam[i]; //Così sto creando una costante, che si basa sull'array, ad ogni ciclo si prende i valori di ogni oggetto, quindi da lì becca il nome e il ruolo.
        console.log("Nome in posizione " + i + " dell'array: ", `${ourTeamInside.Nome} ${ourTeamInside.Ruolo}`);
        /*console.log("Nome in posizione " + i + " dell'array: ", `${ourTeamInside.Nome}`, "Ruolo in posizione " + i + " dell'array: " `${ourTeamInside.Ruolo}`); Non gira così*/
    }
}

function milestone2() {
    for (let i = 0; i < ourTeam.length; i++) {
        const ourTeamInside = ourTeam[i]; //Così sto creando una costante, che si basa sull'array, ad ogni ciclo si prende i valori di ogni oggetto, quindi da lì becca il nome e il ruolo.
        console.log("Nome in posizione " + i + " dell'array: ", `${ourTeamInside.Nome} ${ourTeamInside.Ruolo} ${ourTeamInside.foto}`); //Non è una stringa

        let myJSON = JSON.stringify(ourTeamInside); //Trasforma tutto ourTeam in stringa
        console.log(myJSON); //Print dell'array in formato stringa
        // document.getElementById("ml2").innerText += myJSON;

        array.push(myJSON)
        document.getElementById("ml2").innerText = array;

    }



}