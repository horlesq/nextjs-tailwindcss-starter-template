"use client";

import { motion } from "motion/react";

export function MotionDiv({ children, ...props }) {
    return <motion.div {...props}>{children}</motion.div>;
}

export function MotionSection({ children, ...props }) {
    return <motion.section {...props}>{children}</motion.section>;
}

export function MotionH1({ children, ...props }) {
    return <motion.h1 {...props}>{children}</motion.h1>;
}

export function MotionSpan({ children, ...props }) {
    return <motion.span {...props}>{children}</motion.span>;
}

export function MotionP({ children, ...props }) {
    return <motion.p {...props}>{children}</motion.p>;
}

export function MotionH2({ children, ...props }) {
    return <motion.h2 {...props}>{children}</motion.h2>;
}

export function MotionH3({ children, ...props }) {
    return <motion.h3 {...props}>{children}</motion.h3>;
}

export function MotionH4({ children, ...props }) {
    return <motion.h4 {...props}>{children}</motion.h4>;
}

export function MotionButton({ children, ...props }) {
    return <motion.button {...props}>{children}</motion.button>;
}

export function MotionA({ children, ...props }) {
    return <motion.a {...props}>{children}</motion.a>;
}

export function MotionForm({ children, ...props }) {
    return <motion.form {...props}>{children}</motion.form>;
}
