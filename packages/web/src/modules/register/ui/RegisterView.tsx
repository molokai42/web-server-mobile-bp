import * as React from "react";
import * as Antd from "antd";
import { withFormik, FormikErrors, FormikProps, Field, Form } from "formik";
import { validUserSchema } from "@abb/common";
import { InputField } from "../../shared/inputField";

const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class RV extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { errors } = this.props;
    console.log(errors);
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25" }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25" }} /> as any
              // tslint:disable-next-line:jsx-curly-spacing
            }
            type="password"
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <FormItem>
              <a className="login-form-forgot" href="">
                Forgot Password
              </a>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Register
              </Button>
            </FormItem>
            <FormItem>
              or <a href="">login now!</a>
            </FormItem>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RV);
