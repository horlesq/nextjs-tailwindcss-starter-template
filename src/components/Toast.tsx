"use client";

import { AnimatePresence, motion } from "motion/react";
import { LuCheck, LuCircleAlert } from "react-icons/lu";

interface AlertData {
    show: boolean;
    type: "success" | "error" | string;
    message: string;
}

interface ToastProps {
    alert: AlertData | null;
}

const variants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.98 },
};

export default function Toast({ alert }: ToastProps) {
    if (!alert?.show) return null;

    const isSuccess = alert.type === "success";
    const tone = isSuccess
        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-200 shadow-emerald-500/20"
        : "bg-red-500/10 border-red-500/40 text-red-700 dark:text-red-200 shadow-red-500/20";

    return (
        <AnimatePresence>
            {alert.show && (
                <motion.div
                    key={alert.message}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50"
                >
                    <div
                        className={`min-w-[260px] max-w-sm rounded-xl border px-4 py-3 shadow-lg backdrop-blur ${tone}`}
                    >
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                                {isSuccess ? (
                                    <LuCheck className="w-5 h-5" />
                                ) : (
                                    <LuCircleAlert className="w-5 h-5" />
                                )}
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold">
                                    {isSuccess ? "Succes" : "Eroare"}
                                </p>
                                <p className="text-sm leading-5">
                                    {alert.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
