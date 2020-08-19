import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsInput, IPropsButton } from "../../../common/interfacesProps";
import { Reveal } from "../../../common/enums";
import { IFeatureData } from "../../../common/interfaces";
// HELPERS

// UTILS

// COMPONENTS
import SectionTemplate from "../../templates/SectionHeaderTemplate/SectionHeaderTemplate";
import Form from "../../organisms/Form/Form";
// CONFIG
import { contactConfig } from "../../../config/configData";

interface IData extends IFeatureData {
  form: { inputs: IPropsInput[]; buttons?: IPropsButton[]; reveal?: Reveal };
}

interface IProps {
  data: IData;
}

class Contact extends Component<IProps> {
  private constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { data, ...rest } = this.props;

    return (
      <>
        <div
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <SectionTemplate
          {...rest}
          sectionName="contact"
          sectionHeaderData={data.header}
          containerSize="xs"
          bottomOuterDivider
          config={contactConfig.header}
        >
          <Form data={data.form} />
        </SectionTemplate>
      </>
    );
  }
}

export default Contact;
