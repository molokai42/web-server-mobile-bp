export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type RegisterMutationVariables = {
  email: string;
  password: string;
};

export type RegisterMutationMutation = {
  __typename?: "Mutation";

  register: Maybe<RegisterMutationRegister[]>;
};

export type RegisterMutationRegister = {
  __typename?: "Error";

  path: string;

  message: string;
};
