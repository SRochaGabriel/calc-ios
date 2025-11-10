// ------------- ACESSANDO ELEMENTOS DO DOM E DEFININDO VARIÁVEIS -------------
// Acessando o input com ID 'tela'
const tela = document.getElementById('tela');

// -------------------------- DEFININDO FUNÇÕES --------------------------
// Definindo a função que exibe na 'tela' os valores dos botões clicados, que são recebidos via parâmetro
function adicionarValor(valor) {
    tela.value += valor;
}

// Definindo a função que apaga todos os valores da tela ao clique do botão 'C'
function limparTela() {
    tela.value = '';
}

// Definindo a função que apaga SOMENTE o último valor sendo apresentado na tela
function apagarUltimo() {
    // Aqui, 'tela.value' recebe o valor de 'tela.value' com método slice que inicia no primeiro elemento de 'tela.value' (0) e vai até o penúltimo elemento (-1). Ou seja, retorna o valor que estava em 'tela' SEM o último elemento.
    tela.value = tela.value.slice(0, -1);
}

// Função que realiza os cálculos
function calcularResultado() {
    // SOBRE TRY E CATCH: https://www.w3schools.com/java/java_try_catch.asp
    // O 'try' define um bloco de código que o programa TENTARÁ executar
    try {
        // 'tela.value' recebe o valor de 'tela.value' executado na função EVAL. Essa função recebe uma string e, caso seja uma expressão matemática, por exemplo, executa a expressão e retorna o valor. Caso a string seja uma declaração javascript, por exemplo um console.log(), ela executa essa declaração (o que representa um risco ao programa, já que o usuário pode inserir código a ser executado na sua aplicação).
        // SOBRE EVAL: https://www.w3schools.com/jsreF/jsref_eval.asp
        tela.value = eval(tela.value);
    } catch (erro) { // Caso ocorra um erro na execução do TRY, o 'catch' captura o erro e executa o bloco de instruções definido entre chaves
        tela.value = 'Erro';
    }
}

// ACIONANDO UM EVENTO DENTRO DO JAVASCRIPT por meio de 'addEventListener'
// Aqui, definimos um event listener para qualquer digitação no teclado ocorrida no 'document' por meio do evento 'keydown'. Quando o evento é realizado, uma função sem nome que recebe o parâmetro 'evento' é executada
document.addEventListener('keydown', function(evento) {
    // Definindo a variável que armazena o valor da tecla digitada por meio de 'evento.key'. Por exemplo: "1", "+", "Enter", "Backspace"
    const tecla = evento.key;

    // Aqui, verificamos se o valor da variável 'tecla' está incluido na string que define os possíveis válidos por meio da função 'includes'
    // SOBRE INCLUDES: https://www.w3schools.com/jsref/jsref_includes.asp
    if ("0123456789./*-+".includes(tecla)) {
        // Caso o IF retorne true, chamamos a função 'adicionarValor' passando o valor armazenado em 'tecla' como parâmetro
        adicionarValor(tecla);
    }
    
    // Aqui, definimos que se a tecla digitada foi o backspace, chamamos a função que apaga o último número
    if (tecla === 'Backspace') {
        apagarUltimo();
    }
    
    // Aqui, definimos que se a tecla digitada foi o enter, chamamos a função que realiza o cálculo
    if (tecla === 'Enter' || tecla === '=') {
        calcularResultado();
    }
    
    // Aqui, definimos que se a tecla digitada foi o esc, chamamos a função que apaga todo o valor da tela
    if (tecla === 'Escape') {
        limparTela();
    }
})