
/**
 * 本地規則引擎建議系統
 * 移除 API Key 依賴，改為根據勾選項目自動生成馬丁藥師建議
 */

const ADVICE_MAPPING: Record<string, string> = {
  // 觀察「馬桶」
  'stool_sticky': '大便黏馬桶代表體內「濕氣」過重，這會像一層膜一樣阻礙營養吸收。',
  'stool_shape': '便便不成形或乾硬，顯示腸道運化失調，營養還沒吸收就排出了。',
  'stool_undigested': '完穀不化是典型的脾虛表現，說明脾胃已經「罷工」，沒辦法分解食物。',
  
  // 觀察「口腔」
  'oral_tongue': '舌苔厚代表體內有積食或寒濕，就像過濾網塞住，吃再好也補不進去。',
  'oral_breath': '口氣重通常是「胃火」或消化不良的信號，這會影響孩子的成長動能。',
  'oral_sore': '容易嘴破顯示體內陰陽失衡，這類孩子通常吸收熱量的效率極低。',
  
  // 觀察「體態與睡眠」
  'body_potbelly': '四肢瘦肚子大是常見的「脾虛」體態，營養都堆在肚子變成廢物，沒去到骨頭。',
  'body_flabby': '肉鬆鬆軟軟代表「氣血」不足以支撐肌肉生長，這是吸收轉化率低的警訊。',
  'sleep_drool': '睡覺流口水或磨牙，在中醫看來是脾胃不安穩，夜間生長激素分泌會受干擾。',
  
  // 觀察「飲食反應」
  'eat_bloating': '吃完就脹氣代表消化酶活性不足，營養在肚子裡發酵而不是被利用。',
  'eat_notgrowing': '「胃強脾弱」最可惜，孩子吃很多但脾臟轉化不出來，營養都白費了。'
};

/**
 * 模擬馬丁藥師分析
 * @param selectedIds 勾選項目的 ID 列表
 */
export const getMartinAdvice = async (selectedIds: string[]): Promise<string> => {
  // 模擬網路延遲 2 秒，讓家長感覺到分析的過程
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (selectedIds.length === 0) {
    return "看來目前孩子的狀況還不錯！不過身高管理是長期的，建議家長還是要持續觀察，維持良好的脾胃環境。";
  }

  // 根據勾選項選取前 2 個最具代表性的點進行分析，避免文字過長
  const representativeIds = selectedIds.slice(0, 2);
  const insights = representativeIds.map(id => ADVICE_MAPPING[id]).filter(Boolean);
  
  let baseAdvice = "";
  const count = selectedIds.length;

  if (count >= 4) {
    baseAdvice = `我看了一下，孩子目前有 ${count} 項特徵，這屬於「深度吸收卡關」。${insights.join(' ')} 這種情況，補再多鈣片或蛋白質，身體也很難轉換成成長動力，反而加重脾胃負擔。`;
  } else if (count >= 2) {
    baseAdvice = `孩子目前有 ${count} 項徵兆，代表脾胃吸收力已經開始下降。${insights.join(' ')} 如果不趕快處理「運化」問題，孩子很容易進入生長遲緩期。`;
  } else {
    baseAdvice = `雖然只有 ${count} 項徵兆，但細節藏在魔鬼裡。${insights.join(' ')} 建議在症狀變嚴重前，先幫孩子微調飲食習慣。`;
  }

  const finalAdvice = `
${baseAdvice}

這就是我常說的「虛受補」——不是營養不夠，是吸收不了。我強烈建議您來聽我的免費直播，我會教你如何精準調整「開脾」順序，讓孩子吃進去的每一口都變成身高！
  `.trim();

  return finalAdvice;
};
