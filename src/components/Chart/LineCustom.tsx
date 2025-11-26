import { Line } from "recharts";
import { IVariationsConfig, VariationId } from "../../types";

type Props = {
	variationsConfig: IVariationsConfig[];
	activeVariations: VariationId[];
};

export const LineCustom = ({ variationsConfig, activeVariations }: Props) => {
	return (
		<>
			{variationsConfig.map(
				v =>
					activeVariations.includes(v.id) && (
						<Line
							key={v.id}
							type='monotone'
							dataKey={v.id}
							name={v.name}
							stroke={v.color}
							strokeWidth={2}
							dot={false}
							isAnimationActive={false}
						/>
					)
			)}
		</>
	);
};
