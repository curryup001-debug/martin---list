
import React from 'react';
import { MARTIN_AVATAR_URL } from '../constants';
import Avatar from './Avatar';

const Header: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('checklist-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-20 px-4 text-center text-white bg-gradient-to-b from-[#F97316] to-[#EA580C]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="bg-orange-700/50 border border-orange-400/30 px-6 py-1.5 rounded-full text-sm font-medium mb-8">
          兒童身高管理專家
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          你的孩子是 <span className="whitespace-nowrap"><span className="text-[#FFD700]">「虛受補」</span> 嗎？</span>
        </h1>

        {/* Subtitles */}
        <div className="space-y-2 mb-12 px-2 md:px-0">
          <p className="text-xl md:text-2xl text-orange-50">為什麼補鈣、補蛋白質都沒用？</p>
          <p className="text-lg md:text-xl text-orange-100/80">
            花 <span className="text-[#FFD700] font-bold">1 分鐘</span> 快速檢測，找出孩子長不高的<span className="whitespace-nowrap">「卡關」原因。</span>
          </p>
        </div>

        {/* Intro Card */}
        <div className="glass-card w-full max-w-3xl rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 text-left mb-12">
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 rounded-full border-4 border-white overflow-hidden shadow-2xl">
            <Avatar src={MARTIN_AVATAR_URL} alt="馬丁藥師" className="w-full h-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FFD700] text-2xl">⭐</span>
              <h2 className="text-2xl font-bold">馬丁藥師的話</h2>
            </div>
            <p className="text-orange-50 leading-relaxed text-lg mb-4">
              「很多家長以為孩子吃得多就會長，其實不然。若脾胃運化功能差，吃進去的營養就像倒進漏水的桶子。請依據孩子<span className="whitespace-nowrap underline decoration-[#FFD700] underline-offset-4 font-bold">最近一週</span>的狀況勾選下方清單。」
            </p>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={scrollToContent}
          className="bg-white text-[#EA580C] px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2 hover:bg-orange-50 transition-all hover:scale-105 shadow-xl"
        >
          開始檢測
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
      <div id="checklist-start" className="absolute bottom-0"></div>
    </section>
  );
};

export default Header;
