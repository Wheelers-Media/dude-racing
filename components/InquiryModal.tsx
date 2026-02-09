"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Upload, AlertTriangle } from "lucide-react";

type ModalType = "service" | "build" | "product";

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialType: ModalType;
    productName?: string;
}

export default function InquiryModal({ isOpen, onClose, initialType, productName }: InquiryModalProps) {
    const [step, setStep] = useState(1);
    const [budget, setBudget] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "Welding Repair",
        urgency: "Standard",
        vehicle: { year: "", make: "", model: "" },
        goal: "",
        details: ""
    });

    // Submission State
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    // Construct content based on type
    const isSimpleForm = initialType === "service" || initialType === "product";

    const resetForm = () => {
        setStep(1);
        setBudget("");
        setFormData({
            name: "",
            email: "",
            phone: "",
            serviceType: productName || "Welding Repair",
            urgency: "Standard",
            vehicle: { year: "", make: "", model: "" },
            goal: "",
            details: ""
        });
        setSubmitStatus("idle");
    };

    const handleClose = () => {
        onClose();
        // Optional: Reset after delay if success, or immediately
        if (submitStatus === 'success') {
            setTimeout(resetForm, 500);
        }
    };

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleVehicleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            vehicle: { ...prev.vehicle, [field]: value }
        }));
    };

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const payload = {
                type: initialType,
                data: {
                    ...formData,
                    budget: isSimpleForm ? (initialType === 'product' ? 'Product Order' : null) : budget,
                    productName: initialType === 'product' ? productName : undefined
                }
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Failed to submit");
            }

            setSubmitStatus("success");
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "Something went wrong. Please try again.");
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                    className="relative w-full max-w-2xl bg-carbon border border-white/20 p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
                >
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-stainless hover:text-white transition-colors z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Success State */}
                    {submitStatus === "success" ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
                            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 mb-6">
                                <Upload className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-wider mb-2">Message Sent</h3>
                            <p className="text-stainless text-sm font-mono mb-8 max-w-sm">
                                Your inquiry has been received. {initialType === 'product' ? `Our team will review your order request for ${productName}.` : isSimpleForm ? "Our team will review your repair request." : "Bob will review your build application."}
                            </p>
                            <button onClick={handleClose} className="bg-white text-black font-heading font-bold uppercase px-8 py-3 tracking-widest hover:bg-stainless transition-colors rounded-none">
                                Return to Shop
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-8 border-b border-white/10 pb-4">
                                <span className="text-stainless text-xs uppercase tracking-[0.2em] block mb-2">
                                    Inquiry Form
                                </span>
                                <h2 className="text-2xl md:text-3xl font-heading text-white uppercase tracking-wider">
                                    {initialType === 'product' ? `Order Inquiry: ${productName}` : isSimpleForm ? "Local Fabrication & Repair" : "Start A Custom Project"}
                                </h2>
                            </div>

                            {/* Content Flow */}
                            {isSimpleForm ? (
                                // SCENARIO A: SERVICE / PRODUCT (Low Friction)
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-stainless block">Service Type</label>
                                            <select
                                                value={formData.serviceType}
                                                onChange={(e) => handleInputChange("serviceType", e.target.value)}
                                                className="w-full bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-signal outline-none font-mono text-sm"
                                            >
                                                <option>Welding Repair</option>
                                                <option>Performance Exhaust System</option>
                                                <option>Mobile Welding / Repair</option>
                                                <option>Aluminum Fabrication</option>
                                                <option>Bolt-on Install</option>
                                                <option>Transport</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-stainless block">Urgency</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-2 text-sm text-stainless cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="urgency"
                                                        value="Standard"
                                                        checked={formData.urgency === "Standard"}
                                                        onChange={(e) => handleInputChange("urgency", e.target.value)}
                                                        className="accent-white"
                                                    /> Standard
                                                </label>
                                                <label className="flex items-center gap-2 text-sm text-red-500 cursor-pointer font-bold">
                                                    <input
                                                        type="radio"
                                                        name="urgency"
                                                        value="Emergency"
                                                        checked={formData.urgency === "Emergency"}
                                                        onChange={(e) => handleInputChange("urgency", e.target.value)}
                                                        className="accent-red-500"
                                                    /> Emergency / Rush
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-stainless block">Contact Info</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            className="w-full bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none mb-3 font-mono text-sm"
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Phone Number (Priority)"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                className="w-full bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm"
                                            />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                className="w-full bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm"
                                            />
                                        </div>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="text-red-500 text-xs uppercase tracking-widest bg-red-500/10 p-3 border border-red-500/20">
                                            {errorMessage || "Something went wrong. Please try again."}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-stainless text-black font-heading font-bold uppercase py-4 tracking-widest hover:bg-white transition-colors rounded-none mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Request Call Back"}
                                    </button>
                                </form>
                            ) : (
                                // SCENARIO B: BUILD (High Friction)
                                <div className="space-y-6">
                                    {/* Progress Indicator */}
                                    <div className="flex gap-2 mb-6">
                                        {[1, 2, 3].map((s) => (
                                            <div key={s} className={`h-1 flex-1 ${s <= step ? "bg-white" : "bg-white/10"}`} />
                                        ))}
                                    </div>

                                    {step === 1 && (
                                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                            <div className="space-y-4">
                                                <label className="text-sm uppercase tracking-widest text-white block font-bold">Estimated Budget Range</label>
                                                <p className="text-xs text-stainless mb-4">Serious inquiries only. Quality fabrication requires appropriate funding.</p>

                                                <div className="grid grid-cols-1 gap-3">
                                                    {["$2,500 - $5,000", "$5,000 - $10,000", "$10,000+", "Undetermined"].map((opt) => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => {
                                                                setBudget(opt);
                                                                setStep(2);
                                                            }}
                                                            className="bg-page-bg border border-white/20 text-stainless hover:text-white hover:border-white p-4 text-left font-mono text-sm uppercase transition-all rounded-none flex justify-between group focus:bg-white/5"
                                                        >
                                                            {opt}
                                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </button>
                                                    ))}
                                                </div>

                                                <div className="flex items-center gap-3 text-yellow-500/80 text-xs mt-4 p-3 border border-yellow-500/20 bg-yellow-500/5">
                                                    <AlertTriangle className="w-4 h-4" />
                                                    <span>Custom fabrication projects typically start at $2,500.</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                            <div className="space-y-4">
                                                <label className="text-xs uppercase tracking-widest text-stainless block">Vehicle Details</label>
                                                <div className="grid grid-cols-3 gap-3">
                                                    <input type="text" placeholder="Year" value={formData.vehicle.year} onChange={(e) => handleVehicleChange("year", e.target.value)} className="bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm" />
                                                    <input type="text" placeholder="Make" value={formData.vehicle.make} onChange={(e) => handleVehicleChange("make", e.target.value)} className="bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm" />
                                                    <input type="text" placeholder="Model" value={formData.vehicle.model} onChange={(e) => handleVehicleChange("model", e.target.value)} className="bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm" />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-xs uppercase tracking-widest text-stainless block">Primary Goal</label>
                                                <div className="grid grid-cols-3 gap-3">
                                                    {["Street", "Track", "Show"].map(goal => (
                                                        <label key={goal} className={`bg-page-bg border ${formData.goal === goal ? 'bg-white text-black border-white' : 'border-white/20 text-stainless'} hover:border-white p-3 text-center cursor-pointer transition-all`}>
                                                            <input
                                                                type="radio"
                                                                name="goal"
                                                                value={goal}
                                                                checked={formData.goal === goal}
                                                                onChange={(e) => handleInputChange("goal", e.target.value)}
                                                                className="hidden"
                                                            />
                                                            <span className="font-heading text-sm uppercase tracking-wide">{goal}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <button onClick={() => setStep(3)} className="w-full bg-white text-black font-heading font-bold uppercase py-4 tracking-widest hover:bg-stainless transition-colors rounded-none mt-4">
                                                Next Step
                                            </button>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-stainless block">Project Details</label>
                                                <textarea
                                                    value={formData.details}
                                                    onChange={(e) => handleInputChange("details", e.target.value)}
                                                    placeholder="Tell us about your vision..."
                                                    rows={4}
                                                    className="w-full bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm resize-none"
                                                />
                                            </div>

                                            {/* (Optional) Photos - Not hooked up in this version */}
                                            {/* <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-stainless block">Current Photos</label>
                                                <div className="border-2 border-dashed border-white/20 bg-page-bg/50 p-8 flex flex-col items-center justify-center text-stainless hover:border-white/50 hover:text-white transition-colors cursor-pointer group">
                                                    <Upload className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                                    <span className="text-xs uppercase tracking-widest">Click to Upload</span>
                                                </div>
                                            </div> */}

                                            <div className="grid grid-cols-2 gap-4">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                                    className="bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm"
                                                />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                                    className="bg-page-bg border border-white/20 text-white p-3 rounded-none focus:border-white outline-none font-mono text-sm"
                                                />
                                            </div>

                                            {submitStatus === 'error' && (
                                                <div className="text-red-500 text-xs uppercase tracking-widest bg-red-500/10 p-3 border border-red-500/20">
                                                    {errorMessage || "Something went wrong. Please try again."}
                                                </div>
                                            )}

                                            <button
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                className="w-full bg-arc text-white font-heading font-bold uppercase py-4 tracking-widest hover:bg-blue-600 transition-colors rounded-none mt-4 shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50"
                                            >
                                                {isSubmitting ? "Submitting..." : "Submit Build Application"}
                                            </button>

                                            <button onClick={() => setStep(2)} className="w-full text-stainless text-xs uppercase tracking-widest hover:text-white mt-2">
                                                Back
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
