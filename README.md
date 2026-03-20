# Bloco de Notas Simples (Frontend)

Esta aplicação web simula um bloco de notas, permitindo ao usuário adicionar, editar e excluir notas diretamente no navegador, sem backend. O objetivo é servir como material didático para demonstrar como defeitos de software podem surgir em aplicações simples.

## Objetivo

- Ensinar alunos sobre como defeitos acontecem em software, mesmo em sistemas simples.
- Simular uma tela de bloco de notas, onde o usuário pode escrever lembretes para si mesmo.
- Permitir inclusão, alteração e exclusão de notas (CRUD básico, apenas frontend).

## Como funciona

- A aplicação é composta apenas por HTML, CSS e JavaScript.
- Todas as notas são armazenadas em memória (array JavaScript), sem persistência.
- O usuário pode adicionar uma nova nota, editar uma existente ou excluí-la.

## Problema Crítico (Defeito Demonstrativo)

> **Atenção:** Existe um defeito crítico proposital na funcionalidade de exclusão de notas.
>
> Ao excluir uma nota, pode ocorrer um comportamento inesperado, como exclusão incorreta ou falha na atualização da lista. Este defeito foi mantido intencionalmente para ser utilizado como exemplo didático em sala de aula.

## Contexto Didático

Este projeto foi desenvolvido para a aula sobre defeitos de software ministrada por Julio de Lima. O objetivo é mostrar, na prática, como defeitos podem surgir e como identificá-los/testá-los.

Assista à aula completa aqui: [https://youtu.be/xXBez5yhn9U?si=PZLc5HTApFGE8Mz8](https://youtu.be/xXBez5yhn9U?si=PZLc5HTApFGE8Mz8)

---

**Desenvolvido para fins educacionais.**