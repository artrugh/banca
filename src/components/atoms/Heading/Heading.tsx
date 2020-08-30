import React, { Component, createElement, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import { IPropsClasses } from "../../../common/interfacesProps";
import { Size, Headings, ScrollPosition } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  children?: string | ReactNode;
  containerSize?: Size;
  underlineSize?: Size;
  className?: string;
  name?: string;
  animation?: boolean;
  tag?: Headings;
  scrollPosition?: ScrollPosition;
  classNameHeading?: string;
  classNameContainer?: string;
}

const DefaultProps: IProps = {
  scrollPosition: ScrollPosition.leftRight,
  children: "A title should we pass as a prop",
  classNameContainer: "hero",
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Heading extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(public props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const {
      containerSize,
      underlineSize,
      className,
      animation,
      scrollPosition,
      classNameHeading,
      classNameContainer,
    } = this.props;

    const container = classNames(
      classNameContainer && classNameContainer,
      className && className,
      containerSize && `container-${containerSize}`
    );

    const underline = classNames(
      "underline",
      animation && "underline-has-animation",
      underlineSize ? `underline--${underlineSize}` : "",
      scrollPosition
    );

    const heading = classNames(classNameHeading && classNameHeading);

    return { container, underline, heading };
  }

  private createReactElement = (tag: string, props: {}): JSX.Element => {
    const e = createElement;
    const el: JSX.Element = e(tag, props);

    return el;
  };

  public render(): JSX.Element {
    const {
      tag,
      children,
      containerSize,
      animation,
      underlineSize,
      className,
      classNameHeading,
      classNameContainer,
      scrollPosition,
      ...rest
    } = this.props;

    const props = {
      className: this.classes.heading,
      children,
    };

    return (
      <div {...rest} className={this.classes.container}>
        {this.createReactElement(tag, props)}
        {underlineSize && <hr className={this.classes.underline} />}
      </div>
    );
  }
}

export default Heading;
