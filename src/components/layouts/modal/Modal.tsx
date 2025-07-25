import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-40">
            {/* Overlay with blur */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal content below navbar (assumes navbar height ~64px) */}
            <div className="absolute left-1/2 top-16 transform -translate-x-1/2 z-50 w-[90%] max-w-md bg-white shadow-xl rounded-xl p-6 border">
                {title && (
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
                )}
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
