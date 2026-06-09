import { cn } from '@/lib/utils/cn';

interface ProseBlockProps {
  text: string;
}

function ProseBlock({ text }: ProseBlockProps) {
  return <p className={styles.prose}>{text}</p>;
}

const styles = {
  prose: cn('text-muted leading-relaxed'),
};

export default ProseBlock;
