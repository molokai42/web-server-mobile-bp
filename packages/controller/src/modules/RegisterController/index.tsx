import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  RegisterMutationMutation,
  RegisterMutationVariables
} from "../../operation-result-types";

interface Props {
  children: (
    data: { submit: (values: RegisterMutationVariables) => Promise<null> }
  ) => JSX.Element | null;
}

class RegCont extends React.PureComponent<
  ChildMutateProps<Props, RegisterMutationMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const response = await this.props.mutate({
      variables: values
    });

    console.log("response: ", response);
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<
  Props,
  RegisterMutationMutation,
  RegisterMutationVariables
>(registerMutation)(RegCont);
