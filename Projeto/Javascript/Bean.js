//  Questão 01
function verificarRespostaQuestao1(escolha)
{
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Dagmar'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Vá para a próxima fase.`);
            return location = '../Bean/bean-questao02.html' 
        }
    }
    return location = '../Bean/gameover-bean.html'
}

//Questão 02
function verificarRespostaQuestao2(escolha)
{
    
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Mora'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Vá para a próxima fase.`);
            return location = '../Bean/bean-questao03.html' 
        }
    }
    return location = '../Bean/gameover-bean.html'
}

//Questão 03
function verificarRespostaQuestao3(escolha)
{
    let opcao = prompt("Digite sua resposta", escolha.toUpperCase())
    let tentativa = 2

    while (tentativa >1)
    {
        if (escolha.toLowerCase() != 'Satan'.toLowerCase()) 
        {
            tentativa--
            opcao = prompt(`Resposta inválida! Você tem mais ${tentativa} tentativa`)
            
        } 
        else {
            alert(`Resposta certa! Meus parabéns.`);
            return location = '../Bean/winner-bean.html' 
        }
    }
    return location = '../Bean/gameover-bean.html'
}

