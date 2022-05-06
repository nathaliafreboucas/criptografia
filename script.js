 
var timestamp = new Date();
document.getElementById('info').innerHTML = timestamp.getFullYear();

function criptografarString(){
    var procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
    var procuraLetra = texto.value.search(procura); 
        
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
    var procura = /[A-Z&&áàâãä-úùũûü&&Çç]/;
    var procuraLetra = texto.value.search(procura); 
        
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
        
    var copia = document.getElementById('mostra-mensagem');
        
    navigator.clipboard.writeText(copia.textContent);
    alert('Copiado para a área de transferencia!')
       
}   
        
var textoCriptografado;
var textoDecriptografado;
var texto = document.querySelector('textarea');
var botaoCopiar = document.getElementById('copy');
            
var botaoCriptografa = document.getElementById('encrypt');
var botaoDecriptografa = document.getElementById('decrypt');
            
botaoCriptografa.onclick = criptografarString;
botaoDecriptografa.onclick = decriptografarString;
botaoCopiar.onclick = copiar;