import { useRef, useEffect, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
});

export default function MermaidElement({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    const renderDiagram = async () => {
      if (ref.current && value) {
        try {
          const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
          const { svg } = await mermaid.render(id, value);
          setSvg(svg);
        } catch (error) {
          console.error('Mermaid rendering error:', error);
        }
      }
    };

    renderDiagram().finally(() => {
      console.log("Finished mermaid rendering");
    });
  }, [value]);

  return (
    <div
      ref={ref}
      className="mermaid"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}