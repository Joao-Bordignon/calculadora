function minhafuncao() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var opcao = document.getElementById("opcao").value;

    if (opcao==1){
        var n1 = parseInt(n1)
        var n2 = parseInt(n2)
        var resposta = (n1+n2);
        document.getElementById("resultado").innerHTML = resposta;
    } else if (opcao==2){
        var resposta = (n1*n2);
        document.getElementById("resultado").innerHTML = resposta;
    } else if (opcao==3){
        var resposta = (n1/n2);
        document.getElementById("resultado").innerHTML = resposta;
    } else {
        var resposta = (n1-n2);
        document.getElementById("resultado").innerHTML = resposta;
    }
}
