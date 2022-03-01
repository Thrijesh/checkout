import { useState } from 'react';
import IUser from '../../interfaces/IUser';
import { AddAddress } from '../AddAddress/AddAddress';
import masterCardLogo from '../../assets/images/mastercard.png';
import visaLogo from '../../assets/images/visa-card.png';

export default function PaymentDetails({
	prev,
	user,
}: {
	prev: React.MouseEventHandler<HTMLButtonElement>;
	user: IUser;
}): JSX.Element {
	const [paymentMethod, setPaymentMethod] = useState('');
	const [addressType, setAddressType] = useState('');
	const className = 'row checkout__header checkout__location-header';
	
	const placeOrder = (e: any) => {
		e.preventDefault()
		localStorage.clear()
	}

	return (
		<div className='col-sm-8 mt-2 pr-md-1 '>
			<div className='card border-0'>
				<div className='card-body'>
					<div
						className={
							paymentMethod ? `${className} active` : `${className} inactive`
						}
					>
						<div className='col-sm-9'>
							<p className='m-0 font-weight-bold'>
								<span className='checkout__header-icon'>
									<i className='fas fa-check-circle fa-lg'></i>
								</span>
								Payment Method
							</p>
						</div>
					</div>
					<div className='checkout__payment-method-details mt-3 '>
						<ul className='common-list'>
							<li className=' mr-2'>
								<label className='check-container'>
									Pay now with card
									<input
										type='radio'
										name='deliver-method'
										value='card'
										onChange={(e) => {
											setPaymentMethod(e.target.value);
										}}
									/>
									<span className='checkmark-radio'></span>
								</label>
							</li>
							{paymentMethod === 'card' && (
								<div className='checkout__bank-cards mt-3'>
									<li>
										{/* <img
											src={masterCardLogo}
											className='mr-3'
											alt=''
											style={{ display: 'inline' }}
										/> */}
										<label className='check-container m-2'>
											<input
												type='radio'
												name='demo'
												className='card-input-element'
												//onClick="selectCard()"
												checked
											/>
											<span className='card card-body p-2 w-100'>
												xxxx xxxx xxxx xx<strong>56</strong>
											</span>
										</label>
									</li>
									<li>
										{/* <img
											src={visaLogo}
											className='mr-3'
											alt=''
											style={{ display: 'inline' }}
										/> */}
										<label className='check-container m-2'>
											<input
												type='radio'
												name='demo'
												className='card-input-element'
												// onClick="selectCard()"
											/>
											<span className='card card-body p-2 w-100'>
												xxxx xxxx xxxx xx<strong>56</strong>
											</span>
										</label>
									</li>
									<li className='check-container m-2'>
										<div className=' p-2 '>
											<p
												className='btn-link '
												//  onClick={}
												style={{ cursor: 'pointer' }}
											>
												+ Pay with new card
											</p>
										</div>
									</li>
								</div>
							)}

							<li className=' mr-2'>
								<label className='check-container'>
									Cash On Delivery
									<input
										type='radio'
										name='deliver-method'
										value='cash'
										onChange={(e) => setPaymentMethod(e.target.value)}
									/>
									<span className='checkmark-radio'></span>
								</label>
							</li>
						</ul>
					</div>
					<hr />
					<div
						className={
							addressType ? `${className} active` : `${className} inactive`
						}
					>
						<div className='col-sm-9'>
							<p className='m-0 font-weight-bold '>
								<span className='checkout__header-icon'>
									<i className='fas fa-check-circle fa-lg'></i>
								</span>
								Billing Address
							</p>
						</div>
					</div>
					{user.loggedIn ? (
						<>
							<div className='checkout__shipping-details-filled mt-3 '>
								<ul className='common-list'>
									<li>
										<label className='check-container pt-0 '>
											<div className='pl-2'>Same as shipping address</div>
											<input
												type='radio'
												name='address'
												value='address01'
												onChange={(e) => setAddressType(e.target.value)}
											/>
											{addressType === 'address01' && (
												<div className='shipping-address mt-2 pl-2'>
													<p className='m-0'>John Mathew</p>
													<p className='m-0'>120, Red Avenue, Colombo 00700</p>
													<p className='m-0'>Western Province</p>
													<p className='m-0'>Sri Lanka</p>
													<p className='m-0 text-light'>
														6.5467.3466721.9770
														<p
															className='btn-link'
															// onClick={}
														>
															View
														</p>
													</p>
												</div>
											)}

											<span className='checkmark-radio'></span>
										</label>
									</li>
									<li>
										<label className='check-container pt-0'>
											<div className='pl-2'>Store pickup</div>
											<input
												type='radio'
												name='address'
												value='storePickup'
												onChange={(e) => setAddressType(e.target.value)}
											/>
											<span className='checkmark-radio'></span>
											{addressType === 'storePickup' && (
												<div className='address-book'>
													<label className='m-2'>
														<input
															type='radio'
															name='demo'
															className='card-input-element'
															// onClick="selectAddress()"
														/>
														<span className='card card-body'>
															<div>
																<p className='m-0'>Delux Main Branch </p>
																<p className='m-0'>10,</p>
																<p className='m-0'>1st cross street</p>
																<p className='m-0'>Colombo 11</p>
																<p>Open hours : 09.00am - 18.00pm</p>
																<p className='m-0 text-light'>
																	6.5467.3466721.9770
																	<p
																		className='btn-link'
																		//  onClick={}
																	>
																		View
																	</p>
																</p>
															</div>
														</span>
													</label>

													<label className='m-2'>
														<input
															type='radio'
															name='demo'
															className='card-input-element '
															// onClick={}
														/>
														<span className='card card-body  '>
															<div>
																<p className='m-0'>Delux Main Branch</p>
																<p className='m-0'>10,</p>
																<p className='m-0'>1st cross street</p>
																<p className='m-0'>Colombo 11</p>
																<p>Open hours : 09.00am - 18.00pm</p>
																<p className='m-0 text-light'>
																	6.5467.3466721.9770
																	<p className='btn-link'>View</p>
																</p>
															</div>
														</span>
													</label>
												</div>
											)}
										</label>
									</li>
									<li>
										<label className='check-container pt-0'>
											<div className='pl-2'>New billing address</div>

											<input
												type='radio'
												name='address'
												value={'newBillingAddress'}
												onChange={(e) => setAddressType(e.target.value)}
											/>
											<span className='checkmark-radio'></span>
										</label>
									</li>
								</ul>

								{addressType === 'newBillingAddress' && (
									<AddAddress user={user} />
								)}
							</div>
						</>
					) : (
						<AddAddress user={user} />
					)}
					<div className='row justify-content-end p-3'>
						<div className=''>
							<button className='btn btn-outline-dark   mt-3' onClick={prev}>
								Back to Shipping
							</button>
							<button
								className='btn btn-primary text-white  mt-3'
								onClick={(e) => placeOrder(e)}
							>
								Place Order
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
