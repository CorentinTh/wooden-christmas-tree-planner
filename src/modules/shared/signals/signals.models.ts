import { Signal, createSignal } from 'solid-js';

export { createStoredSignal };

function createStoredSignal<T>(key: string, defaultValue: T, { storage = localStorage }: { storage?: Storage } = {}): Signal<T> {
  const storedValue = storage.getItem(key);

  const initialValue: T = storedValue ? JSON.parse(storedValue) : defaultValue;

  const [value, setValue] = createSignal<T>(initialValue);

  const setValueAndStore = ((arg) => {
    const v = setValue(arg as any);
    storage.setItem(key, JSON.stringify(v));
    return v;
  }) as typeof setValue;

  return [value, setValueAndStore];
}
