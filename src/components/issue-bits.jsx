import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { CATEGORIES, STATUSES, formatDate } from "@/lib/issues";
import { cn } from "@/lib/utils";
const statusClass = {
    reported: "bg-status-reported-bg text-status-reported",
    in_progress: "bg-status-progress-bg text-status-progress",
    resolved: "bg-status-resolved-bg text-status-resolved",
};
export function StatusBadge({ status, size = "sm", className }) {
    return (_jsxs("span", { className: cn("inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-sm font-medium", size === "sm" ? "px-2 py-0.5 text-[11.5px]" : "px-2.5 py-1 text-[13px]", statusClass[status], className), children: [_jsx("span", { className: "size-1.5 rounded-full bg-current", "aria-hidden": true }), STATUSES[status]] }));
}
export function CategoryDot({ category }) {
    return _jsx("span", { className: "inline-block size-2 shrink-0 rounded-full", style: { background: CATEGORIES[category].color }, "aria-hidden": true });
}
export function IssueRow({ issue, active, onHover }) {
    return (_jsxs(Link, { to: "/issues/$id", params: { id: issue.id }, onMouseEnter: () => onHover?.(issue.id), onMouseLeave: () => onHover?.(null), onFocus: () => onHover?.(issue.id), onBlur: () => onHover?.(null), className: cn("group relative grid grid-cols-[76px_minmax(0,1fr)] gap-4 border-b px-5 py-4 transition-colors hover:bg-paper", "before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-ink before:opacity-0 before:transition-opacity", active && "bg-paper before:opacity-100"), children: [_jsx("img", { src: issue.photos[0], alt: "", loading: "lazy", className: "aspect-square w-full rounded-sm bg-muted object-cover" }), _jsxs("div", { className: "min-w-0", children: [_jsxs("div", { className: "flex items-center justify-between gap-2", children: [_jsxs("span", { className: "font-mono text-[11px] text-muted-foreground", children: [issue.id, " \u00B7 ", formatDate(issue.reportedAt)] }), _jsx(StatusBadge, { status: issue.status })] }), _jsx("h3", { className: "mt-1.5 truncate text-[15px] font-medium text-ink transition-colors group-hover:text-primary", children: issue.title }), _jsxs("p", { className: "mt-1 flex min-w-0 items-center gap-1.5 text-[13px] text-muted-foreground", children: [_jsx(CategoryDot, { category: issue.category }), " ", _jsxs("span", { className: "truncate", children: [CATEGORIES[issue.category].short, " \u00B7 ", issue.locality] })] })] })] }));
}
export function IssueCard({ issue }) {
    return (_jsxs(Link, { to: "/issues/$id", params: { id: issue.id }, className: "group flex flex-col overflow-hidden rounded-md border bg-paper transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_12px_32px_-16px_oklch(0.2_0.02_150/0.25)]", children: [_jsxs("div", { className: "relative overflow-hidden bg-muted", children: [_jsx("img", { src: issue.photos[0], alt: "", loading: "lazy", width: 1024, height: 768, className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" }), _jsx(StatusBadge, { status: issue.status, className: "absolute left-3 top-3" })] }), _jsxs("div", { className: "flex flex-1 flex-col p-4", children: [_jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [_jsx(CategoryDot, { category: issue.category }), " ", CATEGORIES[issue.category].short, _jsx("span", { className: "ml-auto font-mono text-[11px]", children: formatDate(issue.reportedAt) })] }), _jsx("h3", { className: "mt-2 font-medium leading-snug text-ink transition-colors group-hover:text-primary", children: issue.title }), _jsxs("div", { className: "mt-auto flex items-center justify-between pt-4 text-[13px] text-muted-foreground", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MapPin, { size: 13 }), " ", issue.locality] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Users, { size: 13 }), " ", issue.supporters] })] })] }), _jsx(ArrowUpRight, { size: 16, className: "sr-only" })] }));
}
