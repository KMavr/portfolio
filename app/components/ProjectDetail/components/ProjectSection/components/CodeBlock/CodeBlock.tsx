import { cn } from '@/lib/utils/cn';

interface CodeBlockProps {
  code: string;
}

function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className={styles.pre}>
      <code>{code}</code>
    </pre>
  );
}

const styles = {
  pre: cn(
    'border-line bg-surface rounded-card overflow-x-auto border p-4',
    'text-ink font-mono text-xs leading-relaxed',
  ),
};

export default CodeBlock;
