# FISHDEx

## Rodar com pesquisa factual online

1. Instale o Node.js 18 ou mais recente.
2. No PowerShell, inicie o servidor:

```powershell
node server.mjs
```

Abra `http://localhost:5502` no navegador. Não use o Live Server para o assistente, pois o endpoint `/api/chat` é fornecido pelo `server.mjs`.

O assistente não usa Gemini nem outro modelo generativo. Ele combina os dados técnicos já cadastrados no FISHDEx com consultas à Wikipédia/Wikimedia e dados taxonômicos do GBIF. A resposta é determinística e exibe as fontes online separadamente. Sem internet, ele usa apenas uma resposta local de emergência.
