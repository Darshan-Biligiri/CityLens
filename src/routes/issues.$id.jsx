import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { useState } from "react";
import { CATEGORIES, formatDate, getSeedIssue, useIssues } from "@/lib/issues";
import { CategoryDot, StatusBadge } from "@/components/issue-bits";
import { DetailMapLazy } from "@/components/lazy-maps";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/issues/$id")({
    head: ({ params }) => {
        const i = getSeedIssue(params.id);
        const title = i ? `${i.title} — ${i.locality} · CityLens` : `Issue ${params.id} · CityLens`;
        const desc = i ? i.description.slice(0, 155) : "Citizen-reported pedestrian infrastructure issue in Bengaluru.";
        return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }] };
    },
    component: Detail,
});
const TIMELINE = ["reported", "in_progress", "resolved"];
function Detail() {
    const { id } = Route.useParams();
    const issues = useIssues();
    const issue = issues.find((i) => i.id === id);
    const [photo, setPhoto] = useState(0);
    if (!issue) {
        return (_jsxs("div", { className: "mx-auto max-w-xl px-5 py-24 text-center", children: [_jsx("p", { className: "font-mono text-sm text-muted-foreground", children: id }), _jsx("h1", { className: "mt-2 text-2xl font-semibold text-ink", children: "Issue not found" }), _jsx("p", { className: "mt-2 text-muted-foreground", children: "It may have been reported on another device." }), _jsx(Link, { to: "/issues", className: "mt-6 inline-block text-sm font-medium text-primary hover:underline", children: "Back to all issues" })] }));
    }
    const step = TIMELINE.indexOf(issue.status);
    const cat = CATEGORIES[issue.category];
    return (_jsxs("div", { className: "mx-auto max-w-6xl px-5 pt-8", children: [_jsxs(Link, { to: "/issues", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink", children: [_jsx(ArrowLeft, { size: 15 }), " All issues"] }), _jsxs("header", { className: "mt-6 flex flex-wrap items-start justify-between gap-4 border-b pb-6", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-3 font-mono text-xs text-muted-foreground", children: [_jsx("span", { children: issue.id }), _jsx("span", { children: "\u00B7" }), _jsxs("span", { className: "inline-flex items-center gap-1.5", children: [_jsx(CategoryDot, { category: issue.category }), cat.label] })] }), _jsx("h1", { className: "mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-ink", children: issue.title }), _jsxs("p", { className: "mt-2 flex items-center gap-1.5 text-muted-foreground", children: [_jsx(MapPin, { size: 15 }), " ", issue.address, ", ", issue.locality] })] }), _jsx(StatusBadge, { status: issue.status, className: "px-3 py-1 text-sm" })] }), _jsxs("div", { className: "mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]", children: [_jsxs("div", { children: [_jsx("img", { src: issue.photos[photo], alt: `Photo of ${issue.title}`, className: "aspect-[4/3] w-full rounded-sm bg-muted object-cover" }), issue.photos.length > 1 && (_jsx("div", { className: "mt-3 flex gap-2", children: issue.photos.map((p, i) => (_jsx("button", { onClick: () => setPhoto(i), "aria-label": `Photo ${i + 1}`, className: cn("size-16 overflow-hidden rounded-sm border-2", i === photo ? "border-ink" : "border-transparent"), children: _jsx("img", { src: p, alt: "", className: "h-full w-full object-cover" }) }, i))) })), _jsx("h2", { className: "eyebrow mt-10", children: "Description" }), _jsx("p", { className: "mt-3 text-[17px] leading-relaxed text-foreground", children: issue.description })] }), _jsxs("aside", { className: "space-y-8", children: [_jsx("dl", { className: "divide-y border-y text-sm", children: [
                                    ["Reported", formatDate(issue.reportedAt)],
                                    ["Last update", formatDate(issue.updatedAt)],
                                    ["Ward", issue.ward],
                                    ["Reported by", issue.reporter],
                                    ["Supporters", String(issue.supporters)],
                                    ["Coordinates", `${issue.lat.toFixed(4)}, ${issue.lng.toFixed(4)}`],
                                ].map(([k, v]) => (_jsxs("div", { className: "flex justify-between gap-4 py-3", children: [_jsx("dt", { className: "text-muted-foreground", children: k }), _jsx("dd", { className: "text-right font-medium text-ink", children: v })] }, k))) }), _jsxs("div", { children: [_jsx("h2", { className: "eyebrow mb-4", children: "Progress" }), _jsx("ol", { className: "space-y-4", children: TIMELINE.map((s, i) => (_jsxs("li", { className: "flex items-center gap-3 text-sm", children: [_jsx("span", { className: cn("grid size-5 place-items-center rounded-full border font-mono text-[10px]", i <= step ? "border-primary bg-primary text-primary-foreground" : "border-input text-muted-foreground"), children: i + 1 }), _jsx("span", { className: i <= step ? "font-medium text-ink" : "text-muted-foreground", children: s === "reported" ? "Reported by citizen" : s === "in_progress" ? "Acknowledged, work in progress" : "Resolved and verified" })] }, s))) })] }), _jsx("div", { className: "h-56 overflow-hidden rounded-sm border", children: _jsx(DetailMapLazy, { lat: issue.lat, lng: issue.lng, color: cat.color }) })] })] })] }));
}
