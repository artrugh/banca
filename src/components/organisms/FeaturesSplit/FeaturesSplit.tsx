import React, { Component } from "react";
import classNames from "classnames";

// STYLE

// BASE CLASS

// COMMON
import {
  IPropsFeatureItem,
  IPropsClasses,
  DefaultP,
} from "../../../common/interfacesProps";
import { Headings } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionHeaderTemplate/SectionHeaderTemplate";
import SplitItem from "../../molecules/SplitItem/SplitItem";

interface IProps extends IPropsFeatureItem {
  invertMobile?: boolean;
  invertDesktop?: boolean;
  alignTop?: boolean;
  imageFill?: boolean;
  data?: IFeatureData;
  config?: {
    header: { title: number[]; paragraph?: number[] };
    items: { [key: string]: number[] };
  };
}

const DefaultProps: IProps = {
  ...DefaultP,
  invertMobile: false,
  invertDesktop: false,
  alignTop: false,
  imageFill: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class FeaturesSplit extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public get classes(): IPropsClasses {
    const { invertMobile, invertDesktop, alignTop } = this.props;

    const classes = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return { classes };
  }

  public render(): JSX.Element {
    const {
      invertMobile,
      invertDesktop,
      alignTop,
      underline,
      imageFill,
      data,
      config,
      ...rest
    } = this.props;

    const Items = data.items.map((item, delay) => (
      <SplitItem
        key={Math.random()}
        item={item}
        delay={delay}
        imageFill={imageFill}
        config={config.items}
        underline={underline}
      />
    ));

    return (
      <SectionTemplate
        {...rest}
        sectionName="features-split"
        sectionHeaderData={data.header}
        tag={Headings.h2}
        config={config.header}
      >
        <div className={this.classes.classes}>{Items}</div>
      </SectionTemplate>
    );
  }
}

export default FeaturesSplit;
