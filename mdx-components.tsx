import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-[#024A71] mb-6 mt-2 leading-tight">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-[#024A71] mb-4 mt-8 pb-2 border-b border-[#024A71]/10 leading-snug">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-[#024A71] mb-3 mt-6">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="text-[#024A71]/80 text-base leading-relaxed mb-5">
        {children}
      </p>
    ),

    strong: ({ children }) => (
      <strong className="font-bold text-[#024A71]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-[#024A71]/90">{children}</em>
    ),

    ul: ({ children }) => (
      <ul className="list-disc list-outside space-y-2 mb-5 text-[#024A71]/80 text-base pl-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside space-y-2 mb-5 text-[#024A71]/80 text-base pl-6">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#024A71] bg-[#F0F9FF] pl-6 pr-4 py-4 rounded-r-xl mb-6 italic text-[#024A71]/70 text-base">
        {children}
      </blockquote>
    ),

    code: ({ children }) => (
      <code className="bg-[#024A71]/10 text-[#024A71] px-2 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),

    hr: () => <hr className="border-[#024A71]/15 my-8" />,

    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#024A71] font-semibold underline underline-offset-2 hover:text-[#035d8a] transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // eslint-disable-next-line @next/next/no-img-element
    img: ({ src, alt }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ""}
        className="w-full rounded-xl my-6 object-cover shadow-md max-h-96"
      />
    ),
  };
}
