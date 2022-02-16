export const LOCAL_STORAGE_KEYS = {
  jwtToken: 'jwtToken',
};

export const accessLocalStorage = {
  setValue: (key, value) => {
    localStorage.setItem(key, value);
  },
  getValue: key => {
    return localStorage.getItem(key);
  },
  removeItem: key => {
    localStorage.removeItem(key);
  },
  setJSONData: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getJSONData: key => {
    return JSON.parse(localStorage.getItem(key));
  },
};

export const objectsAgainstKeys = key => {
  return {
    setFunction: value => accessLocalStorage.setValue(key, value),
    removeFunction: () => accessLocalStorage.removeItem(key),
    setJSONDataFunction: value => accessLocalStorage.setJSONData(key, value),
    getJSONDataFunction: () => accessLocalStorage.getJSONData(key),

    getValue: accessLocalStorage.getValue(key),
  };
};
