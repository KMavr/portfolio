import { cn } from '@/lib/utils/cn';

interface SkillGroupProps {
  label: string;
  skills: string[];
}

function SkillGroup({ label, skills }: SkillGroupProps) {
  return (
    <div className={styles.group}>
      <span className={styles.label}>{label}</span>
      <ul className={styles.chips}>
        {skills.map((skill) => (
          <li key={skill} className={styles.chip}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  group: cn('flex flex-col gap-3 sm:flex-row sm:gap-8'),
  label: cn('text-muted font-mono text-xs sm:w-36 sm:shrink-0 sm:pt-1.5'),
  chips: cn('flex flex-wrap gap-2'),
  chip: cn('border-line text-muted rounded-full border px-3 py-1 font-mono text-xs'),
};

export default SkillGroup;
