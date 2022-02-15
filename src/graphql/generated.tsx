/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteUser: Scalars['Boolean'];
  login: User;
  register: User;
  updateUser: User;
};

export type MutationLoginArgs = {
  data: UserLoginDto;
};

export type MutationRegisterArgs = {
  data: UserRegisterDto;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserDto;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  getUsers: Array<User>;
  hello: Scalars['String'];
  me: User;
};

export type QueryGetUserArgs = {
  id: Scalars['String'];
};

/** User role */
export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
};

export type UserLoginDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserRegisterDto = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type LoginMutationVariables = Exact<{
  data: UserLoginDto;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'User'; id: string; name: string; email: string };
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: 'Query'; hello: string };

export const LoginDocument = gql`
  mutation login($data: UserLoginDto!) {
    login(data: $data) {
      id
      name
      email
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const HelloDocument = gql`
  query Hello {
    hello
  }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
  baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options,
  );
}
export function useHelloLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options,
  );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<
  HelloQuery,
  HelloQueryVariables
>;
