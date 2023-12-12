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
        window.alert("Nome do aluno: " + dadosAluno.nomeAluno + "\n"  +
        "Nome da Mãe: " + dadosAluno.nomeMae + "\n"  +
        "Nome do Pai: " + dadosAluno.nomePai + "\n"  +
        "Data de Nascimento: " + dadosAluno.dataNascimento + "\n" +
        "Número da Matrícula: " + dadosAluno.numMatricula + "\n" +
        "Curso: " + dadosAluno.escolherCurso);
    }
}