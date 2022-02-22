import { useState } from 'react';
import IUser from '../../interfaces/IUser';
import { MapContainer } from '../MapContainer';
import fedexLogo from '../../assets/images/fedex-logo.png';
import upsLogo from '../../assets/images/ups-logo.png';

export function AddAddress({
	showMap = false,
	user,
	onAddressConfirm,
}: {
	user: IUser;
	showMap?: boolean;
	onAddressConfirm?: Function;
}): JSX.Element {
	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);
	const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
		null,
	);
	const [key, setKey] = useState(new Date().toISOString());
	const [addressConfirmed, setAddressConfirmed] = useState(false);
	const [courierOption, setCourierOption] = useState(false);
	const className = 'row checkout__header checkout__location-header';

	const saveLocation = () => {
		if (latitude && longitude) {
			setKey(new Date().toISOString());
			setLocation({ lat: latitude, lng: longitude });
		}
	};

	return (
		<div className='card card-body new-billing-address mt-3'>
			<form>
				<div className='row'>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>First Name</label>
							<input type='text' className='form-control' value='John' />
						</div>
					</div>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Last Name</label>
							<input type='text' className='form-control' value='Mathew' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Company (optional)</label>
							<input type='text' className='form-control' value='120' />
						</div>
					</div>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Address Line 1</label>
							<input type='text' className='form-control' value='120' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>
								Address Line 2 <span className='text-light'>(Optional)</span>
							</label>
							<input type='text' className='form-control' value='Red Avenue' />
						</div>
					</div>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Postal Code</label>
							<input type='text' className='form-control' value='00700' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Country</label>
							<select className='form-control'>
								<option>Sri Lanka</option>
							</select>
						</div>
					</div>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Province</label>
							<select className='form-control'>
								<option>Western</option>
							</select>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-6'>
						<div className='form-group'>
							<label>City</label>
							<select className='form-control'>
								<option>Maharagama</option>
							</select>
						</div>
					</div>

					<div className='col-sm-6'>
						<div className='form-group'>
							<label>Contact Number</label>
							<div className='input-group mb-3'>
								<div className='input-group-prepend'>
									<span className='input-group-text' id='basic-addon1'>
										+94
									</span>
								</div>
								<input
									type='text'
									className='form-control'
									placeholder=''
									aria-label=''
									aria-describedby='button-addon2'
								/>
								<div className='input-group-append'>
									<button
										className='btn btn-dark text-white'
										type='button'
										id='button-addon2'
									>
										Verify
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			{user.loggedIn && (
				<div className='row ml-1'>
					<div className='input-group-prepend'>
						<div className='input-group-text'>
							<input type='checkbox' />
							<label className='mb-0 ml-1'>Save this to the address book</label>
						</div>
					</div>
				</div>
			)}

			{showMap && (
				<>
					<hr />
					<div
						className={
							addressConfirmed ? `${className} active` : `${className} inactive`
						}
					>
						<div className='col-sm-9'>
							<p className='m-0 font-weight-bold '>
								<span className='checkout__header-icon'>
									<i className='fas fa-check-circle fa-lg'></i>
								</span>
								Confirm Location on map
							</p>
						</div>
					</div>
					<div className='checkout_shipping-address-new mt-3'>
						<MapContainer
							key={key}
							location={location}
							googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `400px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
						<div
							style={{
								marginTop: '1rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<input
								type='number'
								className='form-control'
								placeholder='Enter Latitude'
								onChange={(e) => setLatitude(+e.target.value)}
								style={{ marginRight: '1rem' }}
							/>
							<input
								type='number'
								className='form-control'
								placeholder='Enter Longitude'
								style={{ marginRight: '1rem' }}
								onChange={(e) => setLongitude(+e.target.value)}
							/>
							<button
								className='btn btn-outline-dark'
								style={{ width: '18rem' }}
								onClick={saveLocation}
							>
								Place On Map
							</button>
						</div>
						{!addressConfirmed ? (
							<div className='row justify-content-end mr-0'>
								<div className='confirm-location'>
									<p
										className='btn btn-primary  text-white  mt-3 '
										onClick={(e) => {
											e.preventDefault();
											setAddressConfirmed(true);
											onAddressConfirm && onAddressConfirm();
										}}
									>
										Confirm Location
									</p>
								</div>
							</div>
						) : (
							<div className='row justify-content-end mr-0'>
								<div className='confirmed-location'>
									<button className='btn btn-light text-light  mt-3 '>
										Location Confirmed
									</button>
									<button
										className='btn btn-secondary text-white  mt-3 '
										onClick={(e) => {
											e.preventDefault();
											setAddressConfirmed(false);
										}}
									>
										Change
									</button>
								</div>
							</div>
						)}
					</div>
					<hr />
					<div
						className={
							courierOption ? `${className} active` : `${className} inactive`
						}
					>
						<div className='col-sm-9'>
							<p className='m-0 font-weight-bold '>
								<span className='checkout__header-icon'>
									<i className='fas fa-check-circle fa-lg'></i>
								</span>
								Select Courier Option
							</p>
						</div>
					</div>
					<div className='row no-gutters mt-3'>
						<div className='col-lg-7 col-sm-8 col-8'>
							<div className='row no-gutters'>
								<div className='col-2'>
									<img src={fedexLogo} className='rounded w-100' alt='' />
								</div>
								<div className='col-10'>
									<ul className='common-list ml-2 mt-2'>
										<li>
											<label className='check-container'>
												Next day delivery (within 24hrs)
												<input
													type='radio'
													name='deliver-method'
													value='pickup'
													onChange={(e) => setCourierOption(true)}
												/>
												<span className='checkmark-radio'></span>
											</label>
										</li>
										<li>
											<label className='check-container'>
												Standard delivery (3-5 business days)
												<input
													type='radio'
													name='deliver-method'
													value='to-door'
													onChange={(e) => setCourierOption(true)}
												/>
												<span className='checkmark-radio'></span>
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='row no-gutters mt-sm-3 mt-md-4'>
						<div className='col-lg-7 col-sm-8 col-8'>
							<div className='row no-gutters'>
								<div className='col-2'>
									<img src={upsLogo} className='rounded w-100' alt='' />
								</div>
								<div className='col-10'>
									<ul className='common-list ml-2 mt-2'>
										<li>
											<label className='check-container'>
												Next day delivery (within 24hrs)
												<input
													type='radio'
													name='deliver-method'
													value='pickup'
													onChange={(e) => setCourierOption(true)}
												/>
												<span className='checkmark-radio'></span>
											</label>
										</li>
										<li>
											<label className='check-container'>
												Standard delivery (3-5 business days)
												<input
													type='radio'
													name='deliver-method'
													value='to-door'
													onChange={(e) => setCourierOption(true)}
												/>
												<span className='checkmark-radio'></span>
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
