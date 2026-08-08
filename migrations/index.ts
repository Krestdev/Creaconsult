import * as migration_20260808_140302 from './20260808_140302';

export const migrations = [
  {
    up: migration_20260808_140302.up,
    down: migration_20260808_140302.down,
    name: '20260808_140302'
  },
];
