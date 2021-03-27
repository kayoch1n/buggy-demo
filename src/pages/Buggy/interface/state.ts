import { Effect, Reducer } from 'umi';

export interface IBuggyStatus {
  retCode?: number;
  retMsg?: string;
}

export interface IBuggyModelState {
  buggyStatus: Partial<IBuggyStatus>;
}

export enum IBuggyEffects {
  trigger = 'trigger',
}

export interface IBuggyModelType {
  namespace: string;
  state: IBuggyModelState;
  effects: {
    [key in keyof typeof IBuggyEffects]: Effect;
  };
  reducers: {
    MERGE: Reducer<IBuggyModelState>
  }
}