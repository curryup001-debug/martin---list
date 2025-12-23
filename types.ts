
export interface ChecklistItem {
  id: string;
  category: string;
  text: string;
  description?: string;
}

export interface ChecklistCategory {
  title: string;
  icon: string;
  items: ChecklistItem[];
}

export interface SelectionState {
  [key: string]: boolean;
}
