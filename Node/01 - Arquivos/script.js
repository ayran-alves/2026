const fs = require('fs')
fs.writeFileSync(
    "mensagem.txt",
    "crie um bloco de notas com  node.js"
)
console.log("Arquivo Criado Com Sucesso!")
/* Crie um bloco de notas com seu nome, turma, curso e filme favorito */

const Pessoa = {
 nome : "Ayran",
 idade : "17",
 cidade: "Itaquaquecetuba"
}
fs.writeFileSync(
    "Pessoa.json",
    JSON.stringify(Pessoa)
)
console.log("json criado com Sucesso")

/* Crie um arquivo JSON chamado "informações" com seu nome, idade, telefone e email */
const arquivo = {
    nome : "Ayran",
    idade: "17",
    telefone: "11935856218",
    email: "ayranalves@gmail.com"
}
fs.writeFileSync(
    "arquivo.json",
    JSON.stringify(arquivo)
)
console.log("json criado com sucesso")

//Importar partes especificas da biblioteca word

const {
    Document, //criar o word
    Packer, //transformar o documento em word
    Paragraph, //cria parágrafos
    TextRun //Adiconar textos
} = require("docx")

//criando um documento do word
const doc = new Document ({
    //pagina -> seção -> paragrafo -> textos
sections: [
        {// configurar da seção (margem, tamanho da pagina)
       properties: {},
            //filhos da secão - funciona como body
            //textos, imagens, tabelas, etc
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Arquivo Word")
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})

Packer.toBuffer(doc)
.then((buffer) => { 
    fs.writeFileSync (
        "relatorio.docx",
        buffer
    )
    console.log("Arquivo Word criado com sucesso!")
})