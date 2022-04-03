import React, { memo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { privatePage } from "@routers/mainRouter";
import MenuItem from "./ItemMenu";
import CheckPermission from "@shared/hoc/CheckPermission";
import lodash from "lodash";
import { IRouter } from "@routers/interface";

interface IRenderMenuProps {
  listNav: Array<IRouter>;
  location: string;
  isButtonLeftGuide?: boolean;
}

const _RenderMenu: React.FC<IRenderMenuProps> = (props: IRenderMenuProps) => {
  // cắt home ra
  const listNav = props.listNav.filter(
    (item: IRouter) => item.menu != null && !item.menu?.hideInNavbar
  );
  const totalItem = Math.floor(listNav.length / 2 + 1);
  return (
    <>
      {listNav.map((item: IRouter, index) => {
        if (item.permissionCode) {
          return (
            <CheckPermission permissionCode={item.permissionCode} key={index}>
              <MenuItem data={item} key={index} />
            </CheckPermission>
          );
        } else {
          if (index + 1 == totalItem) {
            return (
              <MenuItem
                data={item}
                key={index}
                centerClass="center-class"
                isButtonLeftGuide={props.isButtonLeftGuide}
              />
            );
          }
          return <MenuItem data={item} key={index} />;
        }
      })}
    </>
  );
};

const RenderMenu = memo(_RenderMenu);

const SiderComponent: React.FC<{
  className: string;
  setClassName: (className: string) => void;
  isButtonLeftGuide?: boolean;
}> = (props) => {
  const location = useLocation();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>();

  const openMenu = React.useMemo(() => {
    return lodash.debounce(() => {
      setClassName("sider-component big");
    }, 200);
  }, [setClassName]);

  const onClick = (e) => {
    openMenu();
  };

  useEffect(() => {
    if (className == "sider-component") {
      setWidth(0);
    } else {
      setWidth("100%");
    }
  }, [className]);

  return (
    <div
      className={className}
      onMouseEnter={onClick}
      onMouseLeave={() => openMenu.cancel()}
      style={{ width }}
    >
      <div className="mask">
        <div className="menu">
          <RenderMenu
            listNav={privatePage}
            location={location.pathname}
            isButtonLeftGuide={props.isButtonLeftGuide}
          />
        </div>
      </div>
    </div>
  );
};

export default SiderComponent;
