document.querySelector(`input#botao`).addEventListener(`click`, contar)
function contar(){
    var inicio = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpas').value)
    var res = document.getElementById('res')
    if (inicio == 0 || fim == 0 || passo == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        for (inicio; inicio <= fim; inicio += passo){
            res.innerHTML += `${inicio} 👉`
            }
        res.innerHTML += `🏁`
    }
    
}