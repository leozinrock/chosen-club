# 📖 Como usar o Sistema de Networking

## Plugins necessários no Obsidian
1. **Dataview** — para as tabelas automáticas (obrigatório)
   - Configurações → Plugins da comunidade → Buscar "Dataview" → Instalar e ativar
2. **Templater** — para usar os templates com data automática (recomendado)
   - Configurações → Plugins da comunidade → Buscar "Templater" → Instalar e ativar
3. **Graph View** — nativo do Obsidian — ative para ver a rede visual (Ctrl/Cmd + G)

---

## Como adicionar um novo membro
1. Crie um arquivo em `01 - Pessoas/Nome Sobrenome.md`
2. Copie o conteúdo de `05 - Templates/✏️ Template — Novo Membro`
3. Preencha os campos do frontmatter (YAML no topo)
4. Adicione os links de habilidades com `[[nome da skill]]`
5. O Hub Central e os índices atualizam automaticamente via Dataview

## Como cadastrar uma nova habilidade
1. Crie um arquivo em `02 - Habilidades/Nome da Skill.md`
2. Copie o conteúdo de `05 - Templates/✏️ Template — Nova Habilidade`
3. Defina a categoria: `design` / `tecnologia` / `marketing` / `negocios` / `outro`
4. A skill aparece automaticamente nos índices e nos perfis dos membros

## Como registrar um encontro
1. Crie um arquivo em `04 - Encontros/Encontro YYYY-MM-DD.md`
2. Use o template `✏️ Template — Encontro`
3. Liste os participantes no frontmatter — as queries vão buscá-los automaticamente

## Como visualizar a rede
- Abra o **Graph View** (Ctrl/Cmd + G)
- Todos os `[[links]]` entre pessoas, habilidades e projetos formam a rede neural visual
- Filtre por pasta ou tag para ver subconjuntos da rede

---

## Estrutura do sistema

```
📁 00 - Hub Central/       ← Ponto de entrada — todas as views aqui
📁 01 - Pessoas/           ← Um arquivo por membro
📁 02 - Habilidades/       ← Uma nota por skill
📁 03 - Projetos/          ← Um arquivo por projeto
📁 04 - Encontros/         ← Um arquivo por encontro
📁 05 - Templates/         ← Templates para criar novos registros
📁 06 - Índices/           ← Views consolidadas por tipo
```

---

## Campos importantes do frontmatter

| Campo | Tipo | Valores possíveis |
|---|---|---|
| `disponivel_projetos` | boolean | `true` / `false` |
| `disponivel_mentoria` | boolean | `true` / `false` |
| `disponivel_parcerias` | boolean | `true` / `false` |
| `tipo_colaboracao` | lista | `freelance`, `parceria`, `troca de conhecimento`, `voluntário` |
| `status` (projeto) | texto | `ativo`, `formando`, `concluido`, `pausado` |
| `categoria` (skill) | texto | `design`, `tecnologia`, `marketing`, `negocios`, `criativo`, `outro` |
| `nivel_demanda` (skill) | texto | `alta`, `media`, `baixa` |

---

## Compartilhar o sistema com o grupo

**Opção 1 — Obsidian Sync** (pago, ~$8/mês)
- Sincronização nativa em tempo real entre membros

**Opção 2 — Git + Obsidian Git** (gratuito)
- Instale o plugin **Obsidian Git**
- Crie um repositório privado no GitHub
- Cada membro faz pull/push quando atualiza

**Opção 3 — Google Drive / Dropbox**
- Compartilhe a pasta do vault via Drive
- Funciona bem se os membros não editam simultaneamente

---

## Como o Graph View funciona como mapa da rede

Cada `[[link interno]]` cria uma aresta no grafo. Quanto mais conectada uma pessoa estiver a habilidades, projetos e encontros, mais central ela aparece no grafo. Use isso para identificar:
- **Pontos de conexão** — pessoas que conectam diferentes áreas
- **Clusters** — grupos naturais por skill ou interesse
- **Gaps** — skills que ninguém no grupo tem ainda
