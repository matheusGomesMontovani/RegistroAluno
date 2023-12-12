function salvar() {
    var dadosAluno = {
        nomeAluno: document.getElementById('nomeAluno').value,
        nomeMae: document.getElementById('nomeMae').value,
        nomePai: document.getElementById('nomePai').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        numMatricula: document.getElementById('numMatricula').value,
        escolherCurso: document.getElementById('escolherCurso').value
    };

    if (dadosAluno.nomeAluno == "" || dadosAluno.nomeMae == "" || dadosAluno.nomePai == "" ||
        dadosAluno.dataNascimento == "" || dadosAluno.numMatricula == "" || dadosAluno.escolherCurso == "") {
        window.alert("Degite os dados do aluno")
    } else {
        console.log(dadosAluno);
    }
}