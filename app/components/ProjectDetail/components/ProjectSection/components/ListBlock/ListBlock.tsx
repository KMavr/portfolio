import { cn } from '@/lib/utils/cn';

interface ListBlockProps {
  items: string[];
}

function ListBlock({ items }: ListBlockProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.listItem}>
          {item}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: cn('flex flex-col gap-3'),
  listItem: cn('text-muted border-line border-l-2 pl-4 leading-relaxed'),
};

export default ListBlock;
