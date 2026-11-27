"use client";

import dynamic from "next/dynamic";
import { TlcCenter } from "@/lib/mock-data";

const MapView = dynamic(() => import("@/components/map-client"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
      <p className="text-muted-foreground">Загрузка карты…</p>
    </div>
  ),
});

export default function MapLoader({ centers }: { centers: TlcCenter[] }) {
  return <MapView centers={centers} />;
}
