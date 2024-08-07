import { Filters, FilterSubject } from "./filter.js";

export type EventTrigger = {
  event?: string;
  target?: FilterSubject;
};

export type EventTriggerFiltered = {
  event?: string;
  filters?: Filters;
  target?: FilterSubject;
};
