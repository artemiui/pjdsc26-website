"use client";

import React from "react";

interface AsciiMotifProps {
  className?: string;
  variant?: "plant" | "dna" | "grid";
}

export default function AsciiMotif({ className = "", variant = "plant" }: AsciiMotifProps) {
  if (variant === "dna") {
    return (
      <pre
        aria-hidden="true"
        className={`font-mono text-[10px] sm:text-xs leading-[13px] select-none text-zinc-400/50 dark:text-zinc-600/60 overflow-hidden ${className}`}
      >
        {`   A--T
  G====C
 C======G
  T====A
   C--G
    AT
   T--A
  C====G
 G======C
  A====T
   G--C`}
      </pre>
    );
  }

  if (variant === "grid") {
    return (
      <pre
        aria-hidden="true"
        className={`font-mono text-[9px] leading-[11px] select-none text-zinc-400/40 dark:text-zinc-600/40 ${className}`}
      >
        {`+---+---+---+
| · | · | + |
+---+---+---+
| · | + | · |
+---+---+---+`}
      </pre>
    );
  }

  // Primary variant: ASCII Plant / Bio-Sprout motif
  return (
    <pre
      aria-hidden="true"
      className={`font-mono text-[9px] sm:text-[10px] leading-[12px] select-none text-emerald-700/40 dark:text-emerald-400/30 ${className}`}
    >
      {`      .::.
   .:'    ':.
 .:'  _  _  ':.
 :   (o)(o)   :
 :     ||     :
 ':    ||    :'
   ':. || .:'
      '||'
       ||
      /||\\
     //||\\\\`}
    </pre>
  );
}
