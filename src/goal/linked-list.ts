export interface LinkedListValue<T> {
  value: T;
  next?: object;
}

export interface LinkedList<T> {
  get(index: object): LinkedListValue<T>;
  insert(afterIndex: object, index: object, value: T): void;
  clear(): void;
}

function isLinkedListLikeLike(value: object): value is { get?: unknown, insert?: unknown, clear?: unknown } {
  return !!value;
}

export function isLinkedListLike(value: object): value is LinkedList<unknown> {
  return (
    isLinkedListLikeLike(value) &&
    typeof value.get === "function" &&
    typeof value.insert === "function" &&
    typeof value.clear === "function"
  );
}
