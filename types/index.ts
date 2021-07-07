import { SetStateAction } from 'react';

export type setWidthType = (value: SetStateAction<number | null>) => void;
export type setCounterType = (value: SetStateAction<number>) => void;
