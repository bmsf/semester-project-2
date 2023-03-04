import { AnimatePresence, motion as m } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const MakeBidModal = ({
	open,
	handleClose,
	highestBid,
	onChange,
	onSubmit,
	formData,
}) => {
	return (
		<AnimatePresence>
			{open && (
				<>
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, opacity: 1 }}
						id='backdrop'
						className='overflow-y-hidden backdrop-blur-md bg-[#BCBCBF] overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-screen flex items-center justify-center w-screen'
					>
						<div className='modal bg-white flex flex-col items-center p-24 my-20 justify-center h-full md:h-1/3  w-full md:w-2/3 lg:w-2/4 xl:w-2/4 rounded'>
							<div className='w-full flex flex-col gap-20 md:gap-10'>
								<div className='flex justify-between w-full'>
									<h2 className='self-center'>Make a bid</h2>

									<div className='hover:bg-gray rounded-full p-1'>
										<XMarkIcon
											className='h-8 w-8 hover:bg-gray rounded-full cursor-pointer'
											onClick={handleClose}
										/>
									</div>
								</div>
								<form className='flex flex-col gap-2' onSubmit={onSubmit}>
									<div className='relative'>
										<input
											type='number'
											id='amount'
											placeholder={`Current highest bid: ${
												highestBid ? highestBid.amount : 'No bids'
											}`}
											onChange={onChange}
											value={formData.amount === 0 ? '' : formData.amount}
											className='w-full border border-black rounded-lg p-2.5 text-black'
											title='The bid needs to be a number without space or any signs'
										/>
									</div>

									<button
										className='rounded-md font-thin py-2.5 my-2.5 text-white bg-transparent text-lg border border-black bg-black w-full'
										type='submit'
									>
										Place Bid
									</button>
								</form>
							</div>
						</div>
					</m.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default MakeBidModal;
