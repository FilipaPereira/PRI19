function apagaAluno(ident){
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function apagaNota(identAluno, idNota){
    axios.delete('/alunos/' + identAluno + '/notas/' + idNota)
        .then(response => window.location.assign('/alunos/' + identAluno))
        .catch(error => console.log(error))
}