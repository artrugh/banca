import React, { Component, ReactNode } from "react";
import cn from "classnames";

// STYLE

// BASE CLASS

// COMMON

// HELPERS

// UTILS

// COMPONENTS

interface IProps {
  children?: ReactNode;
  id?: string;
  name?: string;
  value?: string;
  rightLabel?: string;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  [propName: string]: any;
}
const DefaultProps: IProps = {
  id: `${Math.random()}`,
  children: null,
  disabled: false,
  checked: false,
};

type Props = {} & Partial<DefaultProps>;
type DefaultProps = Readonly<typeof DefaultProps>;

class Switch extends Component<IProps> {
  public static defaultProps: Partial<Props> = DefaultProps;
  public constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const {
      id,
      className,
      children,
      name,
      value,
      rightLabel,
      disabled,
      checked,
      ...rest
    } = this.props;

    return (
      <label className={cn("form-switch", className)} htmlFor={id}>
        <input
          {...rest}
          type="checkbox"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
        />
        <span className="form-switch-icon" />
        <span>{children}</span>
        {rightLabel && <span>{rightLabel}</span>}
      </label>
    );
  }
}

export default Switch;
