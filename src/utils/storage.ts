type defaultTypes = string;

export const LocalStorage = {
  set: <T = defaultTypes>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T = defaultTypes>(key: string): T | null => {
    const item = window ? localStorage.getItem(key) : null;

    if (item) {
      return JSON.parse(item) as T;
    }

    return null;
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  clear: (): void => {
    localStorage.clear();
  }
};

export const SessionStorage = {
  set: <T = defaultTypes>(key: string, value: T): void => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: <T = defaultTypes>(key: string): T | null => {
    const item = window ? sessionStorage.getItem(key) : null;

    if (item) {
      return JSON.parse(item) as T;
    }

    return null;
  },
  remove: (key: string): void => {
    sessionStorage.removeItem(key);
  },
  clear: (): void => {
    sessionStorage.clear();
  }
};
