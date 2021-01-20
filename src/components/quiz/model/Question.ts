export interface Question {
  readonly id: number;
  readonly title: string;
  answers: string[];
  readonly correctAnswer: string;
  readonly answerDetail?: {
    answerTitle: string;
    answerText: string;
    answerPictureUrl?: string;
  };
}
