import CodeBlock from '@/app/components/ProjectDetail/components/ProjectSection/components/CodeBlock/CodeBlock';
import ListBlock from '@/app/components/ProjectDetail/components/ProjectSection/components/ListBlock/ListBlock';
import ProseBlock from '@/app/components/ProjectDetail/components/ProjectSection/components/ProseBlock/ProseBlock';
import { ProjectDetailSection } from '@/app/types';
import { cn } from '@/lib/utils/cn';

interface ProjectSectionProps {
  section: ProjectDetailSection;
}

function ProjectSection({ section }: ProjectSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{section.heading}</h2>
      {section.blocks.map((block, index) => {
        const key = `${section.heading}-${index}`;
        if (block.type === 'code') {
          return <CodeBlock key={key} code={block.code} />;
        }
        if (block.type === 'list') {
          return <ListBlock key={key} items={block.items} />;
        }
        return <ProseBlock key={key} text={block.text} />;
      })}
    </section>
  );
}

const styles = {
  section: cn('flex flex-col gap-4'),
  heading: cn('text-ink text-xl font-semibold'),
};

export default ProjectSection;
