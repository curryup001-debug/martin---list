
import { ChecklistCategory } from './types';

export const WEBINAR_URL = 'https://line.me/ti/g2/PBZiwOFZ6jKrIgQ7rZF1tBV2ky9v9q27RGNMFA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default';

// 修正後的圖床直接連結 (加上 i. 前綴與 .png 結尾)
export const MARTIN_AVATAR_URL = 'https://i.meee.com.tw/9FdALzx.jpg';

export const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    title: '觀察「馬桶」 (最準確！)',
    icon: '🚽',
    items: [
      { id: 'stool_sticky', category: '馬桶', text: '大便黏馬桶，沖不乾淨（濕氣重）。' },
      { id: 'stool_shape', category: '馬桶', text: '大便不成形，或是像羊大便一樣乾硬。' },
      { id: 'stool_undigested', category: '馬桶', text: '便便裡常看到沒消化的食物殘渣（完穀不化）。' },
    ],
  },
  {
    title: '觀察「口腔」',
    icon: '👄',
    items: [
      { id: 'oral_tongue', category: '口腔', text: '舌苔厚厚一層（白色代表寒濕，黃色代表濕熱）。' },
      { id: 'oral_breath', category: '口腔', text: '早上起床嘴巴有酸臭味、口氣重。' },
      { id: 'oral_sore', category: '口腔', text: '容易嘴破、嘴唇總是乾乾紅紅的。' },
    ],
  },
  {
    title: '觀察「體態與睡眠」',
    icon: '🛌',
    items: [
      { id: 'body_potbelly', category: '體態與睡眠', text: '四肢瘦瘦的，但肚子圓圓鼓鼓的（青蛙肚）。' },
      { id: 'body_flabby', category: '體態與睡眠', text: '肉摸起來鬆鬆軟軟（虛胖），不是結實的肌肉。' },
      { id: 'sleep_drool', category: '體態與睡眠', text: '睡覺容易流口水、磨牙，或整晚翻來覆去。' },
    ],
  },
  {
    title: '觀察「飲食反應」',
    icon: '🍱',
    items: [
      { id: 'eat_bloating', category: '飲食反應', text: '吃完飯常常喊肚子脹、不舒服。' },
      { id: 'eat_notgrowing', category: '飲食反應', text: '食慾很好一直吃，但就是不長肉（胃強脾弱）。' },
    ],
  },
];
