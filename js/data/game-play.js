import songs from './songs.js';

const GameSettings = {
  MAX_GAME_TIME: 300,
  MAX_QUICK_ANSWER_TIME: 30,
  MIN_TIMER_DANGER_ZONE: 30,
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10
};

const QuestionTypes = {
  QUESTION_ARTIST: `artist`,
  QUESTION_GENRE: `genre`
};

const GameWords = {
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунду`, `секунды`, `секунд`],
  SCORE: [`балл`, `балла`, `баллов`],
  FAST: [`быстрый`, `быстрых`, `быстрых`],
  MISTAKES: [`ошибку`, `ошибки`, `ошибок`]
};

const initialState = {
  timer: null,
  mistakes: 0,
  level: 0,
  get time() {
    if (this.timer === null) {
      return GameSettings.MAX_GAME_TIME;
    }
    return this.timer.value;
  },
  resetToDefault() {
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
  }
};

const questions = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[1].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[1].artist
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[2].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[0].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[0].artist
  },
  {
    type: `genre`,
    title: `Выберите поп треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[4].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[2].src,
    answerList: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[2].artist
  },
  {
    type: `genre`,
    title: `Выберите электронные треки`,
    answerList: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[5].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[5].src,
    answerList: [songs[3], songs[4], songs[5]],
    correctAnswer: songs[5].artist
  },
  {
    type: `genre`,
    title: `Выберите джаз треки`,
    answerList: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: [songs[0].name]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[4].src,
    answerList: [songs[3], songs[4], songs[5]],
    correctAnswer: songs[4].artist
  },
  {
    type: `genre`,
    title: `Выберите рок треки`,
    answerList: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: [songs[1].name]
  }
];

const currentPlayer = {
  score: 0,
  remainingTime: initialState.time,
  remainingNotes: GameSettings.MAX_COUNT_NOTES - initialState.mistakes,
  answers: [],
  get spentTime() {
    return GameSettings.MAX_GAME_TIME - initialState.time;
  },
  resetToDefault() {
    this.score = 0;
    this.remainingTime = initialState.time;
    this.remainingNotes = GameSettings.MAX_COUNT_NOTES - initialState.mistakes;
    this.answers = [];
  }
};

const playersStats = [4, 5, 8, 10, 11, 15, 19];

export {GameSettings, GameWords, initialState, questions, currentPlayer, playersStats, QuestionTypes};