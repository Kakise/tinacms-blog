import { useRef, useEffect } from 'react';
import mermaid from 'mermaid';

// @ts-expect-error no types for mermaid
export default function MermaidElement({ value }) {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.initialize({ startOnLoad: false });
      mermaid.run().then(r => console.log(r));
    }
  }, [value]);

  return (
    <div contentEditable={false}>
      <div ref={mermaidRef}>
        <pre className="mermaid" suppressHydrationWarning>{value}</pre>
      </div>
    </div>
  );
}
