import { Tooltip } from "recharts";
import { VariationId } from "../../types";

type Props = {
	variationNameMap: {
		[k: string]: string;
	};
};

export const TooltipCustom = ({ variationNameMap }: Props) => {
	return (
		<>
			<Tooltip
				formatter={(value, name) => {
					const variationName = variationNameMap[name as VariationId] || name;
					return [`${value}%`, variationName];
				}}
				labelFormatter={label => new Date(label).toLocaleDateString("en-GB")}
				cursor={{ stroke: "#ccc", strokeDasharray: "3 3" }}
			/>
		</>
	);
};
