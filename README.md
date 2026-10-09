# Landing page PNLD 2026 — Educação Infantil (MVC Editora)

Página única de divulgação das quatro obras de Educação Infantil inscritas no PNLD 2026 da MVC Editora.

## Obras

| Seção (id) | Obra | Código PNLD |
|---|---|---|
| `#comer-comer` | Comer, comer | 0504 P26 01 01 000 001 |
| `#o-menino-e-o-vento` | O menino e o vento | 0505 P26 01 02 000 002 |
| `#que-barulho-e-esse` | Que barulho é esse? | 0054 P26 01 01 000 001 |
| `#praticas-inovadoras` | Práticas inovadoras e reflexivas para Educação Infantil | 0331 P26 01 03 000 003 |

## Estrutura

```
index.html        marcação da página (menu, hero, quatro seções, rodapé)
css/styles.css    estilos (tokens de cor por seção, transições, responsivo)
js/main.js        animações de entrada (IntersectionObserver)
assets/           capas, personagens, páginas de exemplo e logos
```

O script de cópia do código PNLD e o modal "Conheça a obra" ficam inline no `index.html`.

## Prévia

Para validar sem abrir a pasta, gere um único arquivo com CSS, JS e imagens embutidos (base64):

- O arquivo final tem cerca de 8 MB.
- Não é necessário servidor: basta abrir no navegador.

## Comportamento importante

- **Capa fixa (desktop, acima de 860 px):** em cada seção, a capa com o código PNLD acompanha a leitura da coluna de texto e para ao fim da seção. No celular ela volta ao fluxo normal.
- **Responsivo:** nenhuma seção deve gerar rolagem horizontal em 390 px.

## Pendências

- Conteúdo digital do modal "Conheça a obra" (hoje: "Versão digital em breve.").
- URLs reais das obras.