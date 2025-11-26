import { rawData, variationsConfig } from "../consts";

export const processedData = rawData.data.map(item => {
	const result = {
		date: item.date,
		"0": 0,
		"10001": 0,
		"10002": 0,
		"10003": 0,
	};

	variationsConfig.forEach(v => {
		const visits = item.visits[v.id] ?? 0;
		const conversions = item.conversions[v.id] ?? 0;
		const cr = visits > 0 ? (conversions / visits) * 100 : 0;
		result[v.id] = parseFloat(cr.toFixed(2));
	});

	return result;
});
