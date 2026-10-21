import type { GrammarLesson, LessonBlock, LessonExample } from "@/constants/grammar-lessons/types";

const BADGES = [
  "bg-[#4fd1ff]/[0.14] text-[#4fd1ff]",
  "bg-[#a78bfa]/[0.16] text-[#a78bfa]",
  "bg-[#f472b6]/[0.14] text-[#f472b6]",
  "bg-[#34d399]/[0.14] text-[#34d399]",
  "bg-[#fbbf24]/[0.16] text-[#fbbf24]"
];

export function GrammarLessonRenderer({ lesson }: { lesson: GrammarLesson }) {
  return (
    <div className="space-y-4">
      {lesson.blocks.map((block, index) => <LessonCard key={`${block.type}-${index}`} block={block} index={index} />)}
      <div className="rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-[14px]">
        <h2 className="mb-2 text-[13px] font-bold text-[#eef0f5]">Quick review</h2>
        <ul className="list-disc space-y-1 pl-5 text-[13px] leading-6 text-[#8b93a5]">
          {lesson.review.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

function LessonCard({ block, index }: { block: LessonBlock; index: number }) {
  const badge = BADGES[index % BADGES.length];
  return (
    <article className="grammar-lesson-card px-[18px] py-5">
      <div className="mb-3 flex items-center gap-3">
        <span className={`flex h-[34px] min-w-[34px] items-center justify-center rounded-[10px] px-2 text-[13px] font-black ${badge}`}>{String(index + 1).padStart(2, "0")}</span>
        <h2 className="text-[16px] font-bold text-[#eef0f5]">{block.title}</h2>
      </div>
      {block.type === "text" ? <>
        <p className="text-[13.5px] leading-6 text-[#c0c5d1]">{block.body}</p>
        {block.examples ? <ExampleList examples={block.examples} /> : null}
      </> : null}
      {block.type === "table" ? <>
        {block.intro ? <p className="mb-3 text-[13.5px] leading-6 text-[#8b93a5]">{block.intro}</p> : null}
        <div className="overflow-x-auto rounded-xl border border-[#262b38]">
          <table className="w-full min-w-[420px] border-collapse text-left text-[12px]">
            <thead className="bg-[#10131c] text-[#8b93a5]"><tr>{block.headings.map((heading) => <th key={heading} className="border-b border-[#262b38] px-3 py-2 font-semibold">{heading}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className={rowIndex % 2 ? "bg-[#181c27]" : "bg-[#1b1f2b]"}>{row.map((cell, cellIndex) => <td key={cellIndex} className={`border-b border-[#262b38] px-3 py-2.5 leading-5 ${block.highlightCells?.includes(cell) ? "font-bold text-[#fb7185]" : cellIndex === 0 ? "font-semibold text-[#eef0f5]" : "text-[#c0c5d1]"}`}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </> : null}
      {block.type === "mistakes" ? <div className="space-y-2">{block.items.map((item) => <div key={item.incorrect} className="rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3">
        <p className="text-[12.5px] leading-5 text-[#fb7185]">✗ {item.incorrect}</p>
        <p className="mt-1 text-[12.5px] leading-5 text-[#34d399]">✓ {item.correct}</p>
        <p className="mt-1 text-[11.5px] leading-5 text-[#8b93a5]">{item.explanation}</p>
      </div>)}</div> : null}
      {block.type === "examples" ? <>
        {block.intro ? <p className="mb-3 text-[13.5px] leading-6 text-[#8b93a5]">{block.intro}</p> : null}
        <ExampleList examples={block.examples} />
      </> : null}
      {block.type === "tip" ? <p className="rounded-xl bg-[#1b1f2b] p-3 text-[13px] leading-6 text-[#c0c5d1]">💡 {block.body}</p> : null}
    </article>
  );
}

function ExampleList({ examples }: { examples: LessonExample[] }) {
  return <div className="mt-3 space-y-2">{examples.map((example, index) => <div key={`${example.text}-${index}`} className="border-l-2 border-[#262b38] py-0.5 pl-3">
    <p className="text-[13px] italic leading-5 text-[#eef0f5]">{highlight(example.text, example.highlight)}</p>
    {example.note ? <p className="mt-0.5 text-[11px] text-[#5d6577]">{example.note}</p> : null}
  </div>)}</div>;
}

function highlight(text: string, phrase?: string) {
  if (!phrase || !text.includes(phrase)) return text;
  const [before, ...rest] = text.split(phrase);
  return <>{before}<strong className="not-italic font-bold text-[#4fd1ff]">{phrase}</strong>{rest.join(phrase)}</>;
}
