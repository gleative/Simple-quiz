import { Question } from '../components/quiz/model/Question';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleAnswers = (array: string[]) => {
  console.log('ARRAY BEFORE SHUFFLE: ', array);

  let currentIndex: number = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  console.log('SHUFFLED: ', array);

  // questionAnswers = array;

  return array;

  // console.log('QuestionAnswers: ', questionAnswers);
};

export const Questions: Question[] = [
  {
    id: 1,
    title: 'In what city did covid-19 originate?',
    answers: shuffleAnswers(['Hong Kong', 'Wuhan', 'Barcelona', 'Washington DC']),
    correctAnswer: 'Wuhan',
    answerDetail: {
      answerTitle: 'The search starts in Wuhan',
      answerText: `An international team of epidemiologists, virologists and researchers with expertise in public health, animal health and food safety will lead the WHO’s COVID-19 investigation. The agency has not released their names.

      The team held its first virtual meeting, including researchers in China, on 30 October, and is reviewing the preliminary evidence and developing study protocols, says the WHO. The initial phase of investigations in Wuhan will probably be conducted by researchers already in China, and international researchers will travel to the country after reviewing those results, the agency says.
      
      In Wuhan, researchers will take a closer look at the Huanan meat and animal market, which many of the earliest people diagnosed with COVID-19 had visited. What part the market played in the virus’s spread remains a mystery. Early investigations sampled frozen animal carcasses at the market, but none found evidence of SARS-CoV-2, according to a 5 November report of the WHO mission’s terms of reference. However, environmental samples, taken mostly from drains and sewage, did test positive for the virus. “Preliminary studies have not generated credible leads to narrow the area of research,” the report states.
      
      The WHO mission will investigate the wild and farmed animals sold at the market, including foxes, raccoons (Procyon lotor) and sika deer (Cervus nippon). They will also investigate other markets in Wuhan, and trace the animals’ journeys through China and across borders. The investigators will prioritize animals that are known to be susceptible to the virus, such as cats and mink.
      
      The team will also look at Wuhan’s hospital records, to find out whether the virus was spreading before December 2019. The researchers will interview the first people identified to have had COVID-19, to find out where they might have been exposed, and will test blood samples from medical staff, laboratory technicians and farm workers collected in the weeks and months before December, looking for antibodies against SARS-CoV-2. The report acknowledges that some of this work might already be under way in China.`,
    },
  },
  {
    id: 2,
    title: 'Who was the 35th presidnt in the USA?',
    answers: shuffleAnswers(['Donald Trump', 'John F. Kennedy', 'Dwight D. Eisenhower', 'Ronald Reagan']),
    correctAnswer: 'John F. Kennedy',
  },
  {
    id: 3,
    title: 'What is Vegemite?',
    answers: shuffleAnswers(['Food spread', 'Vegetarian ingredient', 'Termite', 'Newspaper']),
    correctAnswer: 'Food spread',
  },
];
