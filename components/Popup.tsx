import { Copy, X } from 'lucide-react';
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    subHeading: string;
    buttonText: string;
}

const Popup: React.FC<ModalProps> = ({ isOpen, onClose, subHeading, buttonText }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-85 flex items-center justify-center">
            <div className="bg-black p-8 border-2 rounded-lg text-center flex items-center justify-center gap-10">
                <div className='flex text-sm justify-center items-center gap-3'>
                    <p className='py-2 px-4 rounded-lg border-l border-gray-400'>{subHeading}</p>
                    <button className='py-2 px-4 rounded-lg border-r border-gray-400 hover:border-gray-500' onClick={() => { navigator.clipboard.writeText(subHeading) }}>
                        <Copy size={16} className='hover:text-blue-400 transition duration-200'/>
                    </button>
                </div>
                <button  className='flex justify-end items-center gap-1 border border-gray-400 hover:border-white w-fit self-end py-1 px-3 rounded-md' onClick={onClose}>Close<X size={20} className='text-red-600'/></button>
            </div>
        </div>
    );
};

export default Popup;