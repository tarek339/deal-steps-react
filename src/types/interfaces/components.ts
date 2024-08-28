export interface ITitle {
  title: string;
  center?: boolean;
}

export interface IText {
  text: string;
  center?: boolean;
}

export interface IButton {
  title: string | JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  rippleColor: string;
  bgColor: string;
  color?: string;
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
  children?: JSX.Element | JSX.Element[];
}

export interface IFramerMotion {
  children?: JSX.Element | JSX.Element[];
}

export interface ICard {
  title: string;
  description?: string;
  image: string;
  price: string;
  id: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IFlex {
  p?: number;
  mt?: number;
  col?: boolean;
  wrap?: boolean;
  center?: boolean;
  between?: boolean;
  end?: boolean;
  alignCenter?: boolean;
  wFull?: boolean;
  children?: JSX.Element[] | JSX.Element;
  gap?: number;
  height?: number;
}

export interface IIconButton {
  icon: JSX.Element | undefined;
  transparent?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface IICon {
  color: string;
  size: number;
}

export interface IContentHolder {
  children?: JSX.Element | JSX.Element[];
  mt: number;
}

export interface IModal {
  title: string;
  text: string;
  buttonTitle: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormImage {
  children: JSX.Element | JSX.Element[];
  image: string;
}

export interface ICartTable {
  children: JSX.Element | JSX.Element[] | undefined;
  priceData: JSX.Element | JSX.Element[] | undefined;
}
