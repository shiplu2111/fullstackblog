import { toast } from "react-toastify";
let EmailRegx = /\S+@\S+\.\S+/;

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }

  IsEmail(value) {
    return !EmailRegx.test(value);
  }
  IsNotMatch(value1, value2) {
    return value1 !== value2;
  }
  ErrorToast(msg) {
    toast.error(msg);
  }
  SuccessToast(msg) {
    toast.success(msg);
  }
}
export const {
  IsEmpty,
  IsMobile,
  IsEmail,
  IsNotMatch,
  ErrorToast,
  SuccessToast,
} = new FormHelper();
