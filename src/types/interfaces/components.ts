export interface ITitle {
  title: string;
}

export interface IText {
  text: string;
}

export interface IButton {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  rippleColor: string;
  bgColor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ICheckbox {
  title: string;
}

export interface IInput {
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ISpan {
  text: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  cursor?: boolean;
  className?: string | undefined;
}

export interface IFormTitle {
  title: string;
}

export interface IFormText {
  text: JSX.Element | string;
}

export interface IForm {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  children: JSX.Element | JSX.Element[];
}

export interface IFramerMotion {
  children: JSX.Element | JSX.Element[];
}
