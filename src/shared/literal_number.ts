export type LiteralNumber<T extends number, U = number | string> = T | (U & Record<never, never>);
