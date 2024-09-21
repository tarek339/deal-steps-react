import { TERipple } from "tw-elements-react";
import { ITabBar } from "../../types/interfaces/components";

const TabBar = ({
  leftTitle,
  rightTitle,
  leftMiddleTitle,
  rightMiddleTitle,
  onLeftClick,
  onLeftMiddleClick,
  onRightClick,
  onRightMiddleClick,
}: ITabBar) => {
  return (
    <div className="inline-flex" role="group">
      <TERipple rippleColor="light">
        <button
          onClick={onLeftClick}
          type="button"
          className="inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
          {leftTitle}
        </button>
      </TERipple>

      <TERipple rippleColor="light">
        <button
          onClick={onLeftMiddleClick}
          type="button"
          className="-ml-0.5 inline-block border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
          {leftMiddleTitle}
        </button>
      </TERipple>

      <TERipple rippleColor="light">
        <button
          onClick={onRightMiddleClick}
          type="button"
          className="-ml-0.5 inline-block border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
          {rightMiddleTitle}
        </button>
      </TERipple>

      <TERipple rippleColor="light">
        <button
          onClick={onRightClick}
          type="button"
          className="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
          {rightTitle}
        </button>
      </TERipple>
    </div>
  );
};

export default TabBar;
