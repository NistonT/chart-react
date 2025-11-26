import { useMemo, useState } from "react";
import { variationsConfig } from "../consts";
import { VariationId } from "../types";
import { processedData } from "../utils";

export const useChart = () => {
	const [activeVariations, setActiveVariations] = useState<VariationId[]>(
		variationsConfig.map(v => v.id)
	);

	const toggleVariation = (id: VariationId) => {
		if (activeVariations.length === 1 && activeVariations.includes(id)) return;
		if (activeVariations.includes(id)) {
			setActiveVariations(activeVariations.filter(v => v !== id));
		} else {
			setActiveVariations([...activeVariations, id]);
		}
	};

	const chartData = useMemo(() => {
		return processedData.map(item => {
			const filtered: Record<string, number | string> = { date: item.date };
			activeVariations.forEach(id => {
				filtered[id] = item[id];
			});
			return filtered;
		});
	}, [activeVariations]);

	const formatDate = (dateStr: string) => {
		return new Date(dateStr).getDate().toString();
	};

	const variationNameMap = Object.fromEntries(
		[...variationsConfig]
			.sort((a, b) => parseInt(b.id) - parseInt(a.id))
			.map(v => [v.id, v.name])
	);

	return {
		toggleVariation,
		chartData,
		formatDate,
		variationNameMap,
		activeVariations,
	};
};
