import { Dropdown, Menu, Row } from "antd";
import React, { useMemo } from "react";
import { memo } from "react";
import { FormattedMessage } from "react-intl";
import {
  Link,
  matchPath,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { UilEllipsisV } from "@iconscout/react-unicons";
import lodash from "lodash";
import { useSelector } from "react-redux";
import { IRouter } from "@routers/interface";
import { buttonRulesMain, buttonGuideMain } from "@assets/images";

interface IMenu {
  data: IRouter;
  activePath?: string;
  centerClass?: string;
  isButtonLeftGuide?: boolean;
}

// const SubItem: React.FC<IMenu> = (props: IMenu) => {
//   const item = props.data;
//   const _pathnameSplit = props.activePath && props.activePath.split("/");
//   const history = useHistory();
//   return (
//     <Menu mode="vertical" className="dropdown-3dot">
//       {item.routes &&
//         item.routes.length > 0 &&
//         item.routes.map((linkNav: IRouter, index) => {
//           let active = "";
//           if (!lodash.isEmpty(linkNav.menu?.activePath)) {
//             const activeMenu =
//               linkNav.menu &&
//               linkNav.menu.activePath &&
//               linkNav.menu.activePath.some(
//                 (x) =>
//                   _pathnameSplit &&
//                   _pathnameSplit.some((y) => "/" + y == x || y == x)
//               );

//             if (activeMenu) {
//               active = "ant-menu-item-selected";
//             }
//           } else if (
//             props.activePath &&
//             matchPath(props.activePath, {
//               path: linkNav.path,
//               exact: linkNav.exact,
//             })
//           ) {
//             active = "ant-menu-item-selected";
//           }

//           let path = linkNav.path;
//           if (linkNav.menu?.generatePath) {
//             const params =
//               linkNav.menu?.selector && useSelector(linkNav.menu?.selector);
//             path = linkNav.menu.generatePath(params);
//           }
//           return (
//             <Menu.Item
//               className={active}
//               key={index}
//               onClick={(e) => {
//                 e.domEvent.stopPropagation();
//                 history.push(path);
//               }}
//             >
//               <FormattedMessage
//                 id={linkNav.name}
//                 defaultMessage={linkNav.name}
//               />
//             </Menu.Item>
//           );
//         })}
//     </Menu>
//   );
// };

const Item: React.FC<IMenu> = (props: IMenu) => {
  const item = props.data;
  const location = useLocation();
  const history = useHistory();
  const active = useMemo(() => {
    if (!lodash.isEmpty(item.menu?.activePath)) {
      const _pathnameSplit = location.pathname.split("/");
      _pathnameSplit.shift();
      const activeMenu =
        item.menu?.activePath &&
        item.menu?.activePath.some((x) =>
          _pathnameSplit.some((y) => "/" + y == x || y == x)
        );
      return activeMenu ? "menu-active" : "";
    }
    return matchPath(location.pathname, { path: item.path, exact: item.exact })
      ? "menu-active"
      : "";
  }, [location.pathname]);
  let path = item.path;
  if (item.menu?.generatePath) {
    const params = item.menu?.selector && useSelector(item.menu?.selector);
    path = item.menu.generatePath(params);
  }
  // if (item.routes && item.routes.length > 0) {
  //   return (
  //     <div
  //       className={`menu--component--item three-dot ${active}`}
  //       key={item.path}
  //       onClick={() => item.routes && history.push(item.routes[0].path)}
  //     >
  //       <div className="item-label">
  //         <span>
  //           <span className="item-hover__icon">{item.menu?.icon}</span>
  //           <a className="item__nav">
  //             <FormattedMessage id={item.name} defaultMessage={item.name} />
  //           </a>
  //         </span>

  //         <Dropdown
  //           overlay={
  //             <SubItem
  //               data={item}
  //               activePath={location.pathname}
  //               isButtonLeftGuide={props.isButtonLeftGuide}
  //             />
  //           }
  //           placement="bottomLeft"
  //           trigger={["hover"]}
  //         >
  //           <span className="icon-3dot">
  //             <UilEllipsisV />
  //           </span>
  //         </Dropdown>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={`menu--component--item ${active}`}>
      <div className="menu-div">
        {props.isButtonLeftGuide && (
          <>
            <div className="button-img button-left">
              <img
                src={buttonRulesMain}
                alt="button rules"
                onClick={() => history.push("/rules")}
              />
            </div>
            <div className="div-record"></div>
            <div
              className="button-img button-right "
              onClick={() => history.push("/guide")}
            >
              <img src={buttonGuideMain} alt="button guide" />
            </div>
          </>
        )}
        <Link to={path} className={`item-label ${props.centerClass}`}>
          <div className="icon-div">
            <span className={`item-hover__icon`}>
              {item.menu?.iconActive
                ? active
                  ? item.menu?.iconActive
                  : item.menu?.icon
                : item.menu?.icon}
            </span>
          </div>

          <span className="item__nav">
            <FormattedMessage id={item.name} defaultMessage={item.name} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default memo(Item);
