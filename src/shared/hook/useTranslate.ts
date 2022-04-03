import { ILocale } from "@locale/interface";
import { useIntl } from "react-intl";

export const useAltaIntl = () => {
  const intl = useIntl();
  // console.log(intl.messages,"intl")
  const formatMessage = (key: keyof ILocale): string => {
    return intl.formatMessage({ id: key });
  };
  return {
    intl,
    formatMessage,
  };
};
