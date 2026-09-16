"use client";

import { CircleHelp } from "lucide-react";
import { useState } from "react";

const OPTIONS = [
  { id: "A", text: "Aumentar progressivamente a dose de fenilefrina" },
  { id: "B", text: "Administrar atropina em bolus" },
  { id: "C", text: "Administrar vasopressina" },
  { id: "D", text: "Iniciar infusão de dobutamina" },
] as const;

const CORRECT = "C";

export function QuizSimulator() {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-black/[0.05] px-5 py-3">
        <span className="text-xs font-semibold text-[#1d1d1f]">
          Simulador de Questão Comentada · QBank
        </span>
        <span className="font-mono text-xs tabular-nums text-[#888]">
          ID: 69aec951
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff0f0] px-3 py-1 text-xs font-semibold text-[#c1272d]">
            <CircleHelp className="size-3.5" />
            QBank Anestesiologia · Farmacologia e Choque
          </span>
          <span className="text-xs font-medium text-[#6e6e73]">
            Clique em uma alternativa para testar o gabarito
          </span>
        </div>
        <p className="mt-4 text-base font-medium leading-relaxed text-[#1d1d1f] sm:text-lg">
          Paciente de 68 anos, hipertenso em uso crônico de enalapril, é
          submetido a colecistectomia sob anestesia geral. Na indução, evolui
          com hipotensão refratária à efedrina e à fenilefrina. Qual a conduta
          farmacológica mais adequada?
        </p>
        <div className="mt-6 space-y-3">
          {OPTIONS.map((option) => {
            const selected = picked === option.id;
            const isCorrect = option.id === CORRECT;
            const show = picked !== null;
            let tone =
              "border-black/[0.08] bg-white text-[#262626] hover:border-[#c1272d]/40 hover:bg-[#fafafa]";
            if (show && isCorrect) {
              tone = "border-[#c1272d]/40 bg-[#fff0f0] text-[#1d1d1f]";
            } else if (show && selected && !isCorrect) {
              tone = "border-black/15 bg-[#f6f6f6] text-[#666]";
            }
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setPicked(option.id)}
                className={`flex w-full items-start gap-3.5 rounded-xl border p-4 text-left transition-[border-color,background-color,transform] active:scale-[0.99] sm:p-[18px] ${tone}`}
              >
                <span
                  className={`flex size-6 flex-none items-center justify-center rounded-full text-xs font-bold ${
                    show && isCorrect
                      ? "bg-[#c1272d] text-white"
                      : "bg-black/[0.06] text-[#404040]"
                  }`}
                >
                  {option.id}
                </span>
                <span className="flex-1 text-sm font-normal leading-normal sm:text-base">
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
        {picked ? (
          <p className="mt-5 rounded-xl bg-[#fff0f0] px-4 py-3 text-sm leading-6 text-[#a01f24]">
            Gabarito: <span className="font-semibold">C · Vasopressina</span>.
            Hipotensão refratária a efedrina e fenilefrina em paciente em uso de
            IECA é o cenário clássico para vasopressina.
          </p>
        ) : null}
      </div>
    </div>
  );
}
