
import React from 'react';
import { WEBINAR_URL } from '../constants';

interface Props {
  count: number;
  advice: string | null;
  loading: boolean;
  onClose: () => void;
}

const ResultOverlay: React.FC<Props> = ({ count, advice, loading, onClose }) => {
  const isConcerned = count >= 2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[85vh] overflow-y-auto">
        {/* Status Header */}
        {/* Status Header - Clean Style */}
        <div className={`p-5 md:p-10 text-center shrink-0 animate-slide-up-fade relative overflow-hidden`} style={{ animationDelay: '0.1s' }}>
          {/* Top colored line */}
          <div className={`absolute top-0 left-0 right-0 h-3 ${isConcerned ? 'bg-gradient-to-r from-red-400 to-orange-400' : 'bg-gradient-to-r from-emerald-400 to-teal-400'}`}></div>

          <div className="mb-6">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-6xl shadow-sm border-4 ${isConcerned ? 'bg-red-50 border-red-100' : 'bg-emerald-50 border-emerald-100'} animate-bounce`}>
              {isConcerned ? '🧐' : '🥳'}
            </div>
          </div>

          <h3 className={`text-2xl md:text-4xl font-black mb-2 tracking-wide ${isConcerned ? 'text-slate-800' : 'text-slate-800'}`}>
            {isConcerned ? `檢測結果：勾選了 ${count} 項` : `目前狀況：勾選了 ${count} 項`}
          </h3>
          <p className="text-xl text-slate-500 font-medium">
            {isConcerned ? '馬丁藥師有些建議想給您...' : '看起來維持得不錯喔！'}
          </p>
        </div>

        <div className="p-5 md:p-12">
          {/* Main Title */}
          <div className="text-center mb-8 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl font-bold text-slate-700">
              您的孩子很有可能是
            </p>
            <h4 className={`text-2xl md:text-4xl font-black mt-2 mb-2 ${isConcerned ? 'text-[#EF4444]' : 'text-[#10B981]'}`}>
              {isConcerned ? '「脾胃吸收力卡關」' : '「吸收力尚算穩定」'} <span className="text-slate-700 text-2xl font-bold whitespace-nowrap">的狀態！</span>
            </h4>
          </div>

          {/* Advice Box */}
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 md:p-8 mb-10 relative animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💡</span>
              <p className="font-bold text-[#92400E] text-xl">馬丁藥師建議：</p>
            </div>
            {loading ? (
              <div className="flex flex-col items-center py-8 relative overflow-hidden rounded-xl bg-orange-100/50">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent w-full h-full animate-scan"></div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 z-10 animate-bounce">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <p className="text-orange-800 text-lg font-bold z-10 animate-pulse">馬丁藥師正在詳細診斷中...</p>
                <p className="text-orange-600/70 text-sm mt-1 z-10">分析各項指標數據...</p>
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed text-lg whitespace-pre-line italic">
                {advice || '分析生成失敗，請返回重新測量。'}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="space-y-6 text-center animate-slide-up-fade" style={{ animationDelay: '0.4s' }}>
            <a
              href={WEBINAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center w-full py-6 px-4 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] overflow-hidden"
            >
              <span className="text-sm md:text-base font-medium mb-1 opacity-95">馬丁藥師會在講座中，教你怎麼調整</span>
              <span className="text-sm md:text-base font-bold text-black mb-3 animate-pulse">📢 再偷偷告訴你：講座還有<span className="whitespace-nowrap">驚喜小禮物🎁</span></span>

              <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 w-full">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <span className="text-lg md:text-2xl tracking-tight whitespace-nowrap">
                    👉 點我進社群
                  </span>
                </div>
                <span className="text-lg md:text-2xl tracking-tight font-bold whitespace-nowrap">
                  <span className="hidden md:inline">，</span>進群密碼：Martin66
                </span>
              </div>
              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine transition-all duration-700" />
            </a>

            <p className="text-slate-400 text-sm font-medium">
              *講座開播前提醒你*
            </p>

            <button
              onClick={onClose}
              className="text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
            >
              關閉分析報告
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultOverlay;
