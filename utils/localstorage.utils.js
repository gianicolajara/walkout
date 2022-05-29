export const setItem = (key = null, value = null) => {
  if (key === null || value === null) return null;

  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key = null) => {
  if (key === null) return null;

  return JSON.parse(window.localStorage.getItem(key));
};
