import store from "@core/store/redux";
import profileStore, { setToken } from "./profileStore";
import authenticationRepository, { ILoginDTO, ILoginOTP } from "./repository";

const authenticationPresenter = { ...authenticationRepository };

authenticationPresenter.login = async (
  payload: ILoginDTO,
  remember = false
) => {
  const token = await authenticationRepository.login(payload);
  store.dispatch(setToken({ token, remember }));
  return token;
};
authenticationPresenter.loginByOTPCode = async (payload: ILoginOTP) => {
  const remember = false;
  const token = await authenticationRepository.loginByOTPCode(payload);
  store.dispatch(setToken({ token, remember }));
  return token;
};

authenticationPresenter.verifyCode = async (payload:{code,phoneNumber}) => {
  const token = await authenticationRepository.verifyCode(payload);
  store.dispatch(setToken({ token,remember:true }));
  return token;
};
authenticationPresenter.getProfile = async () => {
  const user = await authenticationRepository.getProfile();
  store.dispatch(profileStore.actions.fetchProfile({ user }));
  return user;
};

export default authenticationPresenter;
