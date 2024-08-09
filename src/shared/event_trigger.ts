import { Filters, FilterSubject } from "./filter.js";

export type EventTrigger = {
  event?: string;
  filters?: Filters;
  target?: FilterSubject;
};
