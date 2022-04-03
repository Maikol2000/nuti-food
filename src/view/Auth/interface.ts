import { FormInstance } from "antd";

export interface IPropsMobilePhoneInput {
  form: FormInstance;
  onFinish: any;
}
export interface IButtonSubmit {
  form: FormInstance;
  inputOTP: boolean;
  onFinish: any;
  isLogin: boolean;
  loading?: boolean;
}

export interface ButtonProps {
  router: any;
}
