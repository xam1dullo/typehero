type ApiRequest<T, TMethod extends string = "GET"> = {
  data: T;
  method: TMethod;
};

type TSConfig<T = { strict: true }> = {
  [K in keyof T]: T[K];
};
