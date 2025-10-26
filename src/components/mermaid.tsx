'use client'
import {useEffect, useRef, useState} from 'react'

export default function MermaidElement({value}: {value: string}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    let mounted = true
    async function render() {
      const mermaid = await import('mermaid')  // chargement côté client
      mermaid.default.initialize({startOnLoad: false})
      const id = `m-${Math.random().toString(36).slice(2)}`
      const {svg} = await mermaid.default.render(id, value)
      if (mounted) setSvg(svg)
    }
    render().catch((err) => console.error('Mermaid rendering error', err))
    return () => {
      mounted = false
    }
  }, [value])

  return <div ref={containerRef} dangerouslySetInnerHTML={{__html: svg}} />
}
