# InfoTech IFPB - Manual de Uso e Documentação Técnica

---

## 🏛️ Instituição
**Instituto Federal de Educação, Ciência e Tecnologia da Paraíba (IFPB)**  
**Campus Cajazeiras**  
**Curso:** Informática  
**Disciplina:** Desenvolvimento Web  
**Professor:** John Lennon

---

## 1. Introdução
A plataforma **InfoTech IFPB** é uma solução web integrada projetada para gerenciar serviços de manutenção de hardware e comercialização de componentes tecnológicos. Este documento serve como guia oficial para usuários e desenvolvedores, detalhando as funcionalidades, tecnologias e procedimentos operacionais do sistema.

## 2. Equipe de Desenvolvimento
O projeto foi concebido e implementado por uma equipe multidisciplinar:

*   **Camila**: Técnica em Suporte e Organização de TI.
*   **Giovane**: Técnico em Hardware.
*   **Isaac**: Técnico em Suporte Técnico.
*   **Kaio**: Técnico em Manutenção de Computadores.
*   **Samuel**: Técnico em Redes e Hardware.

## 3. Objetivos do Projeto
### 3.1. Geral
Proporcionar uma interface centralizada para a comunidade acadêmica do IFPB solicitar suporte técnico e adquirir componentes de hardware de forma ágil e intuitiva.

### 3.2. Específicos
*   Automatizar a abertura de chamados técnicos.
*   Disponibilizar uma vitrine de produtos com filtros dinâmicos.
*   Implementar um sistema de carrinho de compras persistente.
*   Oferecer suporte em tempo real via Chatbot com Inteligência Artificial.

## 4. Tecnologias Utilizadas
A plataforma foi desenvolvida utilizando as tecnologias mais modernas do ecossistema Web:

*   **HTML5 Semântico**: Estruturação de conteúdo focada em acessibilidade e SEO.
*   **CSS3 Avançado**: Design responsivo utilizando Flexbox, Grid e Variáveis CSS.
*   **JavaScript (ES6+)**: Lógica de negócio, manipulação do DOM e integração com APIs.
*   **LocalStorage**: Armazenamento local para persistência de dados do carrinho.
*   **Chatling AI**: Integração de assistente virtual inteligente.

---

## 5. Guia de Navegação e Uso

### 5.1. Página Inicial (Início)
A porta de entrada da plataforma. Aqui você encontrará:
*   Banner principal com acesso rápido aos serviços.
*   Apresentação da equipe técnica.
*   Informações institucionais sobre a InfoTech.

### 5.2. Catálogo de Serviços
Acesse a aba **Serviços** para visualizar as especialidades da equipe:
1.  **Manutenção de Computadores**: Diagnóstico e reparo.
2.  **Instalação de Sistemas**: Configuração de SO e drivers.
3.  **Troca de Peças**: Substituição de componentes defeituosos.
4.  **Limpeza Preventiva**: Manutenção interna para evitar superaquecimento.

### 5.3. Abertura de Chamados
Para solicitar suporte:
1.  Vá até a página **Chamado**.
2.  Preencha seu **Nome** e **E-mail**.
3.  Selecione o **Serviço** desejado no menu suspenso.
4.  Descreva detalhadamente o **Problema** no campo de texto.
5.  Clique em **Enviar Chamado**.

### 5.4. Loja Virtual e Carrinho
A InfoTech Store oferece uma experiência de compra completa:
*   **Filtros**: Use a barra lateral para filtrar por *Hardware*, *Periféricos* ou *Redes*.
*   **Adicionar ao Carrinho**: Clique no botão "Comprar" em qualquer produto.
*   **Gerenciar Carrinho**: Clique no ícone 🛒 no menu superior para abrir o modal.
    *   Visualize os itens e o valor total.
    *   Remova itens clicando no botão "X".
*   **Finalizar**: Clique em "Finalizar Compra" para processar o pedido.

### 5.5. Suporte via Chatbot
Em qualquer página, utilize o ícone no canto inferior direito para conversar com nossa IA. Ela pode tirar dúvidas sobre preços, horários e disponibilidade de serviços instantaneamente.

---

## 6. Documentação Técnica para Desenvolvedores

### Estrutura de Arquivos
```text
/
├── index.html          # Página principal
├── servico.html        # Detalhamento de serviços
├── chamado.html        # Formulário de suporte
├── loja.html           # E-commerce e vitrine
├── static/
│   └── style.css       # Estilização global e responsividade
├── js/
│   └── script.js       # Lógica do carrinho e interatividade
└── img/                # Ativos visuais e fotos da equipe
```

### Persistência de Dados
O sistema utiliza a `localStorage` para garantir que o usuário não perca seus itens no carrinho ao atualizar a página ou fechar o navegador. A chave utilizada é `cart`.

---

## 7. Considerações Finais
Este manual visa garantir a melhor experiência possível na plataforma InfoTech IFPB. O projeto continua em evolução, buscando sempre integrar novas tecnologias para melhor servir à comunidade do IFPB.

**João Pessoa, 2025**  
*InfoTech IFPB - Excelência em Tecnologia*
