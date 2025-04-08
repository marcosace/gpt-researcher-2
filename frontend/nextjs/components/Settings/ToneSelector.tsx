import React, { ChangeEvent } from 'react';

interface ToneSelectorProps {
  tone: string;
  onToneChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
export default function ToneSelector({ tone, onToneChange }: ToneSelectorProps) {
  return (
    <div className="form-group">
      <label htmlFor="tone" className="agent_question">Entonação </label>
      <select 
        name="tone" 
        id="tone" 
        value={tone} 
        onChange={onToneChange} 
        className="form-control-static"
        required
      >
        <option value="Objective">Objetivo - Apresentação imparcial e sem viés de fatos e descobertas</option>
        <option value="Formal">Formal - Segue padrões acadêmicos com linguagem e estrutura sofisticadas</option>
        <option value="Analytical">Analítico - Avaliação crítica e exame detalhado de dados e teorias</option>
        <option value="Persuasive">Persuasivo - Convencendo o público de um ponto de vista ou argumento específico</option>
        <option value="Informative">Informativo - Fornecendo informações claras e abrangentes sobre um tópico</option>
        <option value="Explanatory">Explicativo - Esclarecendo conceitos e processos complexos</option>
        <option value="Descriptive">Descritivo - Descrição detalhada de fenômenos, experimentos ou estudos de caso</option>
        <option value="Critical">Crítico - Julgando a validade e relevância da pesquisa e suas conclusões</option>
        <option value="Comparative">Comparativo - Justapondo diferentes teorias, dados ou métodos para destacar diferenças e semelhanças</option>
        <option value="Speculative">Especulativo - Explorando hipóteses e implicações potenciais ou direções futuras de pesquisa</option>
        <option value="Reflective">Reflexivo - Considerando o processo de pesquisa e percepções ou experiências pessoais</option>
        <option value="Narrative">Narrativo - Contando uma história para ilustrar descobertas ou metodologias de pesquisa</option>
        <option value="Humorous">Humorístico - Leve e envolvente, geralmente para tornar o conteúdo mais relacionável</option>
        <option value="Optimistic">Otimista - Destacando descobertas positivas e benefícios potenciais</option>
        <option value="Pessimistic">Pessimista - Focando em limitações, desafios ou resultados negativos</option>
        <option value="Simple">Simples - Escrito para leitores jovens, usando vocabulário básico e explicações claras</option>
        <option value="Casual">Casual - Estilo conversacional e descontraído para leitura fácil e cotidiana</option>
      </select>
    </div>
  );
}