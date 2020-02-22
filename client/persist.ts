export default class Persist {
  static get(key: string): any {
    if (key in localStorage) {
      return JSON.parse(localStorage.getItem(key) as string);
    }
    return null;
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
