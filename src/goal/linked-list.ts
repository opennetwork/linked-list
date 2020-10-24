export interface Node<T> {
  value: T;
  next?: object;
}

export interface LinkedList<T> {
  get(pointer: object): Node<T>;
  set(pointer: object, value: T): void;
  insert(after: object, pointer: object, value: T): void;
  clear(): void;
}

function isLinkedListLikeLike(value: object): value is { get?: unknown, set?: unknown, insert?: unknown, clear?: unknown } {
  return !!value;
}

export function isLinkedListLike(value: object): value is LinkedList<unknown> {
  return (
    isLinkedListLikeLike(value) &&
    typeof value.get === "function" &&
    typeof value.set === "function" &&
    typeof value.insert === "function" &&
    typeof value.clear === "function"
  );
}
