
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import ChecklistSection from './components/ChecklistSection';
import ResultOverlay from './components/ResultOverlay';
import { CHECKLIST_DATA } from './constants';
import { SelectionState } from './types';
import { getMartinAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [selections, setSelections] = useState<SelectionState>({});
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoadingAdvice, setIsLoadingAdvice] = useState(false);

  const selectedCount = useMemo(() => {
    return Object.values(selections).filter(Boolean).length;
  }, [selections]);

  const toggleItem = useCallback((id: string) => {
    setSelections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  const handleAnalyze = async () => {
    setIsResultOpen(true);
    setIsLoadingAdvice(true);
    setAdvice(null); // 重置之前的建議
    
    // 收集選中的 ID
    const selectedIds = Object.keys(selections).filter(id => selections[id]);

    // 呼叫本地模擬分析服務 (內含延遲)
    const result = await getMartinAdvice(selectedIds);
    setAdvice(result);
    setIsLoadingAdvice(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pb-32">
        <ChecklistSection 
          data={CHECKLIST_DATA} 
          selections={selections} 
          onToggle={toggleItem} 
        />
      </main>

      {/* Persistent CTA Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 p-4 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-0.5">當前狀態</p>
            <p className="text-[#044E3B] font-black text-lg">
              已勾選 {selectedCount} 項
            </p>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={selectedCount === 0}
            className={`flex-1 sm:flex-none sm:min-w-[280px] py-4 rounded-2xl font-black text-xl transition-all shadow-xl
              ${selectedCount > 0 
                ? 'bg-[#044E3B] text-white hover:bg-[#065F46] active:scale-95 shadow-emerald-100' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'}
            `}
          >
            {selectedCount === 0 ? '請先勾選項目' : '立即獲取分析報告'}
          </button>
        </div>
      </footer>

      {isResultOpen && (
        <ResultOverlay 
          count={selectedCount}
          advice={advice}
          loading={isLoadingAdvice}
          onClose={() => setIsResultOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
