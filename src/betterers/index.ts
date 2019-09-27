import {
  getLinkedListLikeBetter,
  isLinkedListFunctioning,
  doesLinkedListClearWhenInsertedNewHead,
  doesLinkedListGetInitialised
} from "./linked-list";
import { WeakLinkedList } from "../";

export default {
  getLinkedListLike: getLinkedListLikeBetter(new WeakLinkedList()),
  isLinkedListFunctioning: isLinkedListFunctioning(() => new WeakLinkedList()),
  doesLinkedListClearWhenInsertedNewHead: doesLinkedListClearWhenInsertedNewHead(() => new WeakLinkedList()),
  doesLinkedListGetInitialised: doesLinkedListGetInitialised(map => new WeakLinkedList(map))
};
