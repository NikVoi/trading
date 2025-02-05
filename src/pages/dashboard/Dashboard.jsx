import Bots from '@/components/bots/Bots'
import Capital from '@/components/capital/Capital'
import Graph from '@/components/graph/Graph'
import Range from '@/components/range/Range'
import { TIME } from '@/constants/values'
import jsonData from '@/data/data.min.json'
import useLocalStorage from '@/hooks/localStorage'
import { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'

const Dashboard = () => {
	const [active, setActive] = useLocalStorage('active', TIME[TIME.length - 1])
	const [selectedBot, setSelectedBot] = useLocalStorage(
		'selectedBot',
		jsonData.bots[0]
	)

	const [chartData, setChartData] = useState(
		jsonData.bots.map((bot, index) => ({
			date: `${index + 1}.04`,
			value: bot[active],
		}))
	)

	useEffect(() => {
		setChartData(
			jsonData.bots.map((bot, index) => ({
				date: `${index + 1}.04`,
				value: bot[active],
			}))
		)
	}, [active])

	const handleBotClick = bot => {
		setSelectedBot(bot)
		setChartData(
			chartData.map(point => ({
				...point,
				value: parseFloat((Math.random() * 20).toFixed(2)),
			}))
		)
	}

	return (
		<section className={styles.dashboard}>
			<Capital
				trading_capital={jsonData.trading_capital}
				balance={jsonData.balance}
				on_hold={jsonData.on_hold}
			/>
			<Graph active={active} chartData={chartData} />
			<Bots
				bots={jsonData.bots}
				active={active}
				setSelectedBot={handleBotClick}
				selectedBot={selectedBot}
			/>
			<Range setActive={setActive} active={active} />
		</section>
	)
}

export default Dashboard
