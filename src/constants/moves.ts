export const attacks = ['jab', 'tilt', 'smash', 'special', 'air', 'dash', 'grab', 'throw'];
export const directions = ['forward', 'up', 'down', 'back', 'neutral'];
export const movement = ['full hop', 'short hop', 'walk', 'run', 'dash'];
export const modifiers = ['delayed', 'buffered', 'reverse'];

const setIndexMap = {
    0: 'attack',
    1: 'direction',
    2: 'movement',
    3: 'modifier',
};

type MapIndex = keyof typeof setIndexMap;

// Generate grouped options array for react-select:
// { label: 'attack', options: ['jab', 'tilt', ...etc] }
export const moveOptions = Array.from([attacks, directions, movement, modifiers], (set, index) => ({
    label: setIndexMap[index as MapIndex],
    options: set.map((move) => ({ name: move, type: setIndexMap[index as MapIndex] })),
}));

export const moves = moveOptions.map((group) => group.options).flat();
