---
tags: [indice]
---

# 📋 Índice de Membros

```dataview
TABLE
  area AS "Área",
  cidade AS "Cidade",
  habilidades AS "Skills",
  disponivel_projetos AS "Aceita projetos?",
  disponivel_mentoria AS "Faz mentoria?",
  contato_linkedin AS "LinkedIn"
FROM "01 - Pessoas"
WHERE tipo = "membro"
SORT area ASC
```
