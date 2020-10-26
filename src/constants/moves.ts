export const attacks = ['jab', 'tilt', 'smash', 'special', 'air', 'dash', 'grab', 'throw'];
export const directions = ['forward', 'up', 'down', 'back', 'neutral'];
export const movement = ['full hop', 'short hop', 'walk', 'run', 'dash'];
export const modifiers = ['delayed', 'buffered', 'reverse'];

const setIndexMap = {
    0: 'attack',
    1: 'direction',
    2: 'movement',
    3: 'modifier',
} as const;

type MapIndex = keyof typeof setIndexMap;

const capitalize = (input: string) => input.replace(/\b\w/g, (text) => text.toUpperCase());

// Generate grouped options array for react-select:
// { label: 'attack', options: [{ value: 'jab', label: 'Jab', type: 'attack' }, ...etc] }
export const moveOptions = Array.from([attacks, directions, movement, modifiers], (set, index) => ({
    label: setIndexMap[index as MapIndex],
    options: set.map((move) => ({ value: move, label: capitalize(move), type: setIndexMap[index as MapIndex] })),
}));

export const moves = moveOptions.map((group) => group.options).flat();
