import React, { Suspense, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ConfigProvider } from "antd";
import lodash from "lodash";
import "@shared/assets/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "@styles/styles.scss";
import { TokenSelector } from "@modules/authentication/profileStore";
import { LanguageSelector } from "@modules/setting/settingStore";
import locale, { Locale } from "@locale/index";
import PrivatePage from "./routers/component/PrivatePage";
import PublicPage from "./routers/component/PublicPage";

const App = () => {
  const { token, status } = useSelector(TokenSelector);
  const { language } = useSelector(LanguageSelector);
  const history = useHistory();
  const memoLangData = React.useMemo(() => {
    return locale[language];
  }, [language]);

  useEffect(() => {
    if (lodash.isEmpty(token)) {
      history.push("/login");
    }
  }, [token]);

  return (
    <IntlProvider locale={language} messages={memoLangData}>
      <ConfigProvider locale={memoLangData}>
        <MainView statusLogin={status || token != ""} />
      </ConfigProvider>
    </IntlProvider>
  );
};

const MainView = React.memo(({ statusLogin }: { statusLogin: boolean }) => {
  return (
    <>
      {statusLogin ? (
        <Suspense fallback={<></>}>
          <PrivatePage />
        </Suspense>
      ) : (
        <Suspense fallback={<></>}>
          <PublicPage />
        </Suspense>
      )}
    </>
  );
});

export default App;
