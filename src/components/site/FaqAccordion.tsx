import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left py-5 gap-4"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-base md:text-lg">{item.q}</span>
              {isOpen ? <Minus className="w-5 h-5 text-primary shrink-0" /> : <Plus className="w-5 h-5 shrink-0" />}
            </button>
            {isOpen && (
              <p className="pb-5 pr-8 text-muted-foreground leading-relaxed">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
