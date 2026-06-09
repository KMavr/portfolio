import SkillGroup from '@/app/components/Skills/components/SkillGroup/SkillGroup';
import { SKILLS } from '@/app/config/skills';
import { cn } from '@/lib/utils/cn';

function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.groups}>
        {SKILLS.map((group) => (
          <SkillGroup key={group.label} label={group.label} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: cn('mx-auto w-full max-w-5xl px-6 py-16 sm:py-24'),
  heading: cn('text-ink text-2xl font-semibold sm:text-3xl'),
  groups: cn('mt-10 flex flex-col gap-8'),
};

export default Skills;
