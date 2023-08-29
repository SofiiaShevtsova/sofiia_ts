import { ReactElement, useCallback } from "react";

export const ButtonText = ({
  text,
  type,
  className,
  onClick = () => {},
}: {
  text: string;
  type: "button" | "submit";
  className: string;
  onClick?: Function;
}): ReactElement => {
  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);
  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={className}
    >
      {text}
    </button>
  );
};