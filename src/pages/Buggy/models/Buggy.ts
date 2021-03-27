import { getInfo } from "@/services/GetInfo";
import { IBuggyEffects, IBuggyModelState, IBuggyModelType } from "../interface/state";

export const namespace = 'buggy';

export function getBuggyEffects(effect: keyof typeof IBuggyEffects) {
  return `${namespace}/${effect}`;
}

const initState: IBuggyModelState = {
  buggyStatus: {}
}

const BuggyModel: IBuggyModelType = (console.log('hello'), {
  namespace,
  state: {...initState},
  effects: {
    *trigger({payload}, {put, call}) {
      const resp = yield call(getInfo, payload);
      console.log(`trigger - ${JSON.stringify(resp)}`);
      yield put({
        type: 'MERGE',
        payload: {key: 'buggyStatus', value: resp}
      });
      return resp;
    }
  },
  reducers: {
    MERGE(state, {payload}) {
      const ret = {...state, [payload.key]: payload.value};
      console.log({ update: ret, old: state});
      return ret;
    }
  }
})

export default BuggyModel;