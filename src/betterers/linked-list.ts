import { Betterer } from "@betterer/betterer/dist/types";
import { isLinkedListLike, isLinkedListLike as isLinkedListLikeFn, LinkedList } from "../goal/linked-list";
import { ok } from "assert";

export function getLinkedListLikeBetter(value: object): Betterer<boolean> {
  return {
    test() {
      return isLinkedListLikeFn(value);
    },
    constraint(value) {
      return value;
    },
    goal: true
  };
}

export function isLinkedListFunctioning(get: () => LinkedList<object>): Betterer<boolean> {
  return {
    test() {
      const list = get();
      ok(isLinkedListLike(list));

      const head = {},
        headValue = {},
        next = {},
        nextValue = {},
        final = {},
        finalValue = {};

      list.insert(undefined, head, headValue);
      list.insert(head, next, nextValue);
      list.insert(next, final, finalValue);

      const headResult = list.get(head),
        nextResult = list.get(next),
        finalResult = list.get(final);

      ok(headResult);
      ok(nextResult);
      ok(finalResult);

      ok(headResult.value === headValue);
      ok(nextResult.value === nextValue);
      ok(finalResult.value === finalValue);

      ok(headResult.next === next);
      ok(nextResult.next === final);
      ok(!finalResult.next);

      return true;
    },
    constraint(value) {
      return value;
    },
    goal: true
  };
}

export function doesLinkedListClearWhenInsertedNewHead(get: () => LinkedList<object>): Betterer<boolean> {
  return {
    test() {
      const list = get();
      ok(isLinkedListLike(list));

      const head = {},
        headValue = {},
        next = {},
        nextValue = {},
        final = {},
        finalValue = {};

      list.insert(undefined, head, headValue);
      list.insert(head, next, nextValue);
      list.insert(next, final, finalValue);

      ok(list.get(next));

      list.insert(undefined, head, headValue);

      ok(!list.get(next));
      ok(!list.get(final));

      return true;
    },
    constraint(value) {
      return value;
    },
    goal: true
  };
}

export function doesLinkedListGetInitialised(get: (map: Map<object, object>) => LinkedList<object>): Betterer<boolean> {
  return {
    test() {

      const head = {},
        headValue = {},
        next = {},
        nextValue = {},
        final = {},
        finalValue = {};

      const map = new Map();
      map.set(head, headValue);
      map.set(next, nextValue);
      map.set(final, finalValue);

      const list = get(map);
      ok(isLinkedListLike(list));

      const headResult = list.get(head),
        nextResult = list.get(next),
        finalResult = list.get(final);

      ok(headResult);
      ok(nextResult);
      ok(finalResult);

      ok(headResult.value === headValue);
      ok(nextResult.value === nextValue);
      ok(finalResult.value === finalValue);

      ok(headResult.next === next);
      ok(nextResult.next === final);
      ok(!finalResult.next);

      return true;
    },
    constraint(value) {
      return value;
    },
    goal: true
  };
}
