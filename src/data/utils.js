export function deepFreeze(object) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach((prop) => {
    const value = object[prop];
    if (
      value !== null &&
      (typeof value === 'object' || typeof value === 'function') &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });
  return object;
}


