const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas: [
            {   
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 1"
            }
        ]
        
    },
    {
        enunciado: "Você acha que a IA pode substituir completamente os empregos humanos no futuro?",
        alternativas: [
            {   
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]
    },
    {
        enunciado: "Você acredita que a IA pode ajudar a resolver problemas ambientais?",
        alternativas:[
            {   
                texto: "Sim",
                afirmativa: "Afirmativa da alternativa 1"
            },
            {
                texto: "Não",
                afirmativa: "Afirmativa da alternativa 2"
            }
        ]    
    }        
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",()=> respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);    
        }
    }
    function respostaSelecionada(opcaoSelcionada){   
            const afirmativa = opcaoSelcionada.afirmativa;
            respostas = afirmativa; respostas = respostas+afirmativa;
            respostas += afirmativa + " ";
            posicao++;
            mostraPergunta();

    }
    function mostraResultado(){
        caixaPergunta.textContent = "Em 25 anos...";
        textoResultado.textContent = respostas;
        caixaAlternativa.textContent = " ";
    }
 mostraPergunta();