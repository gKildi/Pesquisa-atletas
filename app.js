dados.forEach(
    function(atleta) {
    console.log("Título: "+ atleta.titulo);
    console.log("Descrição: " + atleta.descricao);
    console.log("Link: " + atleta.link);
    console.log("-------------------------------");
});

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa Digitar algo.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados){

        titulo = dado.titulo.toLowerCase();
        tags = dado.tags.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= ${dado.link} target="_blank"> Mais Informações</a>
            </div>
        `;
        }
       if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
       } 
    }
    section.innerHTML = resultados;
}
