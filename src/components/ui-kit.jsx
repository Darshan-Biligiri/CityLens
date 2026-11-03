import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
const base = "group/btn inline-flex select-none items-center justify-center gap-2 rounded-sm font-medium transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200";
const variants = {
    primary: "bg-ink text-paper hover:bg-primary",
    secondary: "border border-input bg-paper text-ink hover:border-ink",
    ghost: "text-muted-foreground hover:bg-secondary hover:text-ink",
    inverse: "bg-paper text-ink hover:bg-accent",
};
const sizes = {
    sm: "h-8 px-3 text-[13px]",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-[15px]",
};
export function btn({ variant = "primary", size = "md", className } = {}) {
    return cn(base, variants[variant], sizes[size], className);
}
/** Arrow that nudges right on button hover. */
export const nudge = "group-hover/btn:translate-x-0.5";
export function PageIntro({ eyebrow, title, children, aside }) {
    return (_jsx("header", { className: "rise border-b pb-10 pt-12 md:pb-14 md:pt-16", children: _jsxs("div", { className: "grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end", children: [_jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "eyebrow", children: eyebrow }), _jsx("h1", { className: "mt-3 max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.022em] text-ink md:text-[2.6rem]", children: title }), children && _jsx("p", { className: "mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground", children: children })] }), aside] }) }));
}
export function SectionHead({ eyebrow, title, action }) {
    return (_jsxs("div", { className: "flex items-end justify-between gap-4", children: [_jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "eyebrow", children: eyebrow }), _jsx("h2", { className: "mt-2 text-2xl font-semibold tracking-[-0.015em] text-ink md:text-[1.75rem]", children: title })] }), action] }));
}
export function Panel({ step, title, hint, children, className }) {
    return (_jsxs("section", { className: cn("rounded-md border bg-paper", className), children: [_jsxs("div", { className: "flex items-baseline gap-3 border-b px-5 py-3.5", children: [step && _jsx("span", { className: "font-mono text-xs text-primary", children: step }), _jsx("h2", { className: "text-sm font-semibold text-ink", children: title }), hint && _jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: hint })] }), _jsx("div", { className: "p-5", children: children })] }));
}
export const container = "mx-auto w-full max-w-6xl px-5 md:px-8";
