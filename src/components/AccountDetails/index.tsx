import React from 'react';
import IUser from '../../interfaces/IUser';
import PickupMethod from '../PickupMethod';
import profileImage from '../../assets/images/default-profile-icon.png';

export default function AccountDetails({
	next,
	user,
}: {
	next: React.MouseEventHandler<HTMLButtonElement>;
	user: IUser;
}): JSX.Element {
	return (
		<>
			<div className='col-sm-8 mt-2 pr-md-1 '>
				<div className='card border-0'>
					<div className='card-body'>
						<div className='row checkout__header checkout__customer-header active'>
							<div className='col-sm-9'>
								<p className='m-0 font-weight-bold'>
									<span className='checkout__header-icon'>
										<i className='fas fa-check-circle fa-lg'></i>
									</span>
									Customer Details
								</p>
							</div>
						</div>
						<div className='row no-gutters mt-3'>
							{user.loggedIn ? (
								<>
									<div className='col-lg-7 col-sm-10 '>
										<div className='row no-gutters'>
											<div className='col-sm-2 col-md-1'>
												<img
													src={profileImage}
													className='rounded w-100'
													alt=''
												/>
											</div>
											<div className='col-sm-10 col-md-11'>
												<p className='ml-2 m-0 font-weight-bold long-text'>
													John Doe
												</p>
												<small className='pl-2'>johndoe@gmail.com</small>
											</div>
										</div>
									</div>
									<div className='col-lg-5 col-sm-2 text-right'>
										{/* Todo: add link here */}
										<p className='btn-link ml-3'>Change Account</p>
									</div>
								</>
							) : (
								<>
									<div className='col-lg-7 col-sm-8 col-8'>
										<div className='row no-gutters'>
											<div className='col-sm-10'>
												<div className='mb-2'>
													<input
														type='text'
														className='form-control'
														placeholder='Enter your email here'
													/>
												</div>
												<p className='mb-0'>
													Already have an account ? {/* todo: add onClick*/}
													<p className='btn-link'>Sign In</p>
												</p>
											</div>
										</div>
									</div>
								</>
							)}
						</div>

						<PickupMethod user={user}/>
						<div className='row justify-content-end'>
							<div className='col-sm-4 col-md-3'>
								<p>
									<button
										className='btn btn-primary text-white w-100 mt-3'
										onClick={next}
									>
										{user.loggedIn
											? 'Proceed To Shipping'
											: 'Continue as Guest'}
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
