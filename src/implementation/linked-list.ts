import { LinkedList, LinkedListValue } from "../goal/linked-list";

export interface AbstractMap<T> {
  get(index: object): T;
  set(index: object, value: T): void;
}

export abstract class AbstractLinkedList<T> implements LinkedList<T> {

  protected constructor(private map: AbstractMap<LinkedListValue<T>>) {

  }

  protected setMap(map: AbstractMap<LinkedListValue<T>>) {
    this.map = map;
  }

  get(index: object): LinkedListValue<T> {
    return this.map.get(index);
  }

  insert(afterIndex: object, index: object, value: T): void {
    if (!afterIndex) {
      this.clear();
    }
    const reference = afterIndex && this.get(afterIndex);
    if (afterIndex && !reference) {
      throw new Error("Index does not belong in this list");
    }
    this.map.set(index, {
      value,
      next: reference ? reference.next : undefined
    });
    if (afterIndex) {
      this.map.set(afterIndex, {
        ...reference,
        next: index
      });
    }
  }

  abstract clear(): void;

}
