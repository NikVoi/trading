import { TIME, TIME_LABELS } from '@/constants/values'
import styles from './range.module.css'

const Range = ({ active, setActive }) => {
	return (
		<section className='flex justify-around items-center p-4 '>
			<h3 className='text-2xl font-bold opacity-50 border border-indigo-600'>
				Time Range:
			</h3>
			{TIME.map(item => (
				<button
					key={item}
					className={`${styles.button} ${
						active === item ? 'opacity-100' : 'opacity-50'
					}`}
					onClick={() => setActive(item)}
				>
					{TIME_LABELS[item]}
				</button>
			))}
		</section>
	)
}

export default Range
