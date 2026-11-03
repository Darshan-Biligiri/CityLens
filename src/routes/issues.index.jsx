import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { CATEGORIES, STATUSES, filterIssues, useIssues } from "@/lib/issues";
import { CategoryDot, IssueRow } from "@/components/issue-bits";
import { IssuesMapLazy } from "@/components/lazy-maps";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/issues/")({
    head: () => ({
        meta: [
            { title: "Explore issues — CityLens Bengaluru" },
            { name: "description", content: "Map of reported footpath, crossing and accessibility issues across Bengaluru. Search and filter by category and status." },
            { property: "og:title", content: "Explore issues across Bengaluru" },
            { property: "og:description", content: "Search and filter citizen reports on an interactive map." },
        ],
    }),
    component: Explore,
});
function toggle(list, v) {
    return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}
function Chip({ on, onClick, children }) {
    return (_jsx("button", { type: "button", onClick: onClick, "aria-pressed": on, className: cn("inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-xs font-medium transition-colors", on ? "border-ink bg-ink text-paper" : "border-input bg-paper text-foreground hover:border-ink"), children: children }));
}
function Explore() {
    const issues = useIssues();
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [cats, setCats] = useState([]);
    const [sts, setSts] = useState([]);
    const [active, setActive] = useState(null);
    const list = useMemo(() => filterIssues(issues, q, cats, sts), [issues, q, cats, sts]);
    const onSelect = useCallback((id) => navigate({ to: "/issues/$id", params: { id } }), [navigate]);
    const dirty = q || cats.length || sts.length;
    return (_jsxs("div", { className: "grid border-b md:h-[calc(100vh-3.5rem)] md:grid-cols-[420px_1fr]", children: [_jsxs("aside", { className: "flex min-h-0 flex-col border-r bg-background", children: [_jsxs("div", { className: "space-y-4 border-b p-4", children: [_jsxs("div", { className: "flex items-baseline justify-between", children: [_jsx("h1", { className: "text-lg font-semibold tracking-tight text-ink", children: "Explore issues" }), _jsxs("span", { className: "font-mono text-xs text-muted-foreground", "aria-live": "polite", children: [list.length, " of ", issues.length] })] }), _jsxs("label", { className: "relative block", children: [_jsx("span", { className: "sr-only", children: "Search issues" }), _jsx(Search, { size: 16, className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }), _jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search locality, street or ID", className: "w-full rounded-sm border border-input bg-paper py-2 pl-9 pr-3 text-sm outline-none focus:border-ink" })] }), _jsxs("div", { children: [_jsx("p", { className: "eyebrow mb-2", children: "Status" }), _jsx("div", { className: "flex flex-wrap gap-1.5", children: Object.keys(STATUSES).map((s) => (_jsx(Chip, { on: sts.includes(s), onClick: () => setSts(toggle(sts, s)), children: STATUSES[s] }, s))) })] }), _jsxs("div", { children: [_jsx("p", { className: "eyebrow mb-2", children: "Category" }), _jsx("div", { className: "flex flex-wrap gap-1.5", children: Object.keys(CATEGORIES).map((c) => (_jsxs(Chip, { on: cats.includes(c), onClick: () => setCats(toggle(cats, c)), children: [_jsx(CategoryDot, { category: c }), " ", CATEGORIES[c].short] }, c))) })] }), dirty ? (_jsxs("button", { onClick: () => { setQ(""); setCats([]); setSts([]); }, className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-ink", children: [_jsx(X, { size: 12 }), " Clear filters"] })) : null] }), _jsx("div", { className: "order-last min-h-0 flex-1 overflow-y-auto", children: list.length ? (list.map((i) => _jsx(IssueRow, { issue: i, active: active === i.id, onHover: setActive }, i.id))) : (_jsx("p", { className: "p-8 text-center text-sm text-muted-foreground", children: "No issues match these filters." })) })] }), _jsx("div", { className: "relative h-[420px] md:order-none md:h-auto max-md:order-first", children: _jsx(IssuesMapLazy, { issues: list, activeId: active, onSelect: onSelect }) })] }));
}
