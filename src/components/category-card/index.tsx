import { iProps } from './index.interface'
import './styles.module.scss'

const Directory = ({ id, imageUrl, title }: iProps) => {
	return (
		<div className="category-card" key={id}>
			<div
				className="category-card__bg-img"
				style={{ background: `url(${imageUrl})` }}
			></div>
			<div className="category-card__body">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	)
}

export default Directory
