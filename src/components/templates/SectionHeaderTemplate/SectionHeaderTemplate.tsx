import React, { Component, ReactNode } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  DefaultPropsClasses,
  IPropsClasses,
  IPropsOuter,
  IPropsInner,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import { IHeader } from "../../../common/interfaces";
// HELPERS

// UTILS
import checkLenghPropsData from "../../../utils/checkLenghPropsData";
// COMPONENTS
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";

export interface IProps extends IPropsOuter, IPropsInner {
  children?: ReactNode;
  sectionName: string;
  sectionHeaderData: IHeader;
  containerSize?: string;
  padding?: string;
  tag?: Headings;
  className?: string;
  sectionHeaderPaddingMargin?: string;
  config?: { title: number[]; paragraph?: number[] };
}

export const DefaultProps: IProps = {
  ...DefaultPropsClasses,
  sectionName: "section",
  sectionHeaderData: {
    title: "Hey You, write a title here!",
    paragraph: "you are missing a huge description about my session",
  },
  tag: Headings.h1,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class SectionTemplate extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;

  public constructor(props: IProps) {
    super(props);
    checkLenghPropsData.check(this.props.sectionHeaderData, this.props.config);
  }

  public get classes(): IPropsClasses {
    const {
      containerSize,

      sectionName,
      className,
      sectionHeaderPaddingMargin,
      topOuterDivider,
      bottomOuterDivider,
      hasBgColor,
      invertColor,

      topDivider,
      bottomDivider,
      padding,
    } = this.props;

    const containerClasses = classNames(
      containerSize ? `container-${containerSize}` : "container"
    );

    const outerClasses = classNames(
      `${sectionName} section`,
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color"
    );

    const innerClasses = classNames(
      `${sectionName}-inner section-inner`,
      padding && `${padding}`,
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = classNames("center-content", className && className);

    return { outerClasses, innerClasses, containerClasses, sectionHeader };
  }

  public render(): JSX.Element {
    const {
      containerSize,
      sectionName,
      className,
      sectionHeaderPaddingMargin,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      padding,
      sectionHeaderData,
      children,
      tag,

      ...rest
    } = this.props;

    return (
      <section {...rest} className={this.classes.outerClasses}>
        <div className={this.classes.containerClasses}>
          <div className={this.classes.innerClasses}>
            <SectionHeader
              tag={tag}
              data={sectionHeaderData}
              className={this.classes.sectionHeader}
              sectionHeaderPaddingMargin={sectionHeaderPaddingMargin}
            />
            {children}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTemplate;