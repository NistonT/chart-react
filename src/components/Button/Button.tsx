import { ReactNode } from "react";
import style from "./Button.module.css";

type Props = {
	children: ReactNode;
	src?: string;
	onClick?: () => void;
};

export const Button = ({ children, src = "./chevron.svg", onClick }: Props) => {
	return (
		<div className={style.button} onClick={onClick}>
			<span>{children}</span>

			<img src={src} alt={src} />
		</div>
	);
};
