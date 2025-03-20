document.addEventListener("DOMContentLoaded", () => {
  // Pegamos os elementos da interface
  const lblSenhaSorteada = document.getElementById("lbl-senha-sorteada");
  const txtTamanhoSenha = document.getElementById("input-tamanho-senha");
  const btnSortear = document.getElementById("btn-sortear");
  const btnCopiar = document.getElementById("btn-copiar");

  // Função para gerar uma senha aleatória com um determinado tamanho
  function gerarSenha(tamanho) {
    // Verifica se o tamanho está dentro dos limites definidos (6 a 20)
    if (tamanho < 6 || tamanho > 20) {
      alert("O tamanho da senha deve estar entre 6 e 20 caracteres.");
      return null;
    }

    // Conjunto de caracteres disponíveis para a senha
    const caracteres =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let senha = "";

    // Gera a senha aleatória selecionando caracteres aleatórios da string acima
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return senha;
  }

  // Evento ao clicar no botão "Gerar"
  btnSortear.addEventListener("click", () => {
    // Obtém o tamanho desejado da senha e converte para número inteiro
    const tamanho = parseInt(txtTamanhoSenha.value, 10);
    // Gera a senha
    const senhaSorteada = gerarSenha(tamanho);

    // Se a senha for gerada corretamente, exibe no parágrafo
    if (senhaSorteada) {
      lblSenhaSorteada.innerText = senhaSorteada;
    }
  });

  // Evento ao clicar no botão "Copiar"
  btnCopiar.addEventListener("click", () => {
    // Verifica se há uma senha para copiar
    if (lblSenhaSorteada.innerText !== "") {
      navigator.clipboard.writeText(lblSenhaSorteada.innerText);
      alert("Senha copiada com sucesso!");
    } else {
      alert("Não há senha para ser copiada!");
    }
  });
});
