import { useEffect, useRef, useState } from 'react';

const CLICK_COOLDOWN_MS = 2000;

function useMailtoCopy(email: string) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastClickRef = useRef(0);

  useEffect(() => () => clearTimeout(timeoutRef.current ?? undefined), []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const now = Date.now();
    if (now - lastClickRef.current < CLICK_COOLDOWN_MS) {
      event.preventDefault();
      return;
    }
    lastClickRef.current = now;

    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      clearTimeout(timeoutRef.current ?? undefined);
      timeoutRef.current = setTimeout(() => setCopied(false), CLICK_COOLDOWN_MS);
    });
  };

  return { copied, handleClick };
}

export default useMailtoCopy;
