"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PostQuery } from "../../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Codeblock } from "@/components/code-block";
import {Mermaid} from "@/components/mermaid";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

const components = {
  code_block: (props: any) => {
    return <Codeblock language={props.lang}>{props.value}</Codeblock>;
  },
  mermaid: (props: any) => {
    return <Mermaid>{props.value}</Mermaid>;
  },
};

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const content = data.post.body;
  return (
    <>
      <h1 data-tina-field={tinaField(data.post, "title")}>
        {data.post.title}
      </h1>
      <div data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={content} components={components} />
      </div>
    </>
  );
}
