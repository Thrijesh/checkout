import { useState, useEffect } from 'react';

export default function StorePickup(props: any): JSX.Element {
	const [showStores, setShowStores] = useState(false);
	const className = 'row checkout__header checkout__collection-method-header';

	useEffect(() => {
		if(props.user.collectionMethod === "store1" || props.user.collectionMethod === "store2") {
			setShowStores(true)
		}
	}, [props])

	return (
		<>
			<hr />
			<div
				className={
					props.user.collectionMethod ? `${className} active` : `${className} inactive`
				}
			>
				<div className='col-sm-9'>
					<p className='m-0 font-weight-bold '>
						<span className='checkout__header-icon'>
							<i className='fas fa-check-circle fa-lg'></i>
						</span>
						Collection method
					</p>
				</div>
			</div>
			<div className='checkout__payment-method-details mt-3 '>
				<ul className='common-list'>
					<li>
						<label className='check-container pt-0'>
							<div className='pl-2'>Store pickup</div>
							<input
								type='radio'
								name='shipping-address'
								value='store'
								onChange={() => {
									props.user.setCollectionMethod('');
									setShowStores(true);
								}}
								checked={ props.user.collectionMethod === "store1" || props.user.collectionMethod === "store2"  ? true : false }
							/>
							<span className='checkmark-radio'></span>
							{showStores && (
								<div className='address-book'>
									<label className='m-2'>
										<input
											type='radio'
											name='demo'
											className='card-input-element'
											value='store1'
											onChange={(e) => props.user.setCollectionMethod(e.target.value)}
											checked={ props.user.collectionMethod === "store1" ? true : false }
										/>
										<div className='card card-body'>
											<div>
												<p className='m-0'>Delux Main Branch</p>
												<p className='m-0'>10,</p>
												<p className='m-0'>1st cross street</p>
												<p className='m-0'>Colombo 11</p>
												<p>Open hours : 09.00am - 18.00pm</p>
												<p className='m-0 text-light'>
													6.5467.3466721.9770
													{/* Todo: add link here */}
													<p className='btn-link'>View</p>
												</p>
											</div>
										</div>
									</label>

									<label className='m-2'>
										<input
											type='radio'
											name='demo'
											className='card-input-element '
											value='store2'
											onChange={(e) => props.user.setCollectionMethod(e.target.value)}
											checked={ props.user.collectionMethod === "store2"  ? true : false }
										/>
										<div className='card card-body  '>
											<div>
												<p className='m-0'>Delux Main Branch</p>
												<p className='m-0'>10,</p>
												<p className='m-0'>1st cross street</p>
												<p className='m-0'>Colombo 11</p>
												<p>Open hours : 09.00am - 18.00pm</p>
												<p className='m-0 text-light'>
													6.5467.3466721.9770
													{/* todo: add link here */}
													<p className='btn-link'>View</p>
												</p>
											</div>
										</div>
									</label>
								</div>
							)}
						</label>
					</li>
					<li>
						<label className='check-container '>
							<div className='pl-2'>Deliver to door</div>
							<input
								type='radio'
								name='shipping-address'
								value='to-door'
								onChange={(e) => {
									setShowStores(false);
									props.user.setCollectionMethod(e.target.value);
								}}
								checked={ props.user.collectionMethod === "to-door"  ? true : false }
							/>
							<span className='checkmark-radio'></span>
						</label>
					</li>
				</ul>
			</div>
		</>
	);
}
