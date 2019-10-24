var http = require('http')
var fs = require('fs')


var myserver = http.createServer(function(req,res) {
    //console.log(req.method + ' ' + req.url)
    
    if(req.method == 'GET'){
        var u = req.url.split('/')
        var doc = u[u.length - 1]

        if(doc == 'doc2html.xsl'){
            fs.readFile('./data/' + doc, (erro, dados) =>{
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xsl;charset=utf-8'})
                    res.write(dados)
                } 
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.write('Erro na leitura da stylesheet...')
                } 
                res.end()
            })
        }
        else if (u[u.length - 2] == 'musicas') {
            fs.readFile('./data/doc' + doc + '.xml', (erro, dados) =>{
                if(!erro){
                    res.writeHead(200, {'Content-Type': 'text/xml;charset=utf-8'})
                    res.write(dados)
                } 
                else{
                    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
                    res.write('Documento não encontrado.')
                } 
                res.end()
            })
        }
        else {
            res.end('Erro: pedido não suportado [' + req.url + ']')
        }
    }
    else {
            res.end('Erro: método não suportado [' + req.method + ']')
    }
})

myserver.listen(3132)

console.log("Servidor à escuta na porta 3132...")