export interface UserProduction {
  id: number;
  madeSentences: string[];
}

export interface Sentence {
  userId: string,
  sentence: string;
}

export interface FinalText {
  id: string;
  category: string;
  date: string;
  sentences: Sentence[];
}
