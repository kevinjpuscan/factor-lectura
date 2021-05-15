const storage = window.localStorage;

export default {
  save(key, value) {
    const plainValue = JSON.stringify(value);
    storage.setItem(key, plainValue);
  },
  clear(key) {
    storage.removeItem(key);
  },
  get(key) {
    const value = storage.getItem(key);
    if (!value) {
      return null
    }
    return JSON.parse(value);
  }
}