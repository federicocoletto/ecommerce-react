/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const FilterByPrice = ({ setPriceMinMax, priceMinMax }) => {

	const { register, reset, handleSubmit } = useForm()

	const submit = (data) => {
		// si no pasa un valor al from, es 0, sino, lo que el usuario pone
		const min = data.from === '' ? 0 : +data.from;
		const max = data.to === '' ? Infinity : +data.to;

		setPriceMinMax({ min, max });
	}

	const handleClearFilter = () => {
		setPriceMinMax({ min: 0, max: Infinity })
		reset({
			from: '',
			to: ''
		})
	}

	return (
		<form onSubmit={handleSubmit(submit)} className="price__form">
			<div className="price__from">
				<label htmlFor="from">From</label>
				<input
					type="number"
					id="from"
					{...register('from')}
				/>
			</div>
			<div className="price__to">
				<label htmlFor="to">To</label>
				<input
					type="number"
					id="to"
					{...register('to')}
				/>
			</div>
			<div className="price-filter__buttons">
				<button>Filter</button>
			</div>
			{
				priceMinMax.min !== 0 || priceMinMax.max !== Infinity
					? <p>From {priceMinMax.min} to {priceMinMax.max}
																				{/* btn */}
						<b style={{ cursor: 'pointer' }} onClick={handleClearFilter}>X</b>
					</p>
					: ''
			}
		</form>
	)
};

export default FilterByPrice;
