import { FunFact } from "./FunFact";

const FUN_FACTS = [
  { icon: "🏊", text: "Swimming" },
  { icon: "💻", text: "Coding" },
  { icon: "📚", text: "Reading books" },
  { icon: "🎱", text: "Playing pool when free" },
];

export function FunFactList() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {FUN_FACTS.map((fact, i) => (
        <FunFact key={fact.text} icon={fact.icon} text={fact.text} index={i} />
      ))}
    </div>
  );
}
