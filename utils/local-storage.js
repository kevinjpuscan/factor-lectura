const storage = window.localStorage;

export default {
  save(key, value) {
    const plainValue = JSON.stringify(value);
    storage.setItem(key, plainValue);
  },
  get(key) {
    const value = storage.getItem(key);
    if (!value) {
      return null
    }
    return JSON.parse(value);
  }
}