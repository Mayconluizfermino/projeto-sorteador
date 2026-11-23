# projeto-sorteador
# Sorteador de Números

Aplicação web simples que sorteia um número aleatório dentro de um intervalo definido pelo usuário.

## Funcionalidades

- Sorteio de um número entre um valor mínimo e um máximo, ambos incluídos
- Validação de campos vazios
- Aviso quando o mínimo é maior que o máximo
- Vídeo de fundo no topo da página
- Layout centralizado com Flexbox

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Digite o número mínimo e o número máximo.
3. Clique em **Sortear**.
4. O número sorteado aparece na caixa abaixo do botão.

Não é preciso instalar nada nem usar servidor.

## Tecnologias

- HTML5
- CSS3 (Flexbox)
- JavaScript

## Estrutura do projeto

```
├── index.html   # estrutura da página
├── style.css    # estilos
├── script.js    # lógica do sorteio
├── dolar.jpg    # imagem de fundo
└── *.mp4        # vídeo do topo
```

## Como o sorteio funciona

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

`Math.random()` gera um número entre 0 e 1. A fórmula o ajusta ao intervalo escolhido e `Math.floor` arredonda para baixo, de modo que o mínimo e o máximo também podem ser sorteados.

## Autor

Mayconluizfermino
