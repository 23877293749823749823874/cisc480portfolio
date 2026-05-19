import { reflectionMd } from "../data/reflection";

function Inline({ text }: { text: string }) {
  const segments = text.split(/(\*\*.+?\*\*)/g);
  return (
    <>
      {segments.map((seg, i) =>
        seg.startsWith("**") && seg.endsWith("**") ? (
          <strong key={i}>{seg.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{seg}</span>
        ),
      )}
    </>
  );
}

export function ReflectionPage() {
  const parts = reflectionMd.trim().split(/\n(?=## )/);
  return (
    <article className="prose-section reflection-article">
      {parts.map((part, i) => {
        if (i === 0) {
          const lines = part.trim().split("\n");
          const rawTitle = lines[0].replace(/^#\s+/, "");
          const rest = lines.slice(1).join("\n").trim();
          const paras = rest.split(/\n\n+/).filter(Boolean);
          return (
            <header key="head">
              <h1>
                <Inline text={rawTitle} />
              </h1>
              {paras.map((p, j) => (
                <p key={j}>
                  <Inline text={p} />
                </p>
              ))}
            </header>
          );
        }
        const lines = part.trim().split("\n");
        const rawH2 = lines[0].replace(/^##\s+/, "");
        const body = lines.slice(1).join("\n").trim();
        const paras = body.split(/\n\n+/).filter(Boolean);
        return (
          <section key={i}>
            <h2>
              <Inline text={rawH2} />
            </h2>
            {paras.map((p, j) => (
              <p key={j}>
                <Inline text={p} />
              </p>
            ))}
          </section>
        );
      })}
    </article>
  );
}
