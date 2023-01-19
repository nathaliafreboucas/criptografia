 
let timestamp = new Date();
document.getElementById('info').innerHTML = timestamp.getFullYear();

function criptografarString(){
    let procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
    let procuraLetra = texto.value.search(procura); 
        
    if(procuraLetra != -1){
        alert ('Permitido apenas letras minúsculas e sem acentuação.Tente novamente!');
    }else{
        textoCriptografado = texto.value;
        textoCriptografado = textoCriptografado.replaceAll('e', 'enter').replaceAll('i', 'imes')
        .replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        
        document.getElementById('mostra-mensagem').innerHTML = textoCriptografado;
        texto.value = ""; 
    } 
        
}
            
function decriptografarString(){
    let procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
    let procuraLetra = texto.value.search(procura); 
        
    if(procuraLetra != -1){
        alert ('Permitido apenas letras minúsculas e sem acentuação.Tente novamente!');
    }else{
        
        textoDecriptografado = texto.value;
        textoDecriptografado = textoDecriptografado.replaceAll('enter', 'e').replaceAll('imes', 'i')
        .replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
        
        document.getElementById('mostra-mensagem').innerHTML = textoDecriptografado;
        texto.value = "";
    }    
                    
} 
        
function copiar(){
        
    let copia = document.getElementById('mostra-mensagem');
    let copiaValor = copia.textContent;

    if(copiaValor.replaceAll(" ","").length == 0){
       alert("Não há conteúdo para copiar! Primeiro digite uma mensagem.");
    }else{
        navigator.clipboard.writeText(copiaValor);
        alert('Copiado para a área de transferencia!');
    }        
}   
        
let texto = document.querySelector('textarea');
let botaoCopiar = document.getElementById('copy');
            
let botaoCriptografa = document.getElementById('encrypt');
let botaoDecriptografa = document.getElementById('decrypt');
            
botaoCriptografa.onclick = criptografarString;
botaoDecriptografa.onclick = decriptografarString;
botaoCopiar.onclick = copiar;