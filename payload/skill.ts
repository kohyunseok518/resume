import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language',
  items: [{ title: 'Java' }, { title: 'Python' }],
};

const framework: ISkill.Skill = {
  category: 'Framework',
  items: [{ title: 'Spring Boot' }, { title: 'Spring Data JPA' }, { title: 'FastAPI' }],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [{ title: 'MySQL' }, { title: 'Redis' }],
};

const ai: ISkill.Skill = {
  category: 'AI',
  items: [{ title: 'LangChain' }, { title: 'RAG(BM25, FAISS, pgvector)' }],
};

const infra: ISkill.Skill = {
  category: 'Infra',
  items: [
    { title: 'AWS(EC2, ALB, Auto Scaling, RDS, ElastiCache, S3, CloudWatch)' },
    { title: 'GitHub Actions' },
    { title: 'Docker' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [language, framework, database, ai, infra],
};

export default skill;
