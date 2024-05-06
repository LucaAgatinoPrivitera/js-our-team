function milestone2() {
    for (let i = 0; i < ourTeam.length; i++) {

        const ourTeamInside = ourTeam[i]; //Così sto creando una costante, che si basa sull'array, ad ogni ciclo si prende i valori di ogni oggetto, quindi da lì becca il nome e il ruolo.
        console.log("Nome in posizione " + i + " dell'array: ", `${ourTeamInside.Nome} ${ourTeamInside.Ruolo}`);
        /*console.log("Nome in posizione " + i + " dell'array: ", `${ourTeamInside.Nome}`, "Ruolo in posizione " + i + " dell'array: " `${ourTeamInside.Ruolo}`); Non gira così*/
        
    }
}