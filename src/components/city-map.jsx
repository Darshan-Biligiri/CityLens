import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import L from "leaflet";
import { BENGALURU_CENTER, CATEGORIES } from "@/lib/issues";
const tiles = () => L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
});
const pin = (color, active = false) => L.divIcon({
    className: "",
    html: `<div class="cl-pin" data-active="${active}" style="background:${color}"></div>`,
    iconSize: active ? [20, 20] : [14, 14],
});
export function IssuesMap({ issues, activeId, onSelect }) {
    const el = useRef(null);
    const map = useRef(null);
    const layer = useRef(null);
    const markers = useRef(new Map());
    useEffect(() => {
        if (!el.current)
            return;
        map.current = L.map(el.current, { zoomControl: true }).setView(BENGALURU_CENTER, 12);
        tiles().addTo(map.current);
        layer.current = L.layerGroup().addTo(map.current);
        return () => { map.current?.remove(); map.current = null; };
    }, []);
    useEffect(() => {
        const g = layer.current;
        if (!g)
            return;
        g.clearLayers();
        markers.current.clear();
        issues.forEach((i) => {
            const m = L.marker([i.lat, i.lng], { icon: pin(CATEGORIES[i.category].color), title: i.title })
                .bindTooltip(`<strong>${i.id}</strong> · ${i.title.replace(/</g, "&lt;")}`, { direction: "top", offset: [0, -8] })
                .on("click", () => onSelect(i.id));
            m.addTo(g);
            markers.current.set(i.id, m);
        });
    }, [issues, onSelect]);
    useEffect(() => {
        markers.current.forEach((m, id) => {
            const i = issues.find((x) => x.id === id);
            if (i)
                m.setIcon(pin(CATEGORIES[i.category].color, id === activeId));
            if (id === activeId)
                m.setZIndexOffset(1000);
            else
                m.setZIndexOffset(0);
        });
    }, [activeId, issues]);
    return _jsx("div", { ref: el, className: "h-full w-full", role: "application", "aria-label": "Map of reported issues in Bengaluru" });
}
export function LocationPicker({ value, onChange }) {
    const el = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const cb = useRef(onChange);
    cb.current = onChange;
    useEffect(() => {
        if (!el.current)
            return;
        map.current = L.map(el.current).setView(BENGALURU_CENTER, 12);
        tiles().addTo(map.current);
        map.current.on("click", (e) => cb.current([e.latlng.lat, e.latlng.lng]));
        return () => { map.current?.remove(); map.current = null; };
    }, []);
    useEffect(() => {
        if (!map.current)
            return;
        if (!value) {
            marker.current?.remove();
            marker.current = null;
            return;
        }
        if (!marker.current)
            marker.current = L.marker(value, { icon: pin("oklch(0.43 0.09 152)", true) }).addTo(map.current);
        else
            marker.current.setLatLng(value);
    }, [value]);
    return _jsx("div", { ref: el, className: "h-full w-full cursor-crosshair", role: "application", "aria-label": "Click the map to set the issue location" });
}
export function DetailMap({ lat, lng, color }) {
    const el = useRef(null);
    useEffect(() => {
        if (!el.current)
            return;
        const m = L.map(el.current, { scrollWheelZoom: false }).setView([lat, lng], 16);
        tiles().addTo(m);
        L.marker([lat, lng], { icon: pin(color, true) }).addTo(m);
        return () => { m.remove(); };
    }, [lat, lng, color]);
    return _jsx("div", { ref: el, className: "h-full w-full", "aria-label": "Issue location map" });
}
export default IssuesMap;
