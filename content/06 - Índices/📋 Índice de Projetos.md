---
tags: [indice]
---

# 📋 Projetos do Grupo

## 🟢 Ativos

```dataview
TABLE
  membros AS "Equipe",
  skills_necessarias AS "Skills abertas",
  data_inicio AS "Início"
FROM "03 - Projetos"
WHERE status = "ativo"
SORT data_inicio DESC
```

## 🔵 Em formação (buscando membros)

```dataview
TABLE
  skills_necessarias AS "Skills necessárias",
  tipo_colaboracao AS "Tipo"
FROM "03 - Projetos"
WHERE status = "formando"
```

## ✅ Concluídos

```dataview
LIST
FROM "03 - Projetos"
WHERE status = "concluido"
```
