export interface VocabItem {
  czech: string;
  ukrainian: string;
  pronunciation: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  note?: string;
}

export interface Category {
  icon?: any;
  id: string;
  title: string;
  titleUk: string;
  items: VocabItem[];
}

export const VOCABULARY: Category[] = [
  {
    id: "basic",
    title: "Základní fráze",
    titleUk: "Базові фрази",
    items: [
      {
        czech: "Dobrý den",
        ukrainian: "Добрий день",
        pronunciation: "[dobri: dɛn]",
        level: "A1"
      }
    ]
  }
];
