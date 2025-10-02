# Site Surpresa de Aniversário

Um modelo de site simples e pessoal de página única para celebrar o aniversário ou uma data especial de alguém querido. Este projeto usa HTML, CSS e um pouco de JavaScript para criar uma página com múltiplas abas, onde diferentes amigos e familiares podem deixar mensagens e compartilhar fotos.

## ✨ Recursos

- **Interface com Abas**: Alterne facilmente entre as mensagens de diferentes pessoas.
- **Álbum de Fotos**: Uma seção dedicada em cada aba para exibir fotos marcantes.
- **Mensagens Personalizadas**: Espaço para mensagens carinhosas de cada pessoa.
- **Contador "Juntos Desde"**: Um contador dinâmico que mostra há quanto tempo um casal está junto (customizável via JavaScript).
- **Fácil de Personalizar**: Sem frameworks complexos. Apenas edite os arquivos HTML e JS com seu próprio conteúdo.

## 🚀 Como Usar

Para executar este projeto localmente ou personalizá-lo para seu próprio uso, siga estes passos.

### 1. Obtenha o Código

Clone este repositório ou baixe-o como um arquivo ZIP.

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
```

### 2. Estrutura dos Arquivos

O projeto está organizado em alguns arquivos principais:

- `index.html`: O arquivo principal que contém todo o conteúdo e estrutura. **É aqui que você fará a maioria das suas edições.**
- `style.css`: A folha de estilos. Você pode editar este arquivo para alterar cores, fontes e layout.
- `script.js`: Contém o JavaScript para a funcionalidade das abas e o contador de data.
- `/images`: Uma pasta onde você deve colocar todas as suas fotos.

### 3. Executando o Site

Você não precisa de um servidor web para rodar este projeto. Simplesmente **abra o arquivo `index.html` em seu navegador** (como Chrome, Firefox ou Safari) para ver o site.

## 🎨 Guia de Personalização

Siga estas instruções para personalizar o site. Todas as alterações de conteúdo são feitas no `index.html`, a menos que especificado de outra forma.

### ✏️ Editando Nomes e Abas

1.  **Mude os Nomes dos Botões**: Na seção `<div class="tabs">`, altere o texto dentro de cada `<button>`. Por exemplo:
    ```html
    <button onclick="mostrarTab('Joao')">João</button>
    ```
2.  **Atualize o ID do Conteúdo**: Certifique-se de que o nome dentro de `onclick="mostrarTab('Nome')"` corresponda ao `id` da `div` de conteúdo correspondente.
    ```html
    <div id="Joao" class="tab-content">
        </div>
    ```
3.  **Altere os Títulos**: Edite o texto dentro da tag `<h1>` no início da seção de cada pessoa.

### 🖼️ Adicionando Fotos

1.  Coloque todas as suas fotos (ex: `.jpg`, `.png`) dentro da pasta `/images`.
2.  No `index.html`, encontre a `<div class="album">` da pessoa que você deseja editar.
3.  Atualize o atributo `src` de cada tag `<img>` para apontar para o seu arquivo de imagem.
    ```html
    <img src="images/imagem-pessoa1-1.jpg" alt="Foto 1 da Pessoa 1">

    <img src="images/nossa-viagem.jpg" alt="Foto da nossa viagem">
    ```

### 💌 Editando Mensagens

1.  Encontre a seção `<div class="mensagem">` da pessoa que você deseja editar.
2.  Altere o texto dentro das tags `<p>` para sua mensagem pessoal. Cada tag `<p>` cria um novo parágrafo.

### ⏰ Configurando o Contador "Juntos Desde"

O contador de data calcula o tempo decorrido desde uma data específica.

1.  Abra o arquivo `script.js`.
2.  Procure por uma linha que define a data de início. Provavelmente será algo assim:
    ```javascript
    // Encontre esta linha e mude a data
    const dataInicio = new Date('2022-01-15T00:00:00'); 
    ```
3.  Altere a data (`'2022-01-15T00:00:00'`) para a sua data especial no formato `AAAA-MM-DD`.

### 👥 Adicionando uma Nova Pessoa

Para adicionar uma nova aba para outra pessoa:

1.  **Adicione um Botão**: Na seção `<div class="tabs">`, copie um `<button>` existente e altere o nome.
    ```html
    <button onclick="mostrarTab('NovaPessoa')">Nova Pessoa</button>
    ```
2.  **Adicione uma Seção de Conteúdo**: Copie um bloco de conteúdo inteiro (de `<div id="..." class="tab-content">` até o `</div>` de fechamento).
3.  **Atualize o ID**: Altere o `id` do seu novo bloco de conteúdo para corresponder ao nome na função `onclick` do botão (ex: `id="NovaPessoa"`).
4.  **Personalize**: Edite o `<h1>`, as fotos e as mensagens em sua nova seção.

## 📜 Licença

Este projeto é de código aberto. Sinta-se à vontade para usá-lo, modificá-lo e compartilhá-lo para suas próprias celebrações pessoais.