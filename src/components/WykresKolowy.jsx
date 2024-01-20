import { PieChart, Pie, Tooltip} from "recharts";
import { useTranslation } from 'react-i18next';

const WykresKolowy = () => {

    const [t, i18n] = useTranslation("global");

    const data = [
        {name: `${t("sales_chart.monday")}`, value: 20},
        {name: `${t("sales_chart.tuesday")}`, value: 19},
        {name: `${t("sales_chart.wednesday")}`, value: 15},
        {name: `${t("sales_chart.thursday")}`, value: 23},
        {name: `${t("sales_chart.friday")}`, value: 18},
        {name: `${t("sales_chart.saturday")}`, value: 20},
        {name: `${t("sales_chart.sunday")}`, value: 9}
    ]

    return (
        <PieChart width={500} height={500}>
            <Pie 
                dataKey="value"
                isAnimationActive ={false}
                data={data}
                cx={180}
                cy={170}
                outerRadius={80}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    )
}

export default WykresKolowy;