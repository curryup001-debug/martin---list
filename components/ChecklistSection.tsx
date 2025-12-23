
import React from 'react';
import { ChecklistCategory, SelectionState } from '../types';

interface Props {
  data: ChecklistCategory[];
  selections: SelectionState;
  onToggle: (id: string) => void;
}

const ChecklistSection: React.FC<Props> = ({ data, selections, onToggle }) => {
  return (
    <div className="space-y-12 py-12">
      {data.map((category, idx) => (
        <section key={idx} className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
          <div className="bg-[#F8FAFC] px-8 py-6 flex items-center gap-4">
            <span className="text-3xl bg-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm border border-slate-50">{category.icon}</span>
            <h2 className="text-xl font-black text-slate-800 tracking-tight">{category.title}</h2>
          </div>
          <div className="p-8 grid gap-4">
            {category.items.map((item) => (
              <label
                key={item.id}
                className={`flex items-start gap-5 p-6 rounded-2xl border-2 transition-all cursor-pointer group
                  ${selections[item.id]
                    ? 'border-[#EA580C] bg-orange-50/50'
                    : 'border-slate-100 hover:border-orange-200 hover:bg-slate-50/50'}
                `}
              >
                <div className="relative flex items-center mt-1">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selections[item.id] || false}
                    onChange={() => onToggle(item.id)}
                  />
                  <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-300
                    ${selections[item.id] ? 'bg-[#EA580C] border-[#EA580C] rotate-0 scale-100' : 'bg-white border-slate-300 -rotate-12 scale-90 group-hover:scale-100'}
                  `}>
                    {selections[item.id] && (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className={`text-lg leading-snug select-none flex-1 ${selections[item.id] ? 'text-[#EA580C] font-bold' : 'text-slate-600'}`}>
                  {item.text}
                </span>
              </label>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ChecklistSection;
