import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-street.jpg";
import { useIssues } from "@/lib/issues";
import { IssueCard } from "@/components/issue-bits";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "CityLens — Make every street better in Bengaluru" },
            { name: "description", content: "Report damaged footpaths, blocked walkways, unsafe crossings and potholes across Bengaluru, and follow them to resolution." },
            { property: "og:title", content: "CityLens — Make every street better" },
            { property: "og:description", content: "A citizen record of Bengaluru's walking infrastructure." },
        ],
    }),
    component: Home,
});
const STEPS = [
    { n: "01", t: "Spot it", d: "A broken slab, a blocked footpath, a crossing without a signal. If it makes walking harder, it counts." },
    { n: "02", t: "Report it", d: "Add a photo, pick a category and drop a pin. It takes under a minute and needs no account." },
    { n: "03", t: "Track it", d: "Every report gets a public ID and status, so neighbours can see it and ward offices can act on it." },
];
function Home() {
    const issues = useIssues();
    const resolved = issues.filter((i) => i.status === "resolved").length;
    const progress = issues.filter((i) => i.status === "in_progress").length;
    const localities = new Set(issues.map((i) => i.locality)).size;
    const recent = [...issues].sort((a, b) => b.reportedAt.localeCompare(a.reportedAt)).slice(0, 4);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.05fr_1fr] md:items-end md:pt-20", children: [_jsxs("div", { className: "rise", children: [_jsx("p", { className: "eyebrow", children: "Bengaluru \u00B7 Pedestrian infrastructure" }), _jsxs("h1", { className: "mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl", children: ["Make every", _jsx("br", {}), "street better."] }), _jsx("p", { className: "mt-6 max-w-md text-lg leading-relaxed text-muted-foreground", children: "CityLens is a public record of what makes Bengaluru hard to walk. Report a problem in a minute, and follow it until it's fixed." }), _jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [_jsxs(Link, { to: "/report", className: "inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-primary", children: ["Report an issue ", _jsx(ArrowRight, { size: 16 })] }), _jsx(Link, { to: "/issues", className: "inline-flex items-center gap-2 rounded-sm border border-input bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink", children: "Explore issues" })] })] }), _jsxs("figure", { className: "rise [animation-delay:120ms]", children: [_jsx("img", { src: hero, alt: "Pedestrians on an uneven footpath in Bengaluru", width: 1600, height: 1104, className: "aspect-[4/3] w-full rounded-sm object-cover" }), _jsx("figcaption", { className: "mt-2 font-mono text-[11px] text-muted-foreground", children: "Cunningham Road, 08:40 \u2014 slabs lifted by tree roots, reported Oct 2026" })] })] }), _jsx("section", { className: "border-y bg-paper", children: _jsx("dl", { className: "mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4", children: [
                        ["Issues reported", issues.length],
                        ["In progress", progress],
                        ["Resolved", resolved],
                        ["Localities", localities],
                    ].map(([k, v], i) => (_jsxs("div", { className: `py-8 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i % 2 ? "border-l pl-6 md:pl-8" : ""}`, children: [_jsx("dt", { className: "eyebrow", children: k }), _jsx("dd", { className: "mt-2 font-mono text-4xl font-medium tracking-tight text-ink", children: v })] }, k))) }) }), _jsxs("section", { className: "mx-auto max-w-6xl px-5 pt-20", children: [_jsxs("div", { className: "flex items-end justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "eyebrow", children: "Latest" }), _jsx("h2", { className: "mt-2 text-2xl font-semibold tracking-tight text-ink", children: "Recently reported" })] }), _jsxs(Link, { to: "/issues", className: "inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline", children: ["View all ", _jsx(ArrowUpRight, { size: 15 })] })] }), _jsx("div", { className: "mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", children: recent.map((i) => _jsx(IssueCard, { issue: i }, i.id)) })] }), _jsxs("section", { className: "mx-auto max-w-6xl px-5 pt-24", children: [_jsx("p", { className: "eyebrow", children: "How it works" }), _jsx("h2", { className: "mt-2 max-w-lg text-2xl font-semibold tracking-tight text-ink", children: "Three steps from a bad footpath to a fixed one." }), _jsx("ol", { className: "mt-10 grid border-t md:grid-cols-3", children: STEPS.map((s, i) => (_jsxs("li", { className: `py-8 md:pr-8 ${i > 0 ? "border-t md:border-l md:border-t-0 md:pl-8" : ""}`, children: [_jsx("span", { className: "font-mono text-sm text-primary", children: s.n }), _jsx("h3", { className: "mt-3 text-lg font-medium text-ink", children: s.t }), _jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.d })] }, s.n))) })] })] }));
}
