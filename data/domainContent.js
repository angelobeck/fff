
var data = data || {};

data.domainContent = [
{
name: "wcag",
parentName: "",
title: "WCAG",
description: "Diretrizes de acessibilidade para conteúdos Web"
},
{
name: "-index",
title: "Home"
},
{
name: "-default",
title: "Página não encontrada"
},
{
name: "tutorial",
app: "section",
parentName: "",
index: 1,
title: "Tutorial"
},
{
name: "tag",
app: "section",
parentName: "",
index: 2,
title: "Tags"
},
{
name: "attribute",
app: "section",
parentName: "",
index: 3,
title: "Atributos"
},
{
name: "tag_comment",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference comment",
title: "<!--...-->",
description: "Delimita um comentário",
content: ""
},
{
name: "tag_doctype",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference doctype",
title: "<!DOCTYPE >",
description: "Define o tipo de documento",
content: ""
},
{
name: "tag_a",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference a",
title: "<a>",
description: "Define um hyperlink",
content: ""
},
{
name: "tag_abbr",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference abbr",
title: "<abbr>",
description: "Define uma abreviação ou um acrônimo",
content: ""
},
{
name: "tag_address",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference address",
title: "<address>",
description: "Define informações de contato para o autor de um documento",
content: ""
},
{
name: "tag_area",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference area",
title: "<area>",
description: "Define uma área dentro de um mapa de imagem",
content: ""
},
{
name: "tag_article",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference article",
title: "<article>",
description: "Delimita a região de um artigo",
content: ""
},
{
name: "tag_aside",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference aside",
title: "<aside>",
description: "Delimita a região de um conteúdo à parte",
content: ""
},
{
name: "tag_audio",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference audio",
title: "<audio>",
description: "Define um conteúdo de áudio embutido",
content: ""
},
{
name: "tag_b",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference b",
title: "<b>",
description: "Define um texto em negrito",
content: ""
},
{
name: "tag_base",
parentName: "tag",
linked: "tutorial_headers",
keywords: "html tag reference base",
title: "<base>",
description: "Especifica uma URL base para todas as URLs relativas",
content: ""
},
{
name: "tag_bdi",
parentName: "tag",
linked: "tutorial_internationalization",
keywords: "html tag reference bdi",
title: "<bdi>",
description: "Isola uma parte do texto que poderia ser formatado em uma direção diferente em relação ao texto circundante",
content: ""
},
{
name: "tag_bdo",
parentName: "tag",
linked: "tutorial_internationalization",
keywords: "html tag reference bdo",
title: "<bdo>",
description: "Sobrepõe a direção do texto",
content: ""
},
{
name: "tag_blockquote",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference blockquote",
title: "<blockquote>",
description: "Define uma citação de outra fonte",
content: ""
},
{
name: "tag_body",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference body",
title: "<body>",
description: "Define o corpo do documento",
content: ""
},
{
name: "tag_br",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference br",
title: "<br>",
description: "Define uma quebra de linha",
content: ""
},
{
name: "tag_button",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference button",
title: "<button>",
description: "Define um botão clicável",
content: ""
},
{
name: "tag_canvas",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference canvas",
title: "<canvas>",
description: "Usado para desenhar gráficos dinamicamente através de javascript",
content: ""
},
{
name: "tag_caption",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference caption",
title: "<caption>",
description: "Define a legenda para uma tabela",
content: ""
},
{
name: "tag_cite",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference cite",
title: "<cite>",
description: "Define o título de um trabalho sendo citado",
content: ""
},
{
name: "tag_code",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference code",
title: "<code>",
description: "Define um bloco de código",
content: ""
},
{
name: "tag_col",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference col",
title: "<col>",
description: "Especifica propriedades para cada coluna em um elemento colgroup",
content: ""
},
{
name: "tag_colgroup",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference colgroup",
title: "<colgroup>",
description: "Especifica um grupo de uma ou mais colunas a fim de formatá-las em uma tabela",
content: ""
},
{
name: "tag_data",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference data",
title: "<data>",
description: "Fornece um código relacionado ao conteúdo",
content: ""
},
{
name: "tag_datalist",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference datalist",
title: "<datalist>",
description: "Fornece uma lista de itens predefinidos para um controle de entrada",
content: ""
},
{
name: "tag_dd",
parentName: "tag",
linked: "tutorial_text_structures",
keywords: "html tag reference dd",
title: "<dd>",
description: "Define um termo/descrição em uma lista de definições",
content: ""
},
{
name: "tag_del",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference del",
title: "<del>",
description: "Define texto removido do documento",
content: ""
},
{
name: "tag_details",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference details",
title: "<details>",
description: "Define detalhes adicionais que podem ser exibidos ou ocultados",
content: ""
},
{
name: "tag_dfn",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference dfn",
title: "<dfn>",
description: "Especifica um termo que será definido ao longo do conteúdo",
content: ""
},
{
name: "tag_dialog",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference dialog",
title: "<dialog>",
description: "Define uma janela ou caixa de diálogo",
content: ""
},
{
name: "tag_div",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference div",
title: "<div>",
description: "Define uma seção do documento",
content: ""
},
{
name: "tag_dl",
parentName: "tag",
linked: "tutorial_text_structures",
keywords: "html tag reference dl",
title: "<dl>",
description: "Define uma lista de definições",
content: ""
},
{
name: "tag_dt",
parentName: "tag",
linked: "tutorial_text_structures",
keywords: "html tag reference dt",
title: "<dt>",
description: "Define um termo em uma lista de definições",
content: ""
},
{
name: "tag_em",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference em",
title: "<em>",
description: "Define um texto enfatizado",
content: ""
},
{
name: "tag_embed",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference embed",
title: "<embed>",
description: "Define um recipiente para uma aplicação externa",
content: ""
},
{
name: "tag_fieldset",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference fieldset",
title: "<fieldset>",
description: "Agrupa campos de um formulário",
content: ""
},
{
name: "tag_figcaption",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference figcaption",
title: "<figcaption>",
description: "Define legenda para um elemento figure",
content: ""
},
{
name: "tag_figure",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference figure",
title: "<figure>",
description: "Especifica um conteúdo independente",
content: ""
},
{
name: "tag_footer",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference footer",
title: "<footer>",
description: "Define uma área de rodapé para o documento ou para uma seção",
content: ""
},
{
name: "tag_form",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference form",
title: "<form>",
description: "Delimita um formulário",
content: ""
},
{
name: "tag_h1",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference h1 h2 h3 h4 h5 h6",
title: "<h1 to h6>",
description: "Define cabeçalhos",
content: ""
},
{
name: "tag_head",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference head",
title: "<head>",
description: "Contém metadata/informações sobre o documento",
content: ""
},
{
name: "tag_header",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference header",
title: "<header>",
description: "Define a região de cabeçalho do documento",
content: ""
},
{
name: "tag_hr",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference hr",
title: "<hr>",
description: "Cria um separador temático",
content: ""
},
{
name: "tag_html",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference html",
title: "<html>",
description: "Define a raiz do documento HTML",
content: ""
},
{
name: "tag_i",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference i",
title: "<i>",
description: "Delimita uma porção de texto em outro tom",
content: ""
},
{
name: "tag_iframe",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference iframe",
title: "<iframe>",
description: "Define um quadro/janela com conteúdo externo",
content: ""
},
{
name: "tag_img",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference img",
title: "<img>",
description: "Define uma imagem",
content: ""
},
{
name: "tag_input",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference input",
title: "<input>",
description: "Define um controle de entrada",
content: ""
},
{
name: "tag_ins",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference ins",
title: "<ins>",
description: "Delimita texto inserido no documento",
content: ""
},
{
name: "tag_kbd",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference kbd",
title: "<kbd>",
description: "Define texto inserido por teclado",
content: ""
},
{
name: "tag_label",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference label",
title: "<label>",
description: "Define a legenda para um controle de formulário (input, select, textarea)",
content: ""
},
{
name: "tag_legend",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference legend",
title: "<legend>",
description: "Define uma legenda para um elemento fieldset",
content: ""
},
{
name: "tag_li",
parentName: "tag",
linked: "tutorial_text_structures",
keywords: "html tag reference li",
title: "<li>",
description: "Define um item de lista (ul, ol)",
content: ""
},
{
name: "tag_link",
parentName: "tag",
linked: "tutorial_headers",
keywords: "html tag reference link",
title: "<link>",
description: "Define conteúdos externos relacionados, utilizado normalmente para ligar folhas de estilo",
content: ""
},
{
name: "tag_main",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference main",
title: "<main>",
description: "Especifica a região principal do documento",
content: ""
},
{
name: "tag_map",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference map",
title: "<map>",
description: "Define um mapa de imagem",
content: ""
},
{
name: "tag_mark",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference mark",
title: "<mark>",
description: "Define texto marcado ou realçado",
content: ""
},
{
name: "tag_meta",
parentName: "tag",
linked: "tutorial_headers",
keywords: "html tag reference meta",
title: "<meta>",
description: "Define algum metadado sobre o documento",
content: ""
},
{
name: "tag_meter",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference meter",
title: "<meter>",
description: "Define um medidor",
content: ""
},
{
name: "tag_nav",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference nav",
title: "<nav>",
description: "Define uma região de navegação",
content: ""
},
{
name: "tag_noscript",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference noscript",
title: "<noscript>",
description: "Define conteúdo alternativo para navegadores que não executam scripts",
content: ""
},
{
name: "tag_object",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference object",
title: "<object>",
description: "Define um recipiente para aplicações externas",
content: ""
},
{
name: "tag_ol",
parentName: "tag",
linked: "tutorial_text_structures",
keywords: "html tag reference ol",
title: "<ol>",
description: "Define uma lista ordenada",
content: ""
},
{
name: "tag_optgroup",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference optgroup",
title: "<optgroup>",
description: "Define um grupo de opções para uma lista de expandir",
content: ""
},
{
name: "tag_option",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference option",
title: "<option>",
description: "Define uma opção para uma lista de expandir (dropdown, select)an option in a drop-down list",
content: ""
},
{
name: "tag_output",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference output",
title: "<output>tutorial_blocks",
description: "Define o resultado de um cálculo ou saída de um programa",
content: ""
},
{
name: "tag_p",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference p",
title: "<p>",
description: "Define um parágrafo",
content: ""
},
{
name: "tag_param",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference param",
title: "<param>",
description: "Define um parâmetro para um objeto",
content: ""
},
{
name: "tag_picture",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference picture",
title: "<picture>",
description: "Define um container para um grupo de imagens",
content: ""
},
{
name: "tag_pre",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference pre",
title: "<pre>",
description: "Define texto preformatado",
content: ""
},
{
name: "tag_progress",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference progress",
title: "<progress>",
description: "Representa o progresso de uma tarefa",
content: ""
},
{
name: "tag_q",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference q",
title: "<q>",
description: "Define uma citação curta",
content: ""
},
{
name: "tag_rp",
parentName: "tag",
linked: "tutorial_internationalization",
keywords: "html tag reference rp",
title: "<rp>",
description: "Define algo a apresentar em navegadores que não suportam ruby",
content: ""
},
{
name: "tag_rt",
parentName: "tag",
linked: "tutorial_internationalization",
keywords: "html tag reference rt",
title: "<rt>",
description: "Define uma explicação ou pronúncia para um ideograma",
content: ""
},
{
name: "tag_ruby",
parentName: "tag",
linked: "tutorial_internationalization",
keywords: "html tag reference ruby",
title: "<ruby>",
description: "Defines a ruby annotation (for East Asian typography)",
content: ""
},
{
name: "tag_s",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference s",
title: "<s>",
description: "Define texto que não é mais válido",
content: ""
},
{
name: "tag_samp",
parentName: "tag",
linked: "tutorial_blocks",
keywords: "html tag reference samp",
title: "<samp>",
description: "Define exemplo de saída de um programa",
content: ""
},
{
name: "tag_script",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference script",
title: "<script>",
description: "Define um script a ser executado no navegador",
content: ""
},
{
name: "tag_section",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference section",
title: "<section>",
description: "Define uma seção do documento",
content: ""
},
{
name: "tag_select",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference select",
title: "<select>",
description: "Define uma lista de expandir",
content: ""
},
{
name: "tag_small",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference small",
title: "<small>",
description: "Define texto pequeno",
content: ""
},
{
name: "tag_source",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference source",
title: "<source>",
description: "Define múltiplas fontes para elementos de mídia (video e audio)",
content: ""
},
{
name: "tag_span",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference span",
title: "<span>",
description: "Define uma seção do documento",
content: ""
},
{
name: "tag_strong",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference strong",
title: "<strong>",
description: "Define texto importante",
content: ""
},
{
name: "tag_style",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference style",
title: "<style>",
description: "Define folha de estilo para o documento",
content: ""
},
{
name: "tag_sub",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference sub",
title: "<sub>",
description: "Define texto subscrito",
content: ""
},
{
name: "tag_summary",
parentName: "tag",
linked: "tutorial_regions",
keywords: "html tag reference summary",
title: "<summary>",
description: "Define um cabeçalho visível para um elemento details",
content: ""
},
{
name: "tag_sup",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference sup",
title: "<sup>",
description: "Define texto superescrito",
content: ""
},
{
name: "tag_svg",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference svg",
title: "<svg>",
description: "Insere uma imagem SVG",
content: ""
},
{
name: "tag_table",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference table",
title: "<table>",
description: "Define uma tabela",
content: ""
},
{
name: "tag_tbody",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference tbody",
title: "<tbody>",
description: "Agrupa o corpo da tabela",
content: ""
},
{
name: "tag_td",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference td",
title: "<td>",
description: "Define uma célula da tabela",
content: ""
},
{
name: "tag_template",
parentName: "tag",
linked: "tutorial_structure",
keywords: "html tag reference template",
title: "<template>",
description: "Define um bloco de documento que serve como modelo e que inicialmente não é visível ao usuário",
content: ""
},
{
name: "tag_textarea",
parentName: "tag",
linked: "tutorial_forms",
keywords: "html tag reference textarea",
title: "<textarea>",
description: "Define uma área para edição de texto multi-linha",
content: ""
},
{
name: "tag_tfoot",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference tfoot",
title: "<tfoot>",
description: "Agrupa elementos de rodapé da tabela",
content: ""
},
{
name: "tag_th",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference th",
title: "<th>",
description: "Define uma célula de cabeçalho de uma tabela",
content: ""
},
{
name: "tag_thead",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference thead",
title: "<thead>",
description: "Agrupa os elementos de cabeçalhos da tabela",
content: ""
},
{
name: "tag_time",
parentName: "tag",
linked: "tutorial_linking",
keywords: "html tag reference time",
title: "<time>",
description: "Define uma data ou data e hora",
content: ""
},
{
name: "tag_title",
parentName: "tag",
linked: "tutorial_headers",
keywords: "html tag reference title",
title: "<title>",
description: "Define um título para o documento - normalmente apresentado na janela do navegador",
content: ""
},
{
name: "tag_tr",
parentName: "tag",
linked: "tutorial_tables",
keywords: "html tag reference tr",
title: "<tr>",
description: "Define uma linha da tabela",
content: ""
},
{
name: "tag_track",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference track",
title: "<track>",
description: "Define trilhas de texto (legenda) para áudio ou vídeo",
content: ""
},
{
name: "tag_u",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference u",
title: "<u>",
description: "Define texto desarticulado, formatado de maneira diversa do restante",
content: ""
},
{
name: "tag_ul",
parentName: "tag",
linked: "tutorial_text_structures",
keywords: "html tag reference ul",
title: "<ul>",
description: "Define uma lista não ordenada",
content: ""
},
{
name: "tag_var",
parentName: "tag",
linked: "tutorial_headers",
keywords: "html tag reference var",
title: "<var>",
description: "Define uma variável",
content: ""
},
{
name: "tag_video",
parentName: "tag",
linked: "tutorial_multimedia",
keywords: "html tag reference video",
title: "<video>",
description: "Define um vídeo embutido",
content: ""
},
{
name: "tag_wbr",
parentName: "tag",
linked: "tutorial_inline",
keywords: "html tag reference wbr",
title: "<wbr>",
description: "Define uma possível quebra de linha",
content: ""
},
{
name: "attribute_accept",
parentName: "attribute",
linked: "tag_input",
keywords: "html attribute reference accept",
title: "accept",
description: "Especifica quais tipos de arquivos são aceitos pelo servidor (somente para type=&quot;file&quot;)",
content: ""
},
{
name: "attribute_accept-charset",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference accept-charset",
title: "accept-charset",
description: "Especifica qual conjunto de caracteres deve ser utilizado ao submeter os dados do formulário",
content: ""
},
{
name: "attribute_accesskey",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference accesskey",
title: "accesskey",
description: "Define uma tecla de atalho para focalizar ou acionar um elemento",
content: ""
},
{
name: "attribute_action",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference action",
title: "action",
description: "Define o endereço para onde os dados do formulário devem ser enviados",
content: ""
},
{
name: "attribute_alt",
parentName: "attribute",
linked: "tag_area tag_img tag_input",
keywords: "html attribute reference alt",
title: "alt",
description: "Fornece uma legenda alternativa à imagem",
content: ""
},
{
name: "attribute_async",
parentName: "attribute",
linked: "tag_script",
keywords: "html attribute reference async",
title: "async",
description: "Especifica se um script externo pode ser executado de maneira assíncrona",
content: ""
},
{
name: "attribute_autocomplete",
parentName: "attribute",
linked: "tag_form tag_input",
keywords: "html attribute reference autocomplete",
title: "autocomplete",
description: "Especifica se a função autocompletar deve ou não estar ativada",
content: ""
},
{
name: "attribute_autofocus",
parentName: "attribute",
linked: "tag_button tag_input tag_select tag_textarea",
keywords: "html attribute reference autofocus",
title: "autofocus",
description: "Especifica se o controle deve receber o foco quando a página terminar o carregamento",
content: ""
},
{
name: "attribute_autoplay",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference autoplay",
title: "autoplay",
description: "Especifica se o áudio ou o vídeo deve iniciar a reprodução tão logo seja possível carregá-lo",
content: ""
},
{
name: "attribute_charset",
parentName: "attribute",
linked: "tag_meta tag_script",
keywords: "html attribute reference charset",
title: "charset",
description: "Especifica qual conjunto de caractéres deve ser utilizado ao renderizar o documento ou ao processar um script",
content: ""
},
{
name: "attribute_checked",
parentName: "attribute",
linked: "tag_input",
keywords: "html attribute reference checked",
title: "checked",
description: "Especifica se um controle tag_input deve estar pre selecionado (para type=&quot;checkbox&quot; ou type=&quot;radio&quot;)",
content: ""
},
{
name: "attribute_cite",
parentName: "attribute",
linked: "tag_blockquote tag_del tag_ins tag_q",
keywords: "html attribute reference cite",
title: "cite",
description: "Fornece uma URL onde o texto citado/removido/inserido pode ser consultado",
content: ""
},
{
name: "attribute_class",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference class",
title: "class",
description: "Fornece um ou mais nomes de classe que podem ser utilizadas em folhas de estilo",
content: ""
},
{
name: "attribute_cols",
parentName: "attribute",
linked: "tag_textarea",
keywords: "html attribute reference cols",
title: "cols",
description: "Especifica a largura (em colunas de caractéres) de uma tag_textarea",
content: ""
},
{
name: "attribute_colspan",
parentName: "attribute",
linked: "tag_td tag_th",
keywords: "html attribute reference colspan",
title: "colspan",
description: "Especifica por quantas colunas uma célula deve se extender",
content: ""
},
{
name: "attribute_content",
parentName: "attribute",
linked: "tag_meta",
keywords: "html attribute reference content",
title: "content",
description: "Fornece um valor a ser associado ao atributo http-equiv ou name",
content: ""
},
{
name: "attribute_contenteditable",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference contenteditable",
title: "contenteditable",
description: "Especifica se o conteúdo de um elemento é editável ou não",
content: ""
},
{
name: "attribute_controls",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference controls",
title: "controls",
description: "Define se os controles (fornecidos pelo navegador) de reprodução para um áudio ou vídeo devem ser exibidos",
content: ""
},
{
name: "attribute_coords",
parentName: "attribute",
linked: "tag_area",
keywords: "html attribute reference coords",
title: "coords",
description: "Especifica as coordenadas de uma área",
content: ""
},
{
name: "attribute_data",
parentName: "attribute",
linked: "tag_object",
keywords: "html attribute reference data",
title: "data",
description: "Define a URL do recurso a ser utilizado no tag_object",
content: ""
},
{
name: "attribute_data-*",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference data-*",
title: "data-*",
description: "Permite armazenar informações adicionais no elemento que podem ser utilizadas por scripts",
content: ""
},
{
name: "attribute_datetime",
parentName: "attribute",
linked: "tag_del tag_ins tag_time",
keywords: "html attribute reference datetime",
title: "datetime",
description: "Fornece data e hora",
content: ""
},
{
name: "attribute_default",
parentName: "attribute",
linked: "tag_track",
keywords: "html attribute reference default",
title: "default",
description: "Define a trilha como padrão se o usuário não escolher outra",
content: ""
},
{
name: "attribute_defer",
parentName: "attribute",
linked: "tag_script",
keywords: "html attribute reference defer",
title: "defer",
description: "Especifica se o script externo deve ser processado somente quando a página terminar a renderização",
content: ""
},
{
name: "attribute_dir",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference dir",
title: "dir",
description: "Especifica a direção do texto dentro de um elemento",
content: ""
},
{
name: "attribute_dirname",
parentName: "attribute",
linked: "tag_input tag_textarea",
keywords: "html attribute reference dirname",
title: "dirname",
description: "Especifica que a direção do texto será enviada",
content: ""
},
{
name: "attribute_disabled",
parentName: "attribute",
linked: "tag_button tag_fieldset tag_input tag_optgroup tag_option tag_select tag_textarea",
keywords: "html attribute reference disabled",
title: "disabled",
description: "Define se um controle ou grupo de controles estarão desabilitados",
content: ""
},
{
name: "attribute_download",
parentName: "attribute",
linked: "tag_a tag_area",
keywords: "html attribute reference download",
title: "download",
description: "Indica que o conteúdo deve ser baixado",
content: ""
},
{
name: "attribute_draggable",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference draggable",
title: "draggable",
description: "Especifica se um conteúdo poderá ser arrastado",
content: ""
},
{
name: "attribute_enctype",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference enctype",
title: "enctype",
description: "Especifica qual método deve ser utilizado para empacotar os dados a serem submetidos ao servidor (somente para method=&quot;post&quot;)",
content: ""
},
{
name: "attribute_for",
parentName: "attribute",
linked: "tag_label tag_output",
keywords: "html attribute reference for",
title: "for",
description: "Conecta a legenda ao controle correspondente",
content: ""
},
{
name: "attribute_form",
parentName: "attribute",
linked: "tag_button tag_fieldset tag_input tag_label tag_meter tag_object tag_output tag_select tag_textarea",
keywords: "html attribute reference form",
title: "form",
description: "Especifica o nome do formulário ao qual o controle pertence",
content: ""
},
{
name: "attribute_formaction",
parentName: "attribute",
linked: "tag_button tag_input",
keywords: "html attribute reference formaction",
title: "formaction",
description: "Especifica o endereço para onde os dados do formulário devem ser submetidos - somente para type=&quot;submit&quot;",
content: ""
},
{
name: "attribute_headers",
parentName: "attribute",
linked: "tag_td tag_th",
keywords: "html attribute reference headers",
title: "headers",
description: "Indica a qual célula de cabeçalho esta célula deve ser relacionada",
content: ""
},
{
name: "attribute_height",
parentName: "attribute",
linked: "tag_canvas tag_embed tag_iframe tag_img tag_input tag_object tag_video",
keywords: "html attribute reference height",
title: "height",
description: "Determina a alttura do elemento",
content: ""
},
{
name: "attribute_hidden",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference hidden",
title: "hidden",
description: "Determina se o elemento deve ser ocultado",
content: ""
},
{
name: "attribute_high",
parentName: "attribute",
linked: "tag_meter",
keywords: "html attribute reference high",
title: "high",
description: "Determina o valor máximo",
content: ""
},
{
name: "attribute_href",
parentName: "attribute",
linked: "tag_a tag_area tag_base tag_link",
keywords: "html attribute reference href",
title: "href",
description: "Fornece uma URL para onde o link deve apontar",
content: ""
},
{
name: "attribute_hreflang",
parentName: "attribute",
linked: "tag_a tag_area tag_link",
keywords: "html attribute reference hreflang",
title: "hreflang",
description: "Especifica o idioma do documento apontado pelo link",
content: ""
},
{
name: "attribute_http-equiv",
parentName: "attribute",
linked: "tag_meta",
keywords: "html attribute reference http-equiv",
title: "http-equiv",
description: "Fornece informações equivalentes às especificadas no cabeçalho HTTP",
content: ""
},
{
name: "attribute_id",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference id",
title: "id",
description: "Fornece um identificador único para o elemento",
content: ""
},
{
name: "attribute_ismap",
parentName: "attribute",
linked: "tag_img",
keywords: "html attribute reference ismap",
title: "ismap",
description: "Indica que a imagem é um mapa manipulado pelo servidor",
content: ""
},
{
name: "attribute_kind",
parentName: "attribute",
linked: "tag_track",
keywords: "html attribute reference kind",
title: "kind",
description: "Especifica o tipo de legenda",
content: ""
},
{
name: "attribute_label",
parentName: "attribute",
linked: "tag_track tag_option tag_optgroup",
keywords: "html attribute reference label",
title: "label",
description: "Fornece um título para a legenda",
content: ""
},
{
name: "attribute_lang",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference lang",
title: "lang",
description: "Especifica o idioma para o conteúdo do elemento",
content: ""
},
{
name: "attribute_list",
parentName: "attribute",
linked: "tag_input",
keywords: "html attribute reference list",
title: "list",
description: "Vincula uma tag_datalist a um elemento tag_input",
content: ""
},
{
name: "attribute_loop",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference loop",
title: "loop",
description: "Define se a mídia deve repetir quando a reprodução alcançar o final",
content: ""
},
{
name: "attribute_low",
parentName: "attribute",
linked: "tag_meter",
keywords: "html attribute reference low",
title: "low",
description: "Define um valor baixo",
content: ""
},
{
name: "attribute_max",
parentName: "attribute",
linked: "tag_input tag_meter tag_progress",
keywords: "html attribute reference max",
title: "max",
description: "Fornece o valor máximo",
content: ""
},
{
name: "attribute_maxlength",
parentName: "attribute",
linked: "tag_input tag_textarea",
keywords: "html attribute reference maxlength",
title: "maxlength",
description: "Especifica o número máximo de caractéres permitidos",
content: ""
},
{
name: "attribute_media",
parentName: "attribute",
linked: "tag_a tag_area tag_link tag_source tag_style",
keywords: "html attribute reference media",
title: "media",
description: "Especifica para qual tipo de mídia o recurso apontado é mais adequado",
content: ""
},
{
name: "attribute_method",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference method",
title: "method",
description: "Especifica qual método HTTP deve ser utilizado para enviar os dados do formulário - normalmente GET ou POST",
content: ""
},
{
name: "attribute_min",
parentName: "attribute",
linked: "tag_input tag_meter",
keywords: "html attribute reference min",
title: "min",
description: "Fornece o valor mínimo",
content: ""
},
{
name: "attribute_multiple",
parentName: "attribute",
linked: "tag_input tag_select",
keywords: "html attribute reference multiple",
title: "multiple",
description: "Especifica se o usuário pode selecionar mais de um valor",
content: ""
},
{
name: "attribute_muted",
parentName: "attribute",
linked: "tag_video tag_audio",
keywords: "html attribute reference muted",
title: "muted",
description: "Especifica se a mídia deve iniciar a reprodução sem som",
content: ""
},
{
name: "attribute_name",
parentName: "attribute",
linked: "tag_button tag_fieldset tag_form tag_iframe tag_input tag_map tag_meta tag_object tag_output tag_param tag_select tag_textarea",
keywords: "html attribute reference name",
title: "name",
description: "Fornece um nome para o controle",
content: ""
},
{
name: "attribute_novalidate",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference novalidate",
title: "novalidate",
description: "Indica que os campos do formulário não devem ser validados antes da submissão",
content: ""
},
{
name: "attribute_onabort",
parentName: "attribute",
linked: "tag_audio tag_embed tag_img tag_object tag_video",
keywords: "html attribute reference onabort",
title: "onabort",
description: "Script a ser executado se o carregamento do recurso for abortado",
content: ""
},
{
name: "attribute_onafterprint",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onafterprint",
title: "onafterprint",
description: "Script a ser executado após o documento ser impresso",
content: ""
},
{
name: "attribute_onbeforeprint",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onbeforeprint",
title: "onbeforeprint",
description: "Script a ser executado antes do documento ser impresso",
content: ""
},
{
name: "attribute_onbeforeunload",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onbeforeunload",
title: "onbeforeunload",
description: "Script a ser executado quando o documento está para ser descarregado",
content: ""
},
{
name: "attribute_onblur",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onblur",
title: "onblur",
description: "Script a ser executado quando o elemento perde foco",
content: ""
},
{
name: "attribute_oncanplay",
parentName: "attribute",
linked: "tag_audio tag_embed tag_object tag_video",
keywords: "html attribute reference oncanplay",
title: "oncanplay",
description: "Script a ser executado quando um arquivo já pode ser reproduzido - quando já foram baixados dados suficientes para iniciar a reprodução",
content: ""
},
{
name: "attribute_oncanplaythrough",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference oncanplaythrough",
title: "oncanplaythrough",
description: "Script a ser executado quando o arquivo pode ser reproduzido até o fim, sem pausas para carregar dados",
content: ""
},
{
name: "attribute_onchange",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onchange",
title: "onchange",
description: "Script a ser executado quando o valor do elemento é alterado",
content: ""
},
{
name: "attribute_onclick",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onclick",
title: "onclick",
description: "Script a ser executado quando o elemento recebe um click",
content: ""
},
{
name: "attribute_oncontextmenu",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference oncontextmenu",
title: "oncontextmenu",
description: "Script a ser executado quando o menu de contexto é solicitado",
content: ""
},
{
name: "attribute_oncopy",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference oncopy",
title: "oncopy",
description: "Script a ser executado quando o conteúdo do elemento é copiado",
content: ""
},
{
name: "attribute_oncuechange",
parentName: "attribute",
linked: "tag_track",
keywords: "html attribute reference oncuechange",
title: "oncuechange",
description: "Script a ser executado when the cue changes in a tag_track element",
content: ""
},
{
name: "attribute_oncut",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference oncut",
title: "oncut",
description: "Script a ser executado quando o conteúdo do elemento é cortado",
content: ""
},
{
name: "attribute_ondblclick",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondblclick",
title: "ondblclick",
description: "Script a ser executado quando o elemento recebe um duplo clique",
content: ""
},
{
name: "attribute_ondrag",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondrag",
title: "ondrag",
description: "Script a ser executado quando o elemento é arrastado",
content: ""
},
{
name: "attribute_ondragend",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondragend",
title: "ondragend",
description: "Script a ser executado ao final de uma operação de arrastar",
content: ""
},
{
name: "attribute_ondragenter",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondragenter",
title: "ondragenter",
description: "Script a ser executado quando um elemento é arrastado para dentro de um álvo válido",
content: ""
},
{
name: "attribute_ondragleave",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondragleave",
title: "ondragleave",
description: "Script a ser executado quando um elemento é arrastado para fora de um álvo válido",
content: ""
},
{
name: "attribute_ondragover",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondragover",
title: "ondragover",
description: "Script a ser executado quando um elemento é arrastado sobre um álvo válido",
content: ""
},
{
name: "attribute_ondragstart",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondragstart",
title: "ondragstart",
description: "Script a ser executado no início de uma operação de arrastar",
content: ""
},
{
name: "attribute_ondrop",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference ondrop",
title: "ondrop",
description: "Script a ser executado quando um elemento sendo arrastado é solto",
content: ""
},
{
name: "attribute_ondurationchange",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference ondurationchange",
title: "ondurationchange",
description: "Script a ser executado quando a duração de uma mídia é alterada",
content: ""
},
{
name: "attribute_onemptied",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onemptied",
title: "onemptied",
description: "Script a ser executado quando algo errado acontece e o conteúdo da mídia não está mais disponível - por exemplo a conexão é perdida",
content: ""
},
{
name: "attribute_onended",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onended",
title: "onended",
description: "Script a ser executado quando a reprodução de uma mídia alcança o fim",
content: ""
},
{
name: "attribute_onerror",
parentName: "attribute",
linked: "tag_audio tag_body tag_embed tag_img tag_object tag_script tag_style tag_video",
keywords: "html attribute reference onerror",
title: "onerror",
description: "Script a ser executado quando ocorre um erro",
content: ""
},
{
name: "attribute_onfocus",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onfocus",
title: "onfocus",
description: "Script a ser executado quando o elemento recebe foco",
content: ""
},
{
name: "attribute_onhashchange",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onhashchange",
title: "onhashchange",
description: "Script a ser executado quando a parte &quot;hash&quot; do endereço é alterada",
content: ""
},
{
name: "attribute_oninput",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference oninput",
title: "oninput",
description: "Script a ser executado quando o elemento recebe entrada pelo usuário",
content: ""
},
{
name: "attribute_oninvalid",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference oninvalid",
title: "oninvalid",
description: "Script a ser executado quando o elemento se torna inválido",
content: ""
},
{
name: "attribute_onkeydown",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onkeydown",
title: "onkeydown",
description: "Script a ser executado quando uma tecla é pressionada",
content: ""
},
{
name: "attribute_onkeypress",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onkeypress",
title: "onkeypress",
description: "Script a ser executado enquanto o usuário mantém uma tecla pressionada",
content: ""
},
{
name: "attribute_onkeyup",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onkeyup",
title: "onkeyup",
description: "Script a ser executado quando o usuário solta uma tecla",
content: ""
},
{
name: "attribute_onload",
parentName: "attribute",
linked: "tag_body tag_iframe tag_img tag_input tag_link tag_script tag_style",
keywords: "html attribute reference onload",
title: "onload",
description: "Script a ser executado quando o elemento termina o carregamento",
content: ""
},
{
name: "attribute_onloadeddata",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onloadeddata",
title: "onloadeddata",
description: "Script a ser executado quando dados da mídia foram carregados",
content: ""
},
{
name: "attribute_onloadedmetadata",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onloadedmetadata",
title: "onloadedmetadata",
description: "Script a ser executado quando informações sobre a mídia (como dimenções ou duração) já estão disponíveis",
content: ""
},
{
name: "attribute_onloadstart",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onloadstart",
title: "onloadstart",
description: "Script a ser executado quando o download dos dados da mídia é iniciado",
content: ""
},
{
name: "attribute_onmousedown",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onmousedown",
title: "onmousedown",
description: "Script a ser executado quando o botão do mouse é pressionado",
content: ""
},
{
name: "attribute_onmousemove",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onmousemove",
title: "onmousemove",
description: "Script a ser executado enquanto o ponteiro do mouse se move sobre o elemento",
content: ""
},
{
name: "attribute_onmouseout",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onmouseout",
title: "onmouseout",
description: "Script a ser executado quando o ponteiro do mouse deixa o elemento",
content: ""
},
{
name: "attribute_onmouseover",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onmouseover",
title: "onmouseover",
description: "Script a ser executado quando o ponteiro do mouse se move sobre um elemento",
content: ""
},
{
name: "attribute_onmouseup",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onmouseup",
title: "onmouseup",
description: "Script a ser executado quando o botão do mouse é solto sobre o elemento",
content: ""
},
{
name: "attribute_onmousewheel",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onmousewheel",
title: "onmousewheel",
description: "Script a ser executado quando a roda do mouse é girada sobre o elemento",
content: ""
},
{
name: "attribute_onoffline",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onoffline",
title: "onoffline",
description: "Script a ser executado quando o navegador passa a navegar offline",
content: ""
},
{
name: "attribute_ononline",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference ononline",
title: "ononline",
description: "Script a ser executado quando o navegador passa a navegar online",
content: ""
},
{
name: "attribute_onpagehide",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onpagehide",
title: "onpagehide",
description: "Script a ser executado quando a aba da página atual é ocultada",
content: ""
},
{
name: "attribute_onpageshow",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onpageshow",
title: "onpageshow",
description: "Script a ser executado quando a aba da página atual é novamente exibida",
content: ""
},
{
name: "attribute_onpaste",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onpaste",
title: "onpaste",
description: "Script a ser executado quando o usuário cola algum conteúdo no elemento",
content: ""
},
{
name: "attribute_onpause",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onpause",
title: "onpause",
description: "Script a ser executado quando a mídia é pausada - tanto pelo usuário quanto por outras razões",
content: ""
},
{
name: "attribute_onplay",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onplay",
title: "onplay",
description: "Script a ser executado quando a mídia inicia a reprodução",
content: ""
},
{
name: "attribute_onplaying",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onplaying",
title: "onplaying",
description: "Script a ser executado quando a mídia iniciou a reprodução",
content: ""
},
{
name: "attribute_onpopstate",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onpopstate",
title: "onpopstate",
description: "Script a ser executado quando o histórico de navegação da janela muda",
content: ""
},
{
name: "attribute_onprogress",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onprogress",
title: "onprogress",
description: "Script a ser executado quando o navegador está em processo de baixar os dados da mídia",
content: ""
},
{
name: "attribute_onratechange",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onratechange",
title: "onratechange",
description: "Script a ser executado sempre que o rate da mídia é alterado - quando o usuário opta por reduzir ou aumentar a velocidade da reprodução",
content: ""
},
{
name: "attribute_onreset",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference onreset",
title: "onreset",
description: "Script a ser executado quando o botão de limpar formulário é pressionado",
content: ""
},
{
name: "attribute_onresize",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onresize",
title: "onresize",
description: "Script a ser executado quando a janela do navegador é redimensionada",
content: ""
},
{
name: "attribute_onscroll",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onscroll",
title: "onscroll",
description: "Script a ser executado quando a barra de rolagem de um elemento é rolada",
content: ""
},
{
name: "attribute_onsearch",
parentName: "attribute",
linked: "tag_input",
keywords: "html attribute reference onsearch",
title: "onsearch",
description: "Script a ser executado quando o usuário escreve alguma coisa no campo de pesquisa (para tag_input type=&quot;search&quot;)",
content: ""
},
{
name: "attribute_onseeked",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onseeked",
title: "onseeked",
description: "Script a ser executado quando a reprodução da mídia alcança o final e a barra de busca da mídia torna-se indisponível",
content: ""
},
{
name: "attribute_onseeking",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onseeking",
title: "onseeking",
description: "Script a ser executado when the seeking attribute is set to true indicating that seeking is active",
content: ""
},
{
name: "attribute_onselect",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onselect",
title: "onselect",
description: "Script a ser executado quando o elemento é selecionado",
content: ""
},
{
name: "attribute_onstalled",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onstalled",
title: "onstalled",
description: "Script a ser executado quando por qualquer razão o navegador não consegue receber os arquivos a reproduzir",
content: ""
},
{
name: "attribute_onstorage",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onstorage",
title: "onstorage",
description: "Script a ser executado quando uma área da webStorage é alterada",
content: ""
},
{
name: "attribute_onsubmit",
parentName: "attribute",
linked: "tag_form",
keywords: "html attribute reference onsubmit",
title: "onsubmit",
description: "Script a ser executado quando um formulário é enviado",
content: ""
},
{
name: "attribute_onsuspend",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onsuspend",
title: "onsuspend",
description: "Script a ser executado quando por qualquer razão o download da mídia é suspenso",
content: ""
},
{
name: "attribute_ontimeupdate",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference ontimeupdate",
title: "ontimeupdate",
description: "Script a ser executado quando a posição da reprodução é alterada, por exemplo quando o usuário salta para outra posição",
content: ""
},
{
name: "attribute_ontoggle",
parentName: "attribute",
linked: "tag_details",
keywords: "html attribute reference ontoggle",
title: "ontoggle",
description: "Script a ser executado quando o usuário alterna a exibição de um elemento tag_details",
content: ""
},
{
name: "attribute_onunload",
parentName: "attribute",
linked: "tag_body",
keywords: "html attribute reference onunload",
title: "onunload",
description: "Script a ser executado quando uma página é descarregada ou a janela do navegador é fechada",
content: ""
},
{
name: "attribute_onvolumechange",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onvolumechange",
title: "onvolumechange",
description: "Script a ser executado sempre que o volume do áudio ou vídeo é alterado",
content: ""
},
{
name: "attribute_onwaiting",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference onwaiting",
title: "onwaiting",
description: "Script a ser executado quando a mídia para, mas é esperado que retorne, por exemplo quando mais dados estão sendo baixados",
content: ""
},
{
name: "attribute_onwheel",
parentName: "attribute",
linked: "All visible elements.",
keywords: "html attribute reference onwheel",
title: "onwheel",
description: "Script a ser executado quando a roda do mouse é girada para cima ou para baixo",
content: ""
},
{
name: "attribute_open",
parentName: "attribute",
linked: "tag_details",
keywords: "html attribute reference open",
title: "open",
description: "Indica que a área tag_details deve estar inicialmente visível",
content: ""
},
{
name: "attribute_optimum",
parentName: "attribute",
linked: "tag_meter",
keywords: "html attribute reference optimum",
title: "optimum",
description: "Determina o valor ótimo para o medidor",
content: ""
},
{
name: "attribute_pattern",
parentName: "attribute",
linked: "tag_input",
keywords: "html attribute reference pattern",
title: "pattern",
description: "Fornece uma expressão regular contra a qual o valor de um tag_input deve ser verificado",
content: ""
},
{
name: "attribute_placeholder",
parentName: "attribute",
linked: "tag_input tag_textarea",
keywords: "html attribute reference placeholder",
title: "placeholder",
description: "Fornece um exemplo de entrada",
content: ""
},
{
name: "attribute_poster",
parentName: "attribute",
linked: "tag_video",
keywords: "html attribute reference poster",
title: "poster",
description: "Indica uma imagem a ser exibida enquanto o vídeo não inicia a reprodução",
content: ""
},
{
name: "attribute_preload",
parentName: "attribute",
linked: "tag_audio tag_video",
keywords: "html attribute reference preload",
title: "preload",
description: "Especifica se o autor deseja que a mídia seja carregada imediatamente após a página ser carregada",
content: ""
},
{
name: "attribute_readonly",
parentName: "attribute",
linked: "tag_input tag_textarea",
keywords: "html attribute reference readonly",
title: "readonly",
description: "Especifica se o campo é somente leitura",
content: ""
},
{
name: "attribute_rel",
parentName: "attribute",
linked: "tag_a tag_area tag_form tag_link",
keywords: "html attribute reference rel",
title: "rel",
description: "Indica a relação entre o documento lincado e o documento atual",
content: ""
},
{
name: "attribute_required",
parentName: "attribute",
linked: "tag_input tag_select tag_textarea",
keywords: "html attribute reference required",
title: "required",
description: "Especifica se o campo deve ser preenchido antes de o formulário ser submetido",
content: ""
},
{
name: "attribute_reversed",
parentName: "attribute",
linked: "tag_ol",
keywords: "html attribute reference reversed",
title: "reversed",
description: "Indica que a numeração da lista deve ser apresentada em ordem reversa (9,8,7...)",
content: ""
},
{
name: "attribute_rows",
parentName: "attribute",
linked: "tag_textarea",
keywords: "html attribute reference rows",
title: "rows",
description: "Especifica o número de linhas visíveis em uma tag_textarea",
content: ""
},
{
name: "attribute_rowspan",
parentName: "attribute",
linked: "tag_td tag_th",
keywords: "html attribute reference rowspan",
title: "rowspan",
description: "Especifica por quantas linhas uma célula deve se extender",
content: ""
},
{
name: "attribute_sandbox",
parentName: "attribute",
linked: "tag_iframe",
keywords: "html attribute reference sandbox",
title: "sandbox",
description: "Ativa um conjunto extra de restrições para o conteúdo de um tag_iframe",
content: ""
},
{
name: "attribute_scope",
parentName: "attribute",
linked: "tag_th",
keywords: "html attribute reference scope",
title: "scope",
description: "Especifica se uma célula de cabeçalho está relacionada a uma linha, coluna ou a um conjunto de linhas ou colunas",
content: ""
},
{
name: "attribute_selected",
parentName: "attribute",
linked: "tag_option",
keywords: "html attribute reference selected",
title: "selected",
description: "Especifica se uma opção deve estar presselecionada",
content: ""
},
{
name: "attribute_shape",
parentName: "attribute",
linked: "tag_area",
keywords: "html attribute reference shape",
title: "shape",
description: "Especifica um formato para a área",
content: ""
},
{
name: "attribute_size",
parentName: "attribute",
linked: "tag_input tag_select",
keywords: "html attribute reference size",
title: "size",
description: "Especifica a largura em caracteres para o tag_input ou o número de opções visíveis para tag_select",
content: ""
},
{
name: "attribute_sizes",
parentName: "attribute",
linked: "tag_img tag_link tag_source",
keywords: "html attribute reference sizes",
title: "sizes",
description: "Informa o tamanho dos recursos vinculados",
content: ""
},
{
name: "attribute_span",
parentName: "attribute",
linked: "tag_col tag_colgroup",
keywords: "html attribute reference span",
title: "span",
description: "Especifica o número de colunas a se extender",
content: ""
},
{
name: "attribute_spellcheck",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference spellcheck",
title: "spellcheck",
description: "Especifica se a verificação ortográfica e gramatical deve ou não ser ativada",
content: ""
},
{
name: "attribute_src",
parentName: "attribute",
linked: "tag_audio tag_embed tag_iframe tag_img tag_input tag_script tag_source tag_track tag_video",
keywords: "html attribute reference src",
title: "src",
description: "Especifica a URL do arquivo de mídia",
content: ""
},
{
name: "attribute_srcdoc",
parentName: "attribute",
linked: "tag_iframe",
keywords: "html attribute reference srcdoc",
title: "srcdoc",
description: "Indica um bloco HTML do documento a ser exibido no tag_iframe",
content: ""
},
{
name: "attribute_srclang",
parentName: "attribute",
linked: "tag_track",
keywords: "html attribute reference srclang",
title: "srclang",
description: "Especifica o idioma da legenda (obrigatório if kind=&quot;subtitles&quot;)",
content: ""
},
{
name: "attribute_srcset",
parentName: "attribute",
linked: "tag_img tag_source",
keywords: "html attribute reference srcset",
title: "srcset",
description: "Specifies the URL of the image to use in different situations",
content: ""
},
{
name: "attribute_start",
parentName: "attribute",
linked: "tag_ol",
keywords: "html attribute reference start",
title: "start",
description: "Especifica um número inicial para a lista ordenada",
content: ""
},
{
name: "attribute_step",
parentName: "attribute",
linked: "tag_input",
keywords: "html attribute reference step",
title: "step",
description: "Especifica um intervalo numérico permitido para um campo de entrada",
content: ""
},
{
name: "attribute_style",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference style",
title: "style",
description: "Especifica estilho inline para o elemento",
content: ""
},
{
name: "attribute_tabindex",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference tabindex",
title: "tabindex",
description: "Especifica a posição do elemento na sequência de tabulação",
content: ""
},
{
name: "attribute_target",
parentName: "attribute",
linked: "tag_a tag_area tag_base tag_form",
keywords: "html attribute reference target",
title: "target",
description: "Especifica o álvo onde um link ou retorno de um formulário deve ser exibido",
content: ""
},
{
name: "attribute_title",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference title",
title: "title",
description: "Fornece informações extras sobre um elemento, que pode ser exibido como dica de ferramenta",
content: ""
},
{
name: "attribute_translate",
parentName: "attribute",
linked: "global_attributes",
keywords: "html attribute reference translate",
title: "translate",
description: "Especifica se o conteúdo deve ou não ser traduzido",
content: ""
},
{
name: "attribute_type",
parentName: "attribute",
linked: "tag_a tag_button tag_embed tag_input tag_link tag_menu tag_object tag_script tag_source tag_style",
keywords: "html attribute reference type",
title: "type",
description: "Especifica o tipo de componente ou o tipo de conteúdo",
content: ""
},
{
name: "attribute_usemap",
parentName: "attribute",
linked: "tag_img tag_object",
keywords: "html attribute reference usemap",
title: "usemap",
description: "Especifica uma imagem para ser utilizada como mapa de imagem no lado do cliente",
content: ""
},
{
name: "attribute_value",
parentName: "attribute",
linked: "tag_button tag_input tag_li tag_option tag_meter tag_progress tag_param",
keywords: "html attribute reference value",
title: "value",
description: "Determina um valor para o elemento",
content: ""
},
{
name: "attribute_width",
parentName: "attribute",
linked: "tag_canvas tag_embed tag_iframe tag_img tag_input tag_object tag_video",
keywords: "html attribute reference width",
title: "width",
description: "Determina uma largura para o elemento",
content: ""
},
{
name: "attribute_wrap",
parentName: "attribute",
linked: "tag_textarea",
keywords: "html attribute reference wrap",
title: "wrap",
description: "Especifica se as quebras de linha devem ou não ser enviadas ao submeter o formulário",
content: ""
},
{
name: "global_attributes",
parentName: "tag",
keywords: "html attribute reference global",
title: "Atributos globais",
description: "Estes atributos aplicam-se a todos os elementos HTML.",
content: ""
},
{
name: "tutorial_intro",
parentName: "tutorial",
title: "Introdução"
},
{
name: "tutorial_structure",
parentName: "tutorial",
title: "Estrutura do documento"
},
{
name: "tutorial_headers",
parentName: "tutorial",
title: "Cabeçalho do documento"
},
{
name: "tutorial_regions",
parentName: "tutorial",
title: "Marcos e regiões"
},
{
name: "tutorial_blocks",
parentName: "tutorial",
title: "Blocos de conteúdo"
},
{
name: "tutorial_inline",
parentName: "tutorial",
title: "Caracterizando o texto"
},
{
name: "tutorial_linking",
parentName: "tutorial",
title: "Relacionando o conteúdo a outros conteúdos"
},
{
name: "tutorial_internationalization",
parentName: "tutorial",
title: "Internacionalização"
},
{
name: "tutorial_text_structures",
parentName: "tutorial",
title: "Texto estruturado"
},
{
name: "tutorial_tables",
parentName: "tutorial",
title: "Tabelas"
},
{
name: "tutorial_forms",
parentName: "tutorial",
title: "formulários"
},
{
name: "tutorial_multimedia",
parentName: "tutorial",
title: "Multimídia"
}
];

