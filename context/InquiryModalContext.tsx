"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import InquiryModal from "@/components/InquiryModal";

type ModalType = "service" | "build" | "product";

interface InquiryModalContextType {
    openModal: (type: ModalType, productName?: string) => void;
    closeModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState<ModalType>("build");
    const [productName, setProductName] = useState<string | undefined>(undefined);

    const openModal = (type: ModalType, pName?: string) => {
        setType(type);
        setProductName(pName);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setProductName(undefined);
    };

    return (
        <InquiryModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <InquiryModal
                isOpen={isOpen}
                onClose={closeModal}
                initialType={type}
                productName={productName}
            />
        </InquiryModalContext.Provider>
    );
}

export function useInquiryModal() {
    const context = useContext(InquiryModalContext);
    if (context === undefined) {
        throw new Error("useInquiryModal must be used within an InquiryModalProvider");
    }
    return context;
}
