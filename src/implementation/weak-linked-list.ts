import { AbstractLinkedList } from "./linked-list";

export class WeakLinkedList<T> extends AbstractLinkedList<T> {

  constructor(initial?: Map<object, T>) {
    super(new WeakMap(), initial);
  }

  clear() {
    this.setMap(new WeakMap());
  }

}
