/**
 * Sleep for provided number of milliseconds
 */
export function sleep(time: number): Promise<null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(null);
    }, time);
  });
}

/**
 * Debug mode logs
 */
export function LOG(...args): void {
  console.log("NEW:", ...args);
}

export function debounce(func: Function, wait: number, immediate?: boolean): Function {
  let timeout: number;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
