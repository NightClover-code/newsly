import { SetStateAction, Dispatch } from 'react';

export type setWidthType = (value: SetStateAction<number | null>) => void;
export type counterResultType = [number, Dispatch<SetStateAction<number>>];
