'use client'
import { Listbox } from "@headlessui/react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function Contacts() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yvsv9mu', 'template_y4eh0ve', form.current, 'f3QBiTa3EG_32ZjYt').then((result) => {
            toast.success('Successfully Submitted Message!')
        }, (error) => {
            toast.error('Failed to Submit Message!')
        });
    };

    const dropLinks = [
        { id: 'webdev', name: 'Web Development' },
        { id: 'mobiledev', name: 'Mobile Development' },
        { id: 'botdev', name: 'Bot Development' },
        { id: 'uiux', name: 'UI/UX Design' },
        { id: 'other', name: 'Other'}
    ];

    const projectLinks = [
        { id: 'ticketprime', name: 'Ticket Prime' },
        { id: 'omegastudios', name: 'Omega Studios' },
        { id: 'other', name: 'Other'}
    ]

    const [ selectedLink, setSelectedLink ] = useState(dropLinks[0]);
    const [ selectedProject, setSelectedProject ] = useState(projectLinks[0]);

    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div className="container space-y-12 py-24">
                    <div>
                        <h1 className="text-4xl font-semibold text-white mb-1">Contact Us</h1>
                        <h2 className="text-lg text-gray-400">We are always open to new ideas and suggestions. If you have any questions, feel free to contact us.</h2>
                    </div>
                    <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-6 lg:space-y-0">
                        <div className="space-y-1">
                            <label className="text-gray-400 text-sm">Your Name</label>
                            <input className="w-full placeholder-gray-400 bg-transparent px-6 py-3 !outline-none rounded-xl text-white border-2 border-gray-500/20 hover:border-gray-500/50 active:border-_gray-300 transition-colors duration-200" placeholder="John Doe" type="text" name="user_name" required />
                        </div>
                        <div className="space-y-1">
                            <label className="text-gray-400 text-sm">Your Email</label>
                            <input className="w-full placeholder-gray-400 bg-transparent px-6 py-3 !outline-none rounded-xl text-white border-2 border-gray-500/20 hover:border-gray-500/50 active:border-_gray-300 transition-colors duration-200" placeholder="johndoe@gmail.com" type="email" name="email" required />
                        </div>
                        <div className="space-y-1">
                            <div className="text-gray-400 text-sm">What are you interested in?</div>
                            <div className="relative mt-1">
                                <Listbox value={selectedLink} onChange={setSelectedLink}>
                                    <Listbox.Button className="w-full bg-transparent px-6 py-3 text-left !outline-none rounded-xl text-white border-2 border-gray-500/20 hover:border-gray-500/50 transition-colors duration-200">
                                        {selectedLink.name}
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                            <i className="fas fa-chevron-down text-gray-400"></i>
                                        </span>
                                    </Listbox.Button>
                                    <Listbox.Options className="absolute mt-1 space-y-1 max-h-60 w-full overflow-auto rounded-xl bg-[#0A0908] border-2 border-_gray-500 py-1 text-base shadow-lg focus:outline-none sm:text-sm" >
                                        {dropLinks.map((link) => (
                                            <Listbox.Option key={link.id} value={link} className="cursor-pointer px-6 py-3 text-white  transition-colors duration-200" role="option">{link.name}</Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-gray-400 text-sm">What are you interested in?</div>
                            <div className="relative mt-1">
                                <Listbox value={selectedProject} onChange={setSelectedProject}>
                                    <Listbox.Button className="w-full bg-transparent px-6 py-3 text-left !outline-none rounded-xl text-white border-2 border-gray-500/20 hover:border-gray-500/50 active:border-_gray-300 transition-colors duration-200">
                                        {selectedProject.name}
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                            <i className="fas fa-chevron-down text-gray-400"></i>
                                        </span>
                                    </Listbox.Button>
                                    <Listbox.Options className="absolute mt-1 space-y-1 max-h-60 w-full overflow-auto rounded-xl bg-[#0A0908] border-2 border-_gray-500 py-1 text-base shadow-lg focus:outline-none sm:text-sm" >
                                        {projectLinks.map((link) => (
                                            <Listbox.Option key={link.id} value={link} className="cursor-pointer px-6 py-3 text-white transition-colors duration-200" role="option">{link.name}</Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="space-y-1">
                                <label className="text-gray-400 text-sm">Your Message</label>
                                <textarea className="w-full placeholder-gray-400 bg-transparent px-6 py-3 !outline-none rounded-xl text-white border-2 border-gray-500/20 hover:border-gray-500/50 active:border-_gray-300 transition-colors duration-200" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl." type="text" name="comment" rows="6" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="w-full lg:w-1/5 justify-center flex items-center group gap-2 border-2 border-gray-500/20 hover:border-gray-500/50 transition-all duration-200 px-8 py-3 rounded-xl">
                            <p className="text-white transition-all duration-200">Submit <i className="fas fa-paper-plane ml-2 text-white"></i></p>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}