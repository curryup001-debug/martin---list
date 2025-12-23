
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getMartinAdvice = async (selectedItems: string[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const prompt = `
    你是一位專業的兒童身高管理專家「馬丁藥師」。
    家長為其孩子勾選了以下「脾胃吸收力卡關」的症狀：
    ${selectedItems.join(', ')}

    請以溫暖、專業、像朋友一樣的「馬丁藥師」口吻，針對這些症狀給予大約 150 字的專業分析與具體建議。
    重點在於告訴家長為什麼這些現象代表吸收力出問題，以及這如何影響孩子長高。
    最後，請熱情地邀請他們參加「我的免費直播：突破孩子身高天花板」。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "哎呀，馬丁藥師現在有點忙。但看到你家孩子的狀況，建議一定要注意脾胃調理。記得點擊下方連結參加我的免費直播，我會在那裡詳細解析！";
  }
};
