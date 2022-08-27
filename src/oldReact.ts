import { FC, ReactNode } from "react";

export type FCWithChildren<P = unknown> = FC<P & { children: ReactNode }>;
export type FCC<P = unknown> = FCWithChildren<P>;
