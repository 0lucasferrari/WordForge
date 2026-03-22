const STORAGE_KEY = 'wordforge_words';

const DEFAULT_WORDSET = [
  { word: 'resilient', description: 'Able to recover quickly from difficulties.', useCase: 'After the failure of the first project, she remained resilient and tried again.' },
  { word: 'improve', description: 'To make something better.', useCase: 'Practicing English every day can improve your vocabulary.' },
  { word: 'focus', description: 'To concentrate attention on something.', useCase: 'You should focus on learning a few words every day.' },
  { word: 'challenge', description: 'A difficult task that tests ability.', useCase: 'Learning a new language can be a big challenge.' },
  { word: 'achieve', description: 'To successfully reach a goal.', useCase: 'She worked hard to achieve fluency in English.' },
  { word: 'curious', description: 'Interested in learning or knowing more.', useCase: 'A curious student always asks many questions.' },
  { word: 'efficient', description: 'Working in a well-organized and effective way.', useCase: 'Using flashcards is an efficient way to learn vocabulary.' },
  { word: 'practice', description: 'To do something repeatedly to improve.', useCase: 'He practices English speaking every morning.' },
  { word: 'opportunity', description: 'A chance to do something.', useCase: 'Traveling abroad gave her the opportunity to practice English.' },
  { word: 'knowledge', description: 'Information and skills acquired through learning.', useCase: 'Reading books increases your knowledge.' },
];

function withIds(words) {
  return words.map((w) => ({
    ...w,
    id: w.id ?? crypto.randomUUID(),
  }));
}

export function getFromStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsed = data ? JSON.parse(data) : [];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      const defaultWithIds = withIds(DEFAULT_WORDSET);
      saveToStorage(defaultWithIds);
      return defaultWithIds;
    }
    return parsed;
  } catch {
    const defaultWithIds = withIds(DEFAULT_WORDSET);
    saveToStorage(defaultWithIds);
    return defaultWithIds;
  }
}

export function saveToStorage(words) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
}
