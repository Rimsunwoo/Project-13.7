'use client';
import React, { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { useModalStore } from '@/store/modal.store';

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isCSR, setIsCSR] = useState<boolean>(false);
  const { isOpen, closeModal } = useModalStore(state => state);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;

  if (!isCSR) {
    return <></>;
  }

  return (
    <>
      {isOpen &&
        createPortal(
          <div>
            <div onClick={() => closeModal()} className=" fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
            <div className="bg-white fixed top-1/2 left-1/2 px-[5.5rem] py-12 flex flex-col justify-center items-start rounded-2xl translate-x-[-50%] translate-y-[-50%] z-30">{children}</div>
          </div>,
          document.body,
          // document.getElementById('modal-portal') as HTMLDivElement,
        )}
    </>
  );
};

export default Modal;