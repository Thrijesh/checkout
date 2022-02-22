import { useState } from 'react';
import IUser from '../../interfaces/IUser';
import { AddAddress } from '../AddAddress/AddAddress';

export default function ShippinDetails({
	next,
	prev,
	user,
}: {
	next: React.MouseEventHandler<HTMLButtonElement>;
	prev: React.MouseEventHandler<HTMLButtonElement>;
	user: IUser;
}): JSX.Element {
	const [addNewAddress, setAddNewAddress] = useState(false);
	const [addressSelected, setAddressSelected] = useState(false);

	const className = 'row checkout__header checkout__location-header';

	const onAddressConfirm = () => setAddressSelected(true);
	return (
		<>
			<div className='col-sm-8 mt-2 pr-md-1 '>
				<div className='card border-0'>
					<div className='card-body'>
						<div
							className={
								addressSelected
									? `${className} active`
									: `${className} inactive`
							}
						>
							<div className='col-sm-9'>
								<p className='m-0 font-weight-bold '>
									<span className='checkout__header-icon'>
										<i className='fas fa-check-circle fa-lg'></i>
									</span>
									Shipping Address
								</p>
							</div>
						</div>
						{user.loggedIn ? (
							<>
								{!addNewAddress ? (
									<>
										<div className='checkout__shipping-details-filled mt-3 '>
											<ul className='common-list'>
												<li>
													<label className='check-container pt-0 '>
														<div className='pl-2'>
															<p className='m-0'>John Mathew</p>
															<p className='m-0'>
																120, Red Avenue, Colombo 00700
															</p>
															<p className='m-0'>Western Province</p>
															<p className='m-0'>Sri Lanka</p>
															<p className='m-0 text-light'>
																6.5467.3466721.9770
																<p className='btn-link'>View</p>
															</p>
														</div>
														<input
															type='radio'
															name='shipping-address'
															value='address01'
															onChange={onAddressConfirm}
														/>
														<span className='checkmark-radio'></span>
													</label>
												</li>
												<li>
													<label className='check-container pt-0'>
														<div className='pl-2'>
															<p className='m-0'>10/1</p>
															<p className='m-0'>1st Cross Street,</p>
															<p className='m-0'>Colombo 11, Western</p>
															<p className='m-0'>10250</p>
															<p className='m-0 text-light'>
																6.5467.3466721.9770
																<p className='btn-link'>View</p>
															</p>
														</div>
														<input
															type='radio'
															name='shipping-address'
															value='address02'
															onChange={onAddressConfirm}
														/>

														<span className='checkmark-radio'></span>
													</label>
												</li>
												<li className='mt-4'>
													<p
														className='btn-link ml-4 pl-1'
														onClick={() => {
															setAddressSelected(false);
															setAddNewAddress(true);
														}}
														style={{ cursor: 'pointer' }}
													>
														+ Add new shipping address
													</p>
												</li>
											</ul>
										</div>
									</>
								) : (
									<>
										<AddAddress
											user={user}
											showMap
											onAddressConfirm={onAddressConfirm}
										/>
									</>
								)}
							</>
						) : (
							<AddAddress
								user={user}
								showMap
								onAddressConfirm={onAddressConfirm}
							/>
						)}
						<div className='row justify-content-end'>
							<div className=''>
								<button className='btn btn-outline-dark   mt-3' onClick={prev}>
									Back to account
								</button>
								<button
									className='btn btn-primary text-white  mt-3'
									onClick={next}
								>
									Proceed To Payment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
