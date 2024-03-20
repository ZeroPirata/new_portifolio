// ImageModal.tsx

import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Importar o ícone de fechar

interface ImageModalProps {
    src: string;
    alt: string;
    onClose: () => void; // Adiciona a propriedade onClose
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: 'relative',
                    maxWidth: '90%',
                    maxHeight: '90%',
                    cursor: 'pointer',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                <FaTimes
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        fontSize: '24px',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                />
            </div>
        </div>
    );
};
