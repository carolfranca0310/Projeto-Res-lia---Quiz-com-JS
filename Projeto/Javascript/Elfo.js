//  Questão 01
function verificarRespostaQuestao1(escolha)
{
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Bean'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Vá para a próxima fase.`);
            return location = '../Elfo/elfo-questao02.html' 
        }
    }
    return location = '../Elfo/gameover-elfo.html'
}

//Questão 02
function verificarRespostaQuestao2(escolha)
{
    
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Se livrar do príncipe Merquímio'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Vá para a próxima fase.`);
            return location = '../Elfo/elfo-questao03.html' 
        }
    }
    return location = '../Elfo/gameover-elfo.html'
}

//Questão 03
function verificarRespostaQuestao3(escolha)
{
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Igreja'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Meus parabéns.`);
            return location = '../Elfo/winner-elfo.html' 
        }
    }
    return location = '../Elfo/gameover-elfo.html'
}

