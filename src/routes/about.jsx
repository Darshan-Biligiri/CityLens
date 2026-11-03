import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About CityLens — Walkable Bengaluru, one report at a time" },
            { name: "description", content: "Why CityLens exists and how citizens can help improve pedestrian infrastructure in Bengaluru." },
            { property: "og:title", content: "About CityLens" },
            { property: "og:description", content: "Why CityLens exists and how citizens can help improve Bengaluru's footpaths." },
        ],
    }),
    component: About,
});
const WAYS = [
    ["Report precisely", "One issue per report. A clear photo, the nearest landmark and an accurate pin make it actionable for a ward engineer."],
    ["Describe the impact", "Say who is affected and when — school drop-off, wheelchair users, night-time. Impact is what gets things prioritised."],
    ["Follow up", "Check back on the status. If something is marked resolved but isn't, report it again with a new photo."],
    ["Bring your neighbours", "Issues with more local support are harder to ignore. Share report links with your RWA or local groups."],
];
function About() {
    return (_jsxs("div", { className: "mx-auto max-w-6xl px-5 pt-16", children: [_jsx("p", { className: "eyebrow", children: "About" }), _jsxs("div", { className: "mt-4 grid gap-12 md:grid-cols-[1fr_1fr]", children: [_jsx("h1", { className: "text-4xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-5xl", children: "Walking is how most of Bengaluru gets around. The city should be built for it." }), _jsxs("div", { className: "space-y-5 text-[17px] leading-relaxed text-muted-foreground md:pt-2", children: [_jsx("p", { children: "Almost every trip in the city starts and ends on foot \u2014 to the bus stop, the metro, the market. Yet footpaths are broken, blocked or missing, and crossings are designed around vehicles." }), _jsx("p", { children: "CityLens turns everyday frustration into a shared, public record. Each report is located, photographed and tracked, so patterns become visible and the people responsible can act on evidence rather than anecdotes." }), _jsx("p", { children: "It is an independent, citizen-led project. This version is a working demo; reports are stored in your browser." })] })] }), _jsxs("section", { className: "mt-24", children: [_jsx("h2", { className: "text-2xl font-semibold tracking-tight text-ink", children: "How you can help" }), _jsx("dl", { className: "mt-8 grid border-t sm:grid-cols-2", children: WAYS.map(([t, d], i) => (_jsxs("div", { className: `border-b py-8 sm:pr-10 ${i % 2 ? "sm:border-l sm:pl-10" : ""}`, children: [_jsxs("dt", { className: "flex gap-3 font-medium text-ink", children: [_jsxs("span", { className: "font-mono text-sm text-primary", children: ["0", i + 1] }), t] }), _jsx("dd", { className: "mt-2 pl-8 text-sm leading-relaxed text-muted-foreground", children: d })] }, t))) })] }), _jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-between gap-4 rounded-sm bg-ink px-8 py-10 text-paper", children: [_jsx("p", { className: "text-xl font-medium", children: "Seen something on your walk today?" }), _jsx(Link, { to: "/report", className: "rounded-sm bg-paper px-5 py-3 text-sm font-medium text-ink hover:bg-accent", children: "Report an issue" })] })] }));
}
