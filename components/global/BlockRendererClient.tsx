"use client";
import React from "react";
import Image from "next/image";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

function renderLexicalNode(node: any, index: number): React.ReactNode {
  if (!node) return null;

  if (node.type === 'text') {
    let text = node.text;
    if (typeof text !== 'string') return null;

    const format = node.format ?? 0;
    const isBold = (format & 1) !== 0;
    const isItalic = (format & 2) !== 0;
    const isStrikethrough = (format & 4) !== 0;
    const isUnderline = (format & 8) !== 0;
    const isCode = (format & 16) !== 0;

    let element: React.ReactNode = text;

    if (isBold) element = <strong key={index}>{element}</strong>;
    if (isItalic) element = <em key={index}>{element}</em>;
    if (isUnderline) element = <u key={index}>{element}</u>;
    if (isStrikethrough) element = <span style={{ textDecoration: 'line-through' }} key={index}>{element}</span>;
    if (isCode) element = <code key={index}>{element}</code>;

    return <span key={index}>{element}</span>;
  }

  const children = node.children ? node.children.map((child: any, childIndex: number) => renderLexicalNode(child, childIndex)) : null;

  switch (node.type) {
    case 'root':
      return <div key={index}>{children}</div>;
    case 'paragraph':
      return <p key={index}>{children}</p>;
    case 'heading': {
      const Tag = (node.tag ?? 'h1') as keyof React.JSX.IntrinsicElements;
      return <Tag key={index}>{children}</Tag>;
    }
    case 'list': {
      if (node.listType === 'number') {
        return <ol key={index}>{children}</ol>;
      }
      return <ul key={index}>{children}</ul>;
    }
    case 'listitem':
      return <li key={index}>{children}</li>;
    case 'link': {
      const url = node.fields?.url ?? node.url ?? '#';
      const newTab = node.fields?.newTab ?? false;
      return (
        <a
          key={index}
          href={url}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    }
    case 'upload': {
      const media = node.value;
      if (media && typeof media === 'object' && media.url) {
        const fullUrl = media.url.startsWith('http') ? media.url : `${process.env.NEXT_IMAGE_BASE ?? ''}${media.url}`;
        return (
          <div key={index} className="my-4">
            <img
              src={fullUrl}
              alt={media.alt ?? ''}
              className="rounded-lg shadow max-w-full h-auto"
            />
          </div>
        );
      }
      return null;
    }
    case 'horizontalrule':
      return <hr key={index} />;
    case 'quote':
      return <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>;
    default:
      return children ? <div key={index}>{children}</div> : null;
  }
}

export default function BlockRendererClient({
  content,
}: {
  readonly content: any;
}) {
  if (!content) return null;

  // Check if content is in Lexical JSON format (has a root object)
  if (typeof content === "object" && content.root) {
    return renderLexicalNode(content.root, 0);
  }

  // Fallback to Strapi BlocksRenderer
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          console.log(image);
          return (
            <Image
              src={`http://gicubuntuapi.wintercodedesign.com/${image.url}`}
              width={image.width}
              height={image.height}
              alt={image.alternativeText || ""}
            />
          );
        },
      }}
    />
  );
}
