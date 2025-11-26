import { useState } from "react";
import { Button, LineCustom, TooltipCustom } from "./components";
import { variationsConfig } from "./consts";

import {
	CartesianGrid,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";
import style from "./App.module.css";
import { useChart } from "./hooks/useChart";
import { useTheme } from "./hooks/useThemeContext";

export default function App() {
	const { toggleTheme, theme } = useTheme();

	const {
		toggleVariation,
		chartData,
		formatDate,
		variationNameMap,
		activeVariations,
	} = useChart();

	const [isOpenLine, setOpenLine] = useState<boolean>(false);

	return (
		<div
			style={{
				padding: "20px",
				width: "100%",
				maxWidth: "1300px",
				margin: "0 auto",
				background: "var(--bg-color)",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "16px",
				}}
			>
				{/* Выбор вариаций */}
				<div style={{ position: "relative" }}>
					<Button onClick={() => setOpenLine(prev => !prev)}>
						{activeVariations.length === 4
							? "All variations selected"
							: `${activeVariations.length} selected`}
					</Button>
					{isOpenLine && (
						<div className={style.openLine}>
							{variationsConfig.map(v => (
								<label key={v.id} className={style.option}>
									<input
										type='checkbox'
										checked={activeVariations.includes(v.id)}
										onChange={() => toggleVariation(v.id)}
									/>
									<span>{v.name}</span>
								</label>
							))}
						</div>
					)}
				</div>

				<Button onClick={toggleTheme}>
					{theme === "light" ? "Dark" : "Light"}
				</Button>
			</div>

			<div style={{ width: "100%", height: 350 }}>
				<ResponsiveContainer>
					<LineChart data={chartData}>
						<CartesianGrid stroke='var(--grid-color)' vertical={false} />
						<XAxis
							dataKey='date'
							tickFormatter={formatDate}
							interval='preserveStartEnd'
							tick={{ fill: "var(--text-color)" }}
						/>
						<YAxis
							domain={[0, "auto"]}
							tickFormatter={value => `${value}%`}
							width={50}
							tick={{ fill: "var(--text-color)" }}
						/>
						<TooltipCustom variationNameMap={variationNameMap} />
						<LineCustom
							variationsConfig={variationsConfig}
							activeVariations={activeVariations}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
