import 'express';

interface Locals {
  status?: number;
  data?: unknown;
}

declare module 'express' {
  export interface Response {
    locals: Locals;
  }
}
