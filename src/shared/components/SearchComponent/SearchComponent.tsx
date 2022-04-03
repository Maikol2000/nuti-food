import React, { useState } from "react";
import lodash from "lodash";
import * as Icon from "react-feather";
import { useIntl } from "react-intl";
import { Input } from "antd";
import usePrevious from "@shared/hook/usePrevious";

interface Iprops {
  onChange?: (value) => void;
  onClick?: (value) => void;
  classNames?: string;
  placeholder?: string;
  onSearch?: (value) => void;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  value?:string;

}

const SearchComponent = (props: Iprops) => {
  const [valueInput, setValueInput] = useState<string | undefined>();
  const preInput = usePrevious(valueInput)
  const intl = useIntl();
  const onClickKeyDown = (event: any) => {
    if (event.keyCode === 13 && props.onClick) {
      props.onClick(valueInput);
    }
  };

  const onSearch = React.useMemo(() => {
    return lodash.debounce((text) => {
      props.onSearch && props.onSearch(text);
    }, 800);
  }, [props.onSearch]);

  React.useEffect(() => {
    if (valueInput == null) {
      return;
    }
    if(preInput!=valueInput){
      onSearch(valueInput);
      return () => {
        onSearch.cancel();
      };
    }
    return;
  }, [valueInput]);

  const onChange = (e) => {
    const text = e.target.value;
    setValueInput(text);
    props.onChange && props.onChange(e);
  };


  React.useEffect(()=>{
    setValueInput(props.value||"")
  },[props.value])

  return (
    <Input
      type="text"
      className={props.classNames}
      onChange={onChange}
      value={valueInput}
      onKeyDown={onClickKeyDown}
      placeholder={intl.formatMessage({
        id: props.placeholder,
        defaultMessage: props.placeholder,
      })}
      suffix={props.suffix}
      prefix={props.prefix}
    />
  );
};

export default React.memo(SearchComponent);
