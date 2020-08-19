import React, { Component } from "react";

// STYLE

// BASE CLASS

// COMMON
import { IPropsData } from "../../../common/interfaces";
import { ItemType, Underline } from "../../../common/enums";
// HELPERS

// UTILS

// COMPONENTS
import FeatureTilesTemplate from "../../templates/FeatureTilesTemplate/FeatureTilesTemplate";

// CONFIG
import { careerConfig } from "../../../config/configData";

class Career extends Component<IPropsData> {
  private constructor(props: IPropsData) {
    super(props);
  }

  public render(): JSX.Element {
    const { career } = this.props.data;

    return (
      <>
        <div
          id="scroll-behavior-hero-statement-color-pages"
          className="loaded-none"
        />
        <FeatureTilesTemplate
          className="illustration-section-02"
          config={careerConfig}
          data={career}
          itemType={ItemType.keyboardItem}
          underline={Underline.centerUnderline}
        />
      </>
    );
  }
}

export default Career;
