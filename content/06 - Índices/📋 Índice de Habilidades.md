---
tags: [indice]
---

# 📋 Mapa de Habilidades do Grupo

```dataview
TABLE
  categoria AS "Categoria",
  nivel_demanda AS "Demanda"
FROM "02 - Habilidades"
SORT categoria ASC, file.name ASC
```

---

## 🔗 Por categoria

### Design & Criação
```dataview
LIST
FROM "02 - Habilidades"
WHERE categoria = "design"
SORT file.name ASC
```

### Tecnologia & Desenvolvimento
```dataview
LIST
FROM "02 - Habilidades"
WHERE categoria = "tecnologia"
SORT file.name ASC
```

### Negócios & Estratégia
```dataview
LIST
FROM "02 - Habilidades"
WHERE categoria = "negocios"
SORT file.name ASC
```

### Marketing & Comunicação
```dataview
LIST
FROM "02 - Habilidades"
WHERE categoria = "marketing"
SORT file.name ASC
```

### Outros
```dataview
LIST
FROM "02 - Habilidades"
WHERE !contains(list("design","tecnologia","negocios","marketing"), categoria)
SORT file.name ASC
```
