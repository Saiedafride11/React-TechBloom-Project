import { useState, useRef } from 'react';
import './MessageBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMessage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from "react-hook-form";

const MessageBox = () => {
const [open, setOpen] = useState(false)
const cancelButtonRef = useRef(null);
const { register, handleSubmit } = useForm();
const onSubmit = data => {
    alert("No Api Added !!!");
    setOpen(false);
};

  return (
    <div className="message-box">
      {     open === false && 
            <button onClick={() => setOpen(true)} style={{backgroundColor: '#FF906F'}}><FontAwesomeIcon icon={faMessage}/></button>
      }
      {open === true && 
            <button onClick={() => setOpen(false)} ref={cancelButtonRef} style={{backgroundColor: '#FF906F'}}><FontAwesomeIcon icon={faXmark} ref={cancelButtonRef}/></button>
      }
        
        <div className="Message-box-modal">
              <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" style={{position: "relative", zIndex: "9999"}} initialFocus={cancelButtonRef} onClose={setOpen}>
                          <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                          >
                          <div className="fixed inset-0 bg-white transition-opacity" />
                          </Transition.Child>

                          <div className="fixed inset-0 z-10 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0 message-box-extra">
                                      <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                      >
                                            <Dialog.Panel className="relative transform overflow-hidden  sm:my-8 sm:w-full">
                                                  <div className="message-box-inner">
                                                        <div className="flex items-center justify-center">
                                                              <div>
                                                                    <h2 className="text-right text-5xl leading-13 font-semibold">Learn More <br/> about <br/> Techboom!</h2>
                                                                    <div className="flex items-center justify-center mt-10">
                                                                          <FontAwesomeIcon icon={faFacebookSquare} style={{color: "#000", width: "30px", height: "30px", marginRight: "20px"}}/>
                                                                          <FontAwesomeIcon icon={faTwitterSquare} style={{color: "#000", width: "30px", height: "30px", marginRight: "20px"}}/>
                                                                          <FontAwesomeIcon icon={faYoutubeSquare} style={{color: "#000", width: "30px", height: "30px"}}/>
                                                                    </div>
                                                              </div>
                                                        </div>
                                                        <div className="message-box-form">
                                                              <h3 className="text-3xl font-medium text-left mb-8">Inquire Now</h3>
                                                              <form onSubmit={handleSubmit(onSubmit)}>
                                                                    <label className="text-xl">Full name:</label>
                                                                    <input defaultValue="" placeholder="Full name:" {...register("fName")} />
                                                                    <label className="text-xl">Email:</label>
                                                                    <input defaultValue="" placeholder="Email:" {...register("lName")} />
                                                                    <label className="text-xl">Message:</label>
                                                                    <textarea {...register("description")} placeholder="Message" style={{height: '80px'}} required/>
                                                                    <input type="submit" />
                                                              </form>
                                                        </div>
                                                  </div>

                                            </Dialog.Panel>
                                      </Transition.Child>
                                </div>
                          </div>
                    </Dialog>
              </Transition.Root> 
        </div>
    </div>
  )
}

export default MessageBox