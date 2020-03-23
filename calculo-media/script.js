function mediana(){

    let nota1 = document.getElementById('n1')
    let nota2 = document.getElementById('n2')
    let nota3 = document.getElementById('n3')
    let nota4 = document.getElementById('n4')

    let resposta = document.getElementById('res')

    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let n3 = Number(nota3.value)
    let n4 = Number(nota4.value)

    let resultado = (n1 + n2 + n3 + n4)/4

    if (resultado >= 7){
        resposta.innerHTML = ('Aluno APROVADO, PARABÉNS, Sua média foi: '+resultado)
    }else if (resultado < 7 && resultado >= 5){
        resposta.innerHTML = ('Aluno esta de Recuperação, Sua média foi: '+resultado)
    }else{
        resposta.innerHTML = ('Aluno Reprovado, sua média é: '+resultado)
    }

}