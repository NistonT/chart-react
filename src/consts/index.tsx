import { DayData, IVariationsConfig } from "../types";
import rawDataJson from "./../data.json";

export const rawData = rawDataJson as {
	variations: { id?: number; name: string }[];
	data: DayData[];
};

export const variationsConfig: IVariationsConfig[] = [
	{ id: "0", name: "Original", color: "#5E5D67" },
	{ id: "10001", name: "Variation A", color: "#3838E7" },
	{ id: "10002", name: "Variation B", color: "#FF8346" },
	{ id: "10003", name: "Variation C", color: "#00C49F" },
] as const;
