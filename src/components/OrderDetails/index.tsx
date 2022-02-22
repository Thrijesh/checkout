import product from '../../assets/images/products/3.jpg';
import product2 from '../../assets/images/products/2.jpg';

export default function OrderDetails() {
	return (
		<div className='col-sm-4 mt-2 pl-md-1 '>
			<div className='card  border-0'>
				<div className='card-body'>
					<div className='row no-gutters'>
						<div className='col-8'>
							<p className='font-weight-bold'>Your Order Summary</p>
						</div>
						<div className='col-4 text-right'>
							<a className='' href='cart.html'>
								Edit Cart
							</a>
						</div>
					</div>
					<div className='row no-gutters'>
						<div className='col-lg-7 col-sm-8 col-8'>
							<div className='row no-gutters'>
								<div className='col-3'>
									<img src={product2} className='rounded w-100' alt='' />
								</div>
								<div className='col-9'>
									<p className='ml-2 m-0 long-text'>
										Levi's classNameic T-Shirt
									</p>
									<small className='pl-2'>Size: Medium, Color: Black</small>
								</div>
							</div>
						</div>
						<div className='col-lg-5 col-sm-4 col-4 text-right'>
							<p className='ml-3'>LKR.2500.00</p>
						</div>
					</div>
					<hr />
					<div className='row no-gutters'>
						<div className='col-lg-7 col-sm-8 col-8'>
							<div className='row no-gutters'>
								<div className='col-3'>
									<img src={product} className='rounded w-100' alt='' />
								</div>
								<div className='col-9'>
									<p className='ml-2 m-0 long-text'>
										Levi's classNameic T-Shirt
									</p>
									<small className='pl-2'>Size: Medium, Color: Black</small>
								</div>
							</div>
						</div>
						<div className='col-lg-5 col-sm-4 col-4 text-right'>
							<p className='ml-3'>LKR.3400.00</p>
						</div>
					</div>
					<hr />
					<div className='row'>
						<div className='col-6'>
							<p>Sub Total</p>
						</div>
						<div className='col-6 text-right'>
							<p>LKR. 5900.00</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<p>Delivery Charge</p>
						</div>
						<div className='col-6 text-right'>
							<p>LKR. 300.00</p>
						</div>
					</div>
					<div className='input-group mb-1'>
						<input
							type='search'
							className='form-control border-0'
							placeholder='Enter Promo Code'
							aria-label='Enter Promo Code'
							aria-describedby='button-addon4'
						/>
						<div className='input-group-append'>
							<button
								className='btn btn-secondary text-white'
								type='button'
								id='button-addon4'
							>
								Apply
							</button>
						</div>
					</div>
					<p
						className='btn-link'
						// href='#'
						data-toggle='modal'
						data-target='#promo-modal'
					>
						See all available promos
					</p>
					<div className='row mt-2'>
						<div className='col-6'>
							<p>Tax</p>
						</div>
						<div className='col-6 text-right'>
							<p>LKR. 50.00</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-6'>
							<p className='font-weight-bold'>Total</p>
						</div>
						<div className='col-6 text-right'>
							<p className='font-weight-bold'>LKR. 6250.00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
