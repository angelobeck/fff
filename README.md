# fff

Fast Front Framework - A JS engine to build content without backend

Propomos aqui um framework simples através do qual se possa gerar e navegar pelo conteúdo sem a necessidade de um backend.

Enquanto a estrutura de aplicações e roteamento é inspirada no Portal Ecolabore, o modelo de componentes foi inspirado nos Lightning Web Components (LWC) da Salesforce.

Porém, é importante notar que os componentes propostos aqui não oferecem nenhum grau de isolamento, nem por parte do HTML, nem no CSS nem nas APIs dos mesmos, de modo que o programador precisa ter a atenção redobrada quando nomeia variáveis, cria classes CSS, invoca APIs de componentes ou dispara eventos.

Por sorte, todo o sistema é enxuto o bastante para que o programador compreenda seu funcionamento e evite abusos.

## Navegação

O sistema atual de navegação e roteamento se baseia na parte hash da URL, usando o evento "hashchange" para disparar a renderização do conteúdo. É possível, portanto, gerar links verdadeiros e navegar pelo histórico do navegador.

## Roteamento

Todas as aplicações estão dispostas em uma "árvore". O endereço após o hash ("#") é dividido em níveis quebrando o endereço pelas barras ("/"). 

Para cada nível, o roteador percorre a árvore de aplicações, perguntando com isChild() qual aplicação se responsabiliza por atender aquele nome. Ao encontrá-la, o roteamento segue para o próximo nível, perguntando a cada aplicação filha qual poderá se responsabilizar pelo próximo nome.

Embora a maneira com a qual as classes e símbolos se relacionam não pareça intuitiva à primeira vista, este sistema é muito eficiente e permite uma grande flexibilidade.

## Despachar a aplicação

Cada aplicação tem o direito de redefinir os módulos do layout para, por exemplo, gerar formulários, listas, tabuleiros de jogos ou qualquer outra coisa.

Após a aplicação ser despachada, a página é atualizada, inserindo módulos, substituindo, atualizando ou removendo outros.

## Módulos e componentes

Módulos e componentes têm a mesma estrutura de funcionamento: uma classe que possui um template em HTML e está livre para implementar todas as regras de negócio que necessitar. A diferença está na maneira de serem invocados por outros componentes. Enquanto os componentes são invocados pelos nomes registrados em "componentsList", e são imutáveis, os módulos possuem um caráter dinâmico, uma vez que a aplicação poderá redefinir qual será o módulo do formulário ou do conteúdo.

## Renderização

Gostaríamos muito de que esta parte fosse mais simples. Porém, acreditamos que poucos sentirão a necessidade de alterar esta estrutura. Ela é responsável por tokenizar os modelos HTML, gerar uma árvore de elementos e atributos e por fim, percorrer esta árvore para gerar, atualizar ou remover os elementos do DOM.

É aqui que os eventos são "pendurados" nos elementos HTML, tomando o cuidado de verificar se as classes dos componentes afetados sofreram alterações. Caso alguma modificação seja observada, então um refresh ocorrerá automaticamente.

O renderizador é bastante estúpido e reconhece apenas algumas pequenas coisas:

- Tags HTML `<tag></tag>` ou `<tag />` para tags que não possuam descendentes.
- Atributos estáticos como `atributo="valor"`.
- Atributos dinâmicos como `atributo={valor}`.
- Conteúdo está tico delimitado por aspas duplas ou aspas simples: |`"Olá mundo"` ou `'Olá mundo'`.
- Conteúdo dinâmico como `{propriedade}`.

Alguns atributos especiais podem ser utilizados em certas condições:

- Atributos iniciados por `on*` serão considerados eventos como em `<button onclick={clickHandler}>...`, e você pode receber o evento em sua classe como em `clickHandler(event){...`.}
- `if:true` ou `if:false` podem construir ou destruir qualquer tipo de tag do conteúdo, como `<p if:true={showParagraph}>...`. Basta você declarar e manipular uma propriedade da sua classe como em `showParagraph = true;`.
- `wire:element` liga o elemento do DOM diretamente a uma variável, como em `<input wire:element={inputElement}>...`. Basta utilizá-lo em sua classe como em `inputElement.focus();`.
- `for:each`e `for:item` permitem percorrer arrays de elementos, repetindo um bloco de código quantas vezes for necessário.

Algumas tags especiais podem ser utilizadas:

- `<template>` não gera nenhum elemento HTML, mas pode incluir condicionais ou loops.
- `<slot />` irá inserir o conteúdo de um componente pai.
- `<mod name="title" />` insere um módulo.
- `<my-component />` insere um componente registrado em `componentsLists.myComponent = MyComponentClass`.

