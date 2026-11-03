import { jsx as _jsx } from "react/jsx-runtime";
import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
const IssuesMapL = lazy(() => import("./city-map").then((m) => ({ default: m.IssuesMap })));
const LocationPickerL = lazy(() => import("./city-map").then((m) => ({ default: m.LocationPicker })));
const DetailMapL = lazy(() => import("./city-map").then((m) => ({ default: m.DetailMap })));
const Fallback = () => _jsx("div", { className: "h-full w-full animate-pulse bg-muted" });
export function IssuesMapLazy(p) {
    return _jsx(ClientOnly, { fallback: _jsx(Fallback, {}), children: _jsx(Suspense, { fallback: _jsx(Fallback, {}), children: _jsx(IssuesMapL, { ...p }) }) });
}
export function LocationPickerLazy(p) {
    return _jsx(ClientOnly, { fallback: _jsx(Fallback, {}), children: _jsx(Suspense, { fallback: _jsx(Fallback, {}), children: _jsx(LocationPickerL, { ...p }) }) });
}
export function DetailMapLazy(p) {
    return _jsx(ClientOnly, { fallback: _jsx(Fallback, {}), children: _jsx(Suspense, { fallback: _jsx(Fallback, {}), children: _jsx(DetailMapL, { ...p }) }) });
}
