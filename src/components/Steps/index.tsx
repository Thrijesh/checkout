import React, { useState } from 'react';
import OrderDetails from '../OrderDetails';
import PaymentDetails from '../PaymentDetails';
import ShippinDetails from '../ShippingDetails';
import AccountDetails from '../AccountDetails';
import IUser from '../../interfaces/IUser';
import Title from '../Title';

export default function Steps({ user }: { user: IUser }) {

	const getClass = (elementIndex: number): string => {
		const baseStyle = `btn btn-circle`;
		const isActive = ` is-active`;
		const isComplete = ' completed';

		if (elementIndex === user.step) {
			return baseStyle + isActive;
		} else if (elementIndex < user.step) {
			return baseStyle + isComplete;
		}
		return baseStyle;
	};

	const next = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		user.setStep(user.step + 1);
	};
	const prev = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		user.setStep(user.step - 1);
	};

	const isShipmentDetails = 
		user.collectionMethod !== "none" && user.collectionMethod !== "to-door" ?
		null
		:
		<>
			<ShippinDetails next={next} prev={prev} user={user} />
		</>

	const content = [
		<>
			<AccountDetails next={next} user={user} />
		</>,
		isShipmentDetails
		,
		<>
			<PaymentDetails prev={prev} user={user} />
		</>,
	];

	if(isShipmentDetails === null) {
		content.splice(1, 1)
	} else {
		if(content.length < 3) {
			content.splice(1, 0, isShipmentDetails)
		}
	}

	return (
		<>
			<Title title={user.loggedIn ? 'Checkout' : 'Checkout - As Guest'} />
			<div className='main-section pt-0'>
				<div className='container'>
					<div className='card border-0 checkout-details-section'>
						<div className='card-body'>
							<div className='row title justify-content-center'>
								<h5 className='font-weight-bold'>Checkout</h5>
							</div>
							<div className='row justify-content-center mt-4'>
								<div className='stepwizard-3'>
									<div className='stepwizard-row '>
										<div className='stepwizard-step start-step col-4'>
											<button
												type='button'
												className={getClass(0)}
												disabled={user.step < 0 ? true : false}
												onClick={(e) => {
													e.preventDefault();
													user.setStep(0);
												}}
											>
												1
											</button>
										</div>
										{
											user.collectionMethod !== "to-door" ?
												null
												:
												<div className='stepwizard-step  col-4'>
													<button
														type='button'
														className={getClass(1)}
														disabled={user.step < 1 ? true : false}
														onClick={(e) => {
															e.preventDefault();
															user.setStep(1);
														}}
													>
														2
													</button>
												</div>
										}
										<div className='stepwizard-step end-step col-4'>
											<button
												type='button'
												className={getClass(user.collectionMethod !== "none" && user.collectionMethod !== "to-door" ? 1 : 2)}
												disabled={user.collectionMethod !== "none" && user.collectionMethod !== "to-door" ? user.step < 1 ? true : false : user.step < 2 ? true : false}
												onClick={(e) => {
													e.preventDefault();
													user.setStep(user.collectionMethod !== "none" && user.collectionMethod !== "to-door" ? 2 : 1);
												}}
											>
												{user.collectionMethod !== "to-door" ?
													"2"
													: "3"}
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='row justify-content-center mb-2'>
								<div className='stepwizard-names-3'>
									<div className='stepwizard-step col-4 p-1'>
										<p className={user.step === 0 ? 'font-weight-bold' : ''}>
											Account Details
										</p>
									</div>
									{
										user.collectionMethod !== "to-door" ?
											null
											:
											<div className='stepwizard-step col-4 p-1'>
												<p className={user.step === 1 ? 'font-weight-bold' : ''}>
													Shipping Details
												</p>
											</div> 
									}
									<div className='stepwizard-step col-4 p-1'>
										<p className={user.step === 2 ? 'font-weight-bold' : ''}>
											Payment & Billing
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row content-boxes '>
						<>
							{content[user.step]}
							<OrderDetails />
						</>
					</div>
				</div>
			</div>
		</>
	);
}