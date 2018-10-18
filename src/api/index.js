import Controls from './controls.json';

const DELAY = 1500;
const controlMap = {}

let getControlsPromise;

const getControls = () => {
  if (getControlsPromise) {
    return getControlsPromise;
  }

  getControlsPromise = new Promise(res => {
    setTimeout(() => {
      getControlsPromise = null;
      return res(Controls)
    }, DELAY)
  })

  return getControlsPromise;
}

export default getControls;
