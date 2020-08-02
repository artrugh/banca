import { InputTypes, IHeader, ItileData, IPropsInput, IPropsButton } from "../common/interfaces";

interface Iforms {
  [key: string]: {
    inputs: IPropsInput[];
    buttons?: IPropsButton[];
  };
}

export const forms: Iforms = {
  contact: {
    inputs: [
      {
        children: null,
        label: "",
        labelHidden: false,
        type: InputTypes.text,
        name: undefined,
        status: "",
        disabled: false,
        required: false,
        value: undefined,
        formGroup: null,
        hasIcon: null,
        size: "",
        placeholder: "",
        rows: 3,
        hint: null,
      },
      {
        id: "newsletter",
        type: InputTypes.email,
        label: "Email",
        hasIcon: "right",
        placeholder: "Your email",
        hint: "Some Err",
        status: "error",
        size: "sm",
        formGroup: "vhvn",
        required: true,
        children:
          "input props: size=sm, hasIcon= false, labbelHiden= false, status=error, hint=SomeErr, formGroup=displayFlex",
      },
      {
        id: "user-name",
        type: InputTypes.text,
        label: "Name",
        placeholder: "Your Name",
        hint: "warning",
        status: "warning",
        formGroup: "desktop",
        required: true,
        children: "props: requiered=true, formGroup= desktop",
      },
      {
        id: "user-phone",
        type: InputTypes.tel,
        label: "Your phone",
        placeholder: "Your phone-number",
        children: "validators-info",
      },
      {
        id: "textarea",
        type: InputTypes.textarea,
        label: "Message",
        placeholder: "Your Message",
        hint: "Great success",
        status: "success",
        rows: 7,
        required: true,
        children: "props: row=7, default=3",
      },
    ],
    buttons: [
      {
        tag: "a",
        color: "primary",
        wide: true,
        href: "https://cruip.com/",
        children: "WIDE props",
      },
      {
        tag: "a",
        color: "primary",
        href: "https://cruip.com/",
        wideMobile: true,
        children: "SEND EMAIL / wideMobile",
      },
      {
        color: "secondary",
        size: "sm",
        href: "https://cruip.com/",
        wideMobile: true,
        children: "SEND EMAIL / size= sm",
      },
    ],
  },
};

export const contact: { header: IHeader; form: { inputs: IPropsInput[] } } = {
  header: {
    title: "Contact",
    paragraph: "Don't waste your time and contact us to start your next awesome project!",
  },
  form: forms.contact,
};

export const tiles: ItileData = {
  header: {
    title: "Build up the whole picture",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  },
  items: [
    {
      icon: "feature-tile-icon-01.svg",
      title: "IT-Consulting",
      description:
        "Wir verbinden technologische Kompetenz mit branchenübergreifender Projekterfahrung und begleiten Sie von der Konzeption bis zur erfolgreichen Umsetzung Ihrer IT-Projekte.",
      alt: "Features tile icon 01",
    },
    {
      icon: "feature-tile-icon-02.svg",
      title: "Technologie Coaching",
      description:
        "Technologie Coaching Firmeninternes technologisches Know-How ist eine Grundvoraussetzung abgeschlossener IT-Projekte, um langfristig erfolgreich bestehen zu können.",
      alt: "Features tile icon 02",
    },
    {
      icon: "feature-tile-icon-03.svg",
      title: "IT-Architectur",
      description:
        "Beratung in der Konzeption und Erstellung von nachaltigenTechnologiestrategien in den Bereichen Software- und Infrastrukturarchitektur.",
      alt: "Features tile icon 01",
    },
    {
      icon: "feature-tile-icon-04.svg",
      title: "Robust Workflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      alt: "Features tile icon 01",
    },
  ],
};