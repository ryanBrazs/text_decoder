<h1 align="center"> Decodificador de Texto - Alura Challenges Oracle ONE </h1>

<p align="center">
    <img width="517" alt="logo" src="https://github.com/ryanBrazs/text_decoder/assets/164666840/9dc5d78e-02f9-4e18-b094-20ac85bb482e">
</p>

## Sobre o desafio
### Descrição

<p>Este projeto é um desafio proposto pelo programa ONE (Oracle Next Education) da Oracle em parceria com a Alura, que visa criar um decodificador de texto com JavaScript para a lógica de decodificação, HTML para a estrutura da página e CSS para a estilização. seu obejtivo é criptografar um texto e depois descriptografar para o texto original.
</p>

<p>Durante duas semanas, trabalhamos nessa aplicação, resultando em um sistema que possibilita trocar mensagens secretas com outras pessoas que conheçam o segredo da criptografia utilizada.</p>

> As "chaves" de criptografia que utilizamos são:
> - A letra "e" é convertida para "enter"
> - A letra "i" é convertida para "imes"
> - A letra "a" é convertida para "ai"
> - A letra "o" é convertida para "ober"
> - A letra "u" é convertida para "ufat"

Por exemplo:
```javascript
"gato" => "gaitober"
"gaitober" => "gato"
```

### Requisitos
Alguns requisitos foram propostos para garantir o funcionamento adequado do sistema. Decidi dividi-los em duas categorias: os requisitos __funcionais__, que descrevem as funcionalidades específicas que o sistema deve fornecer, ou seja, o que o sistema deve fazer; e os requisitos __não funcionais__, que descrevem as qualidades, restrições ou condições de implementação do sistema, como desempenho, segurança e usabilidade, ou seja, como o sistema deve ser.
> Funcionais:
> - Deve ser possível converter uma palavra para a versão criptografada.
> - Deve ser possível retornar uma palavra criptografada para a versão original.
> - A página deve ter campos para inserção do texto a ser criptografado ou descriptografado.
> - A pessoa usuária deve poder escolher entre as opções de criptografar ou descriptografar.
> - O resultado deve ser exibido na tela.
> - Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do `ctrl+C` ou da opção "copiar" do menu dos aplicativos.

> Não funcionais:
> - Deve funcionar apenas com letras minúsculas e sem caracteres especiais.
> - Não devem ser utilizadas letras com acentos nem caracteres especiais.

## Designs do Projeto
A Alura nos forneceu um design inicial por meio do Figma, entretanto, foi ressaltado que não era obrigatório seguir o mesmo padrão. Decidi, então, desenvolver minha própria interface, buscando aprimorar minhas habilidades no Figma, HTML e CSS.

### Design Fornecido pela Alura Challenge
<img src="https://github.com/ryanBrazs/text_decoder/assets/164666840/fb08e949-4642-4161-914d-7c6a06c5aadb">

### Design criado por mim
<img src="https://github.com/ryanBrazs/text_decoder/assets/164666840/a13398aa-39d4-4519-860c-82865b00a297">

Confira o layout detalhado deste projeto através [desse link](https://www.figma.com/file/tL3SICWEM3825mjVsiFjpT/Alura-Challenge---Desafio-1?type=design&node-id=0%3A1&mode=dev&t=X216FnOYy4dZR243-1). É necessário possuir uma conta no [Figma](https://figma.com) para acessá-lo.

## Visualização prévia do projeto em execução.
<img src="https://github.com/ryanBrazs/text_decoder/assets/164666840/a117d9dd-bc7d-4894-bc51-bba266b6a0e1">

[Acesse o projeto online através desse link.](https://ryanbrazs.github.io/text_decoder/)

## Início rápido
1. Clone o repositório para sua máquina local:
   
    ```bash selectable
    git clone https://github.com/ryanBrazs/text_decoder.git
    ```
3. Navegue até o diretório do projeto:
   
    ```bash
    cd text_decoder
    ```
5. Abra o arquivo __index.html__ em um navegador de sua preferência.

## Metodologias

 #### BEM
 O BEM, abreviação de Block Element Modifier (Bloco Elemento Modificador), é uma metodologia de nomeclatura de classes CSS. Ela estrutura o código em blocos, elementos e modificadores, tornando-o mais escalável e reutilizavel em diversos tipos de projetos.
 
 - __Bloco__ representa um componente independente e autossuficiente de uma aplicação, é uma parte de código que pode ser reutilizada e que geralmente contém elementos e/ou modificadores dentro dele.

 - __Elemento__ é uma parte de um bloco que não tem significado ou uso independente fora do contexto do bloco ao qual pertence. Em outra palavras, um elemento é uma parte de um bloco que tem relação semântica com o bloco principal.

    ```Html
    <nav class="menu"> <!-- Bloco -->
        <ul class="menu__list"> <!-- Elemento -->
            <li class="menu__item"></li>
            <li class="menu__item"></li>
        </ul>
    </nav>
    ```

 - __Modificador__ é uma variante ou extensão de um bloco ou elemento. Ele altera a aparência ou comportamento do bloco ou elemento ao qual está vinculado, permitindo criar diferentes estilos ou funcionalidades com base em um componente básico.

    ```Html
    <nav class="menu"> 
        <ul class="menu__list"> 
            <li class="menu__item"></li>
            <li class="menu__item menu__item--highlighted"></li> <!-- Modificador -->
        </ul>
    </nav>
    ```
__Por que usar dois hífens e dois underlines?__ Você pode considerar isso desnecessário, pensando que um único hífen ou underline seria suficiente. No entanto, o BEM é uma convenção de nomenclatura amplamente reconhecida em todo o mundo. A utilização dos dois hífens e underlines é o que permite que um desenvolvedor identifique rapidamente que um projeto está seguindo o padrão BEM.

```Html
    <!-- Exemplo usando a metodologia BEM, mas sem seguir seus padrões -->
    <nav class="menu"> 
        <ul class="menu_list"> 
            <li class="menu_item"></li>
            <li class="menu_item menu_item-highlighted"></li> 
        </ul>
    </nav>

    <!-- Exemplo usando a metodologia BEM, seguindo seus padrões -->
    <nav class="menu"> 
        <ul class="menu__list"> 
            <li class="menu__item"></li>
            <li class="menu__item menu__item--highlighted"></li> 
        </ul>
    </nav>
```

Note que ausência dos "__" e "--" torna difícil distinguir entre elementos e modificadores.

__Referência:__ https://desenvolvimentoparaweb.com/css/bem/

## Tecnologias
<div style="display: flex;">
    <img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
    <img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />
    <img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
    <img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
</div>

---
<p align="center">Developed by Ryan Braz 🚀</p>