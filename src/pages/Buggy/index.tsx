import { useDispatch } from 'dva';
import React from 'react';
import { IBuggyEffects } from './interface/state';
import { getBuggyEffects } from './models/Buggy';

interface IBuggyPageProp {}

const BuggyPage: React.FC<IBuggyPageProp> = () => {
  const dispatch = useDispatch();
  async function handler() {
    const resp = await dispatch({ type: getBuggyEffects(IBuggyEffects.trigger), payload: {data: 1}});
    console.log(JSON.stringify(resp));
  }
  return <div>
    <button onClick={handler}>buggy</button>
  </div>
}

export default BuggyPage;