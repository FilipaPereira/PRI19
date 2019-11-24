$(function() {
    var cont = 1

    $("#mais1").click(e => {
        e.preventDefault()
        cont++;
        var campo = $('<div></div>', {class: 'w3-container', id: 'f' + cont})
        var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc' + cont})
        var descLabel = $('<label class="w3-cell">Descrição:</label>')
        var descInput = $('<input/>', {class: 'w3-input w3-cell w3-border', type: "text", name: "desc"})
        var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro' + cont})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro:</label>')
        var ficheiroInput = $('<input/>', {class: 'w3-input w3-cell', type: "file", name: "ficheiro"})
        $("#lista").append(campo)
        $("#f"+cont).append(desc)
        $("#desc"+cont).append(descLabel, descInput)
        $("#f"+cont).append(ficheiro)
        $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
    })
})

function show_me(linha, f){

    var ficheiro = $('<h4><b>Nome:</b> ' + f.name + 
    '</h4>\n<h4><b>Tipo:</b> ' + f.mimetype + 
    '</h4>\n<h4><b>Tamanho:</b> ' + f.size + ' bytes</h4>\n<h4><b>Descrição:</b> ' + f.desc + '</h4>')
    
    $('#display').empty()
    $('#display').append(ficheiro)

    //var img = 'src="/images/' + f.name + '" width="350"'
    if(f.mimetype.startsWith('image')){
        $('#display').load(f.path)
        $('#display').append($('<img>',{src: '/images/' + f.name, width:'350'}))
       //$('#display').append('<img ' + img + '>')
    }
    var img = 'src="/images/' + f.name + '" width="350"'

    $('#display').modal()
}