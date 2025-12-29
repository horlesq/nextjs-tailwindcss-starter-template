"use client";

import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

// Helper type to merge standard HTML props with Motion props
type MotionComponentProps<T extends HTMLElement> = HTMLMotionProps<any> &
  React.HTMLAttributes<T>;

export function MotionDiv({ children, ...props }: MotionComponentProps<HTMLDivElement>) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionSection({
  children,
  ...props
}: MotionComponentProps<HTMLElement>) {
  return <motion.section {...props}>{children}</motion.section>;
}

export function MotionH1({ children, ...props }: MotionComponentProps<HTMLHeadingElement>) {
  return <motion.h1 {...props}>{children}</motion.h1>;
}

export function MotionSpan({ children, ...props }: MotionComponentProps<HTMLSpanElement>) {
  return <motion.span {...props}>{children}</motion.span>;
}

export function MotionP({ children, ...props }: MotionComponentProps<HTMLParagraphElement>) {
  return <motion.p {...props}>{children}</motion.p>;
}

export function MotionH2({ children, ...props }: MotionComponentProps<HTMLHeadingElement>) {
  return <motion.h2 {...props}>{children}</motion.h2>;
}

export function MotionH3({ children, ...props }: MotionComponentProps<HTMLHeadingElement>) {
  return <motion.h3 {...props}>{children}</motion.h3>;
}

export function MotionH4({ children, ...props }: MotionComponentProps<HTMLHeadingElement>) {
  return <motion.h4 {...props}>{children}</motion.h4>;
}

export function MotionButton({
  children,
  ...props
}: MotionComponentProps<HTMLButtonElement>) {
  return <motion.button {...props}>{children}</motion.button>;
}

export function MotionA({ children, ...props }: MotionComponentProps<HTMLAnchorElement>) {
  return <motion.a {...props}>{children}</motion.a>;
}

export function MotionForm({ children, ...props }: MotionComponentProps<HTMLFormElement>) {
  return <motion.form {...props}>{children}</motion.form>;
}