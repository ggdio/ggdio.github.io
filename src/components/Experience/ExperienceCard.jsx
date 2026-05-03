import { motion } from 'framer-motion';

const TAGS_BY_INDEX = [
  ['GCP', 'BigQuery', 'Data Mesh', 'Dataflow', 'Datastream'],
  ['GCP', 'BigQuery', 'Dataflow', 'Dataplex'],
  ['Snowflake', 'AWS', 'GCP', 'Airflow'],
  ['Multi-cloud', '100+ team', 'AWS', 'GCP'],
  ['Strategy', 'Architecture', 'Modernization'],
  ['Hadoop', 'Spark', 'Kafka', 'Elasticsearch'],
];

export function ExperienceCard({ experience, index }) {
  const isCurrent = index === 0;
  const tags = TAGS_BY_INDEX[index] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`px-7 py-6 transition-all hover:border-brand/30 ${isCurrent ? 'card-grad' : 'glass rounded-[12px]'}`}
      style={{ borderRadius: 'var(--radius-card)' }}
    >
      <div className="text-[11px] text-brand-light font-semibold tracking-wider mb-1.5 uppercase">
        {experience.period}
      </div>
      <div className="font-display text-xl font-bold text-app-text mb-1">
        {experience.company}
      </div>
      <div className="text-[13px] text-app-text-muted mb-1">{experience.role}</div>
      <div className="text-[11px] text-app-text-dim mb-3">{experience.location}</div>
      <p className="text-sm text-app-text-muted leading-[1.7] mb-3.5">
        {experience.description}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag} className={isCurrent ? 'pill pill-blue' : 'pill pill-ghost'}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
