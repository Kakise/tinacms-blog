'use client'
import type {ReactNode} from "react";
import {
  Components,
  TinaMarkdown,
  TinaMarkdownContent,
} from 'tinacms/dist/rich-text'
import {Codeblock} from "@/components/code-block";
import {Mermaid} from "@/components/mermaid";

type BaseComponents = {
    h1?: {
        children: ReactNode;
    };
    h2?: {
        children: ReactNode;
    };
    h3?: {
        children: ReactNode;
    };
    h4?: {
        children: ReactNode;
    };
    h5?: {
        children: ReactNode;
    };
    h6?: {
        children: ReactNode;
    };
    p?: {
        children: ReactNode;
    };
    a?: {
        url: string;
        children: ReactNode;
    };
    italic?: {
        children: ReactNode;
    };
    bold?: {
        children: ReactNode;
    };
    strikethrough?: {
        children: ReactNode;
    };
    underline?: {
        children: ReactNode;
    };
    code?: {
        children: ReactNode;
    };
    text?: {
        children: string;
    };
    ul?: {
        children: ReactNode;
    };
    ol?: {
        children: ReactNode;
    };
    li?: {
        children: ReactNode;
    };
    lic?: {
        children: ReactNode;
    };
    block_quote?: {
        children: ReactNode;
    };
    code_block?: {
        lang?: string;
        value: string;
    };
    mermaid?: {
        value: string;
    };
    img?: {
        url: string;
        caption?: string;
        alt?: string;
    };
    maybe_mdx?: {
        children: ReactNode;
    };
    html?: {
        value: string;
    };
    html_inline?: {
        value: string;
    };
    table?: {
        align?: ('left' | 'right' | 'center')[];
        tableRows: {
            tableCells: {
                value: TinaMarkdownContent;
            }[];
        }[];
    };
    component_missing?: {
        name: string;
    };
};

const components: Components<BaseComponents> = {
    code_block: props => {
        return <Codeblock language={props?.lang ?? "text"}>{props?.value ?? ""}</Codeblock>
    },
    mermaid: props => {
        return <Mermaid>{props?.value}</Mermaid>
    },
    code: props =>  {
        return <code className="bg-muted rounded-md p-1">{props?.children}</code>
    },
    p: props => {
        return <p className={"mt-1 mb-1"}>{props?.children}</p>
    },
    ul: props => {
        return <ul className={"list-disc ml-4"}>{props?.children}</ul>
    },
    ol: props => {
        return <ol className={"list-decimal ml-4"}>{props?.children}</ol>
    },
}

export default function MDXRender({content}: { content: TinaMarkdownContent }) {

    return <TinaMarkdown content={content} components={components} />
}