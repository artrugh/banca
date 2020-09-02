import React, { Component } from "react";
import Link from "next/link";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS
import Image from "../Image/Image";
import SmoothScroll from "../SmoothScroll/SmoothScroll";

interface IProps {
  pathname?: string;
  className?: string;
  [propName: string]: any;
}

class Logo extends Component<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { pathname, className, ...rest } = this.props;

    return (
      <div {...rest} className={classNames("brand", className)}>
        {pathname === "/" ? (
          <SmoothScroll to="hero">
            <svg
              width="32"
              height="32"
              id="logo-ar"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 163 146"
            >
              <path d="M91.9,105.6c-5,5.5-12.1,8.5-19.7,8.5l-24.1-0.2c-5.6,0-9.4-5.8-7.1-11L65.8,46L50.1,10.2c-3.4,3.4-6.2,7.4-8.2,11.9L2,112.6C-4.8,128.1,6.5,146,23.4,146h86.1L91.9,105.6z" />
              <path d="M139.6,0h-62c-5.3,0-10.5,0.5-15.2,2.5L76.3,33c4.2-2.7,9.1-5,14.3-5h24.6c5.7,0,9.4,6.4,7.1,11.6l-21.6,49.4l24.8,57.1h34.7l-24.3-56.1l25.2-57.7C167.8,16.8,156.5,0,139.6,0z" />
            </svg>
          </SmoothScroll>
        ) : (
          <Link href="/">
            <a>
              <svg
                height="32"
                id="logo-ar"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 357.1 169.7"
              >
                <path d="M91.9,105.6c-5,5.5-12.1,8.5-19.7,8.5l-24.1-0.2c-5.6,0-9.4-5.8-7.1-11L65.8,46L50.1,10.2c-3.4,3.4-6.2,7.4-8.2,11.9L2,112.6C-4.8,128.1,6.5,146,23.4,146h86.1L91.9,105.6z" />
                <path d="M139.6,0h-62c-5.3,0-10.5,0.5-15.2,2.5L76.3,33c4.2-2.7,9.1-5,14.3-5h24.6c5.7,0,9.4,6.4,7.1,11.6l-21.6,49.4l24.8,57.1h34.7l-24.3-56.1l25.2-57.7C167.8,16.8,156.5,0,139.6,0z" />
                <path d="M206.7,90.1h17.7v55.7h-16.9v-10.4h-0.6c-2.5,6.8-8.7,11.1-17,11.1c-11.5,0-19.1-8.3-19.2-20.9V90.1h17.7v32c0,6.1,3.4,9.8,8.8,9.8c5.3,0,9.4-3.6,9.4-10.1V90.1z" />
                <path d="M235.3,150.9l16.8-0.9c0.9,3.4,4.4,5.6,10,5.6c5.9,0,10.3-2.6,10.3-9.7v-9.8h-0.6c-2.1,5.2-7.6,9-15.8,9c-12.2,0-22.3-8.2-22.3-27.2c0-19.5,10.6-28.5,22.2-28.5c8.8,0,13.6,5.2,15.8,10.3h0.5v-9.5h17.7V146c0,14.2-11.5,21.8-28.3,21.8C245.8,167.9,236.6,160.6,235.3,150.9z M272.5,117.9c0-9-3.8-14.7-10.3-14.7c-6.6,0-10.2,5.8-10.2,14.7c0,8.9,3.7,14.3,10.2,14.3C268.7,132.1,272.5,126.8,272.5,117.9z" />
                <path d="M318.9,145.8h-17.7V71.5h17.2v28.8h0.6c2.5-6.9,8.4-11,16.7-11c11.7,0,19.4,8.3,19.4,20.9v35.5h-17.7v-32c0-6.2-3.3-9.9-9-9.9c-5.6,0-9.4,3.8-9.4,10.1V145.8z" />
              </svg>
            </a>
          </Link>
        )}
      </div>
    );
  }
}

export default Logo;
