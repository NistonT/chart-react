export type VariationId = "0" | "10001" | "10002" | "10003";

export interface DayData {
	date: string;
	visits: Partial<Record<VariationId, number>>;
	conversions: Partial<Record<VariationId, number>>;
}

export interface IVariationsConfig {
	id: VariationId;
	name: string;
	color: string;
}
