const divRetorno = document.getElementById('divRetorno');

fetch("https://opensheet.elk.sh/1vQI319ToRYGkHcLa8UOSkraytjMbMG7aM6Hp202PUtc/javateste")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      var classeErro = "";
      var intervalo = "";

      if (row.ativo == "N") {
        classeErro = "inativo";
      }else{
        classeErro = "";
      }

      if (row.US_SAIDA_M !== "" && row.US_ENTRADA_T !== "") {
        intervalo = "Intervalo " + row.US_SAIDA_M + " às " + row.US_ENTRADA_T;
      }else{
        intervalo = "";
      }
      divRetorno.innerHTML += `
      
            <div class="row border border-secondary mb-2 ${classeErro}">
                <div class="col">
                    <p class="fs-6">Pront: ${row.funcionario}</p>
                </div>
                <div class="col">
                    <p class="fs-6">Nome: ${row.nome}</p>
                </div>
                <div class="col">
                    <p class="fs-6">Setor: ${row.funcao}</p>
                </div>
                <div class="col">
                    <p class="fs-6">Folga: ${row.folga}</p>
                </div>
                <div class="col">
                    <p class="fs-6">Entrada: ${row.US_ENTRADA_M}</p>
                </div>
                <div class="col">
                    <p class="fs-6">${intervalo}</p>
                </div>
                <div class="col">
                    <p class="fs-6">Saída: ${row.US_SAIDA_T}</p>
                </div>
            </div>
      
      `;
      
    });
  });