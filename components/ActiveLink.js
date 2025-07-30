import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

import useScrollPosition from "@react-hook/window-scroll";

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const scrollY = useScrollPosition(60);

  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    (asPath.split("?")[0] === props.href || asPath === props.as) &&
    scrollY >= 20
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
