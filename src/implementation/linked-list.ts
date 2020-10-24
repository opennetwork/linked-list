import { LinkedList, Node } from "../goal/linked-list";

export interface AbstractMap<T> {
  get(index: object): T | undefined;
  set(index: object, value: T): void;
}

function insertMany<T>(list: LinkedList<T>, afterIndex: object, many: Map<object, T>) {
  const entryArray = Array.from(many.entries());
  entryArray.forEach(
    ([index, value], arrayIndex, array) => {
      const before = array[arrayIndex - 1];
      list.insert(before ? before[0] : afterIndex, index, value);
    }
  );
}

export abstract class AbstractLinkedList<T> implements LinkedList<T> {

  protected constructor(private map: AbstractMap<Node<T>>, initial?: Map<object, T>) {
    if (initial) {
      insertMany(this, undefined, initial);
    }
  }

  protected setMap(map: AbstractMap<Node<T>>) {
    this.map = map;
  }

  get(pointer: object): Node<T> | undefined {
    return this.map.get(pointer);
  }

  set(pointer: object, value: T): void {
    const node = this.get(pointer);
    if (node) {
      this.map.set(pointer, {
        ...node,
        value
      });
    } else {
      throw new Error("Pointer does not belong in this list");
    }
  }

  insert(after: object, pointer: object, value: T): void {
    if (!after) {
      this.clear();
    }
    const reference = after && this.get(after);
    if (after && !reference) {
      throw new Error("Pointer does not belong in this list");
    }
    this.map.set(pointer, {
      value,
      next: reference ? reference.next : undefined
    });
    if (after) {
      this.map.set(after, {
        ...reference,
        next: pointer
      });
    }
  }

  abstract clear(): void;

}
