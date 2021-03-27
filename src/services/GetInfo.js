export function getInfo(params) {
  console.log(`request: ${JSON.stringify(params)}`);
  return new Promise(resolve => setTimeout(() => resolve({ retCode: 0, retMsg: 'OK'}), 1000));
}