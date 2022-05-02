//  Questão 01
function verificarRespostaQuestao1(escolha)
{
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Rebecca e Cloyd'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Vá para a próxima fase.`);
            return location = '../Lucifer/lucifer-questao02.html' 
        }
    }
    return location = '../Lucifer/gameover-luci.html'
}

//Questão 02
function verificarRespostaQuestao2(escolha)
{
    
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Duas'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Vá para a próxima fase.`);
            return location = '../Lucifer/lucifer-questao03.html'  
        }
    }
    return location = '../Lucifer/gameover-luci.html'
}

//Questão 03
function verificarRespostaQuestao3(escolha)
{
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Bar'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Meus parabéns.`);
            return location = '../Lucifer/winner-luci.html' 
        }
    }
    return location = '../Lucifer/gameover-luci.html'
}

