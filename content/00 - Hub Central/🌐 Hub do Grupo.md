---
tags: [hub, networking, central]
---

# 🌐 Hub Central do Grupo de Networking

> Este é o ponto de entrada da nossa rede. Use os índices abaixo para explorar membros, habilidades e oportunidades de colaboração.

---

## 👥 Membros do Grupo

```dataview
TABLE
  area AS "Área",
  habilidades AS "Skills",
  disponivel_projetos AS "Disponível?"
FROM "01 - Pessoas"
WHERE tipo = "membro"
SORT file.name ASC
```

---

## 🛠 Quem tem qual habilidade?

```dataview
TABLE
  categoria AS "Categoria"
FROM "02 - Habilidades"
SORT file.name ASC
```

---

## 🚀 Projetos Ativos

```dataview
TABLE
  status AS "Status",
  membros AS "Equipe",
  skills_necessarias AS "Skills necessárias"
FROM "03 - Projetos"
WHERE status = "ativo" OR status = "formando"
SORT file.ctime DESC
```

---

## 📅 Últimos Encontros

```dataview
TABLE
  data_encontro AS "Data",
  participantes AS "Participantes",
  conexoes_geradas AS "Conexões feitas"
FROM "04 - Encontros"
SORT data_encontro DESC
LIMIT 5
```

---

## 🔍 Buscar por necessidade

```dataview
TABLE
  area AS "Área",
  disponivel_mentoria AS "Mentoria?",
  disponivel_parcerias AS "Parcerias?",
  tipo_colaboracao AS "Formas de colaborar"
FROM "01 - Pessoas"
WHERE tipo = "membro"
SORT area ASC
```

---

## 📌 Links rápidos

- [[📋 Índice de Habilidades]]
- [[📋 Índice de Membros]]
- [[📋 Índice de Projetos]]
- [[✏️ Template — Novo Membro]]
- [[✏️ Template — Novo Projeto]]
- [[✏️ Template — Encontro]]
- [[LEIA-ME — Como usar este sistema]]
