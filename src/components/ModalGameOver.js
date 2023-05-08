import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { formatTimeMin } from '../utilities/formatTime';

function ModalGameOver({ isModalOpen, closeModal, openModal, time }) {
  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-gray-700 p-6 text-center align-middle shadow-xl transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-11 w-11 rounded-full bg-[#D1FAE5] text-[#059669]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <Dialog.Title
                    as="h3"
                    className="mt-2 text-lg font-medium leading-6 text-yellow-300"
                  >
                    You found all the characters in {formatTimeMin(time)}!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-white">
                      Enter your name to save your score on the leaderboard
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ModalGameOver;
