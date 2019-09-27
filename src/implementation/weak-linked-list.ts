import { AbstractLinkedList } from "./linked-list";

export class WeakLinkedList<T> extends AbstractLinkedList<T> {

  constructor(initial?: Map<object, T>) {
    super(new WeakMap());
    if (initial) {
      const entryArray = Array.from(initial.entries());
      entryArray.forEach(
        ([index, value], arrayIndex, array) => {
          const before = array[arrayIndex - 1];
          this.insert(before ? before[0] : undefined, index, value);
        }
      );
    }
  }

  clear() {
    this.setMap(new WeakMap());
  }

}
