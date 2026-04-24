---
tipo: projeto
status: formando
area: Tecnologia / Design
data_inicio: 2025-04-01
data_previsao: 2025-09-01
membros: [Carlos Mendes]
skills_necessarias: [Figma, UX Research]
tipo_colaboracao: parceria
remunerado: false
tags: [projeto, produtividade, app]
---

# 🚀 App de Produtividade para Times

## Descrição
Aplicativo para pequenas equipes gerenciarem tarefas com integrações de IA. Carlos está desenvolvendo o backend e precisa de um designer UX para criar a interface.

## 👥 Equipe atual

```dataview
TABLE
  area AS "Área",
  habilidades AS "Skills"
FROM "01 - Pessoas"
WHERE contains(this.membros, file.name)
```

## 🛠 Skills ainda necessárias
[[Figma]] · [[UX Research]]

```dataview
LIST
FROM "02 - Habilidades"
WHERE contains(this.skills_necessarias, file.name)
```

## 📋 Atualizações

- **2025-04-01** — Projeto iniciado. Backend em desenvolvimento com Python + FastAPI.
- **2025-04-10** — Ana Lima identificada como possível designer no encontro.

## 📅 Encontros relacionados

```dataview
LIST
FROM "04 - Encontros"
WHERE contains(projetos_discutidos, this.file.name)
```
