import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const researchLocations = [
  {
    institution: "University of Oulu",
    city: "Oulu",
    country: "Finland",
    coordinates: [25.4715, 65.0121],
  },
  {
    institution: "Julius-Maximilians University",
    city: "Würzburg",
    country: "Germany",
    coordinates: [9.9534, 49.7913],
  },
  {
    institution: "Sahlgrenska Institute",
    city: "Gothenburg",
    country: "Sweden",
    coordinates: [11.9746, 57.7089],
  },
  {
    institution: "Institut Pasteur",
    city: "Paris",
    country: "France",
    coordinates: [2.3522, 48.8566],
  },
  {
    institution: "Kyung Hee University",
    city: "Seoul",
    country: "South Korea",
    coordinates: [126.978, 37.5665],
  },
  {
    institution: "Anna University",
    city: "Chennai",
    country: "India",
    coordinates: [80.2707, 13.0827],
  },
  {
    institution:
      "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR)",
    city: "Bangalore",
    country: "India",
    coordinates: [77.5946, 12.9716],
  },
];

export default function ResearchMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-2xl">

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          International Research Journey
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Research training and collaborations across experimental biology,
          neuroscience, extracellular vesicle research, and computational
          multiomics workflows.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#071018]">

        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={3}
          limitToBounds={false}
          centerOnInit
          wheel={{ step: 0.15 }}
          doubleClick={{ disabled: true }}
        >
          {({
            zoomIn,
            zoomOut,
            resetTransform,
          }) => (
            <>
              {/* Controls */}
              <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">

                <button
                  onClick={() => zoomIn()}
                  className="rounded-xl border border-white/10 bg-[#0f172a]/90 px-3 py-2 text-lg font-bold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-900"
                >
                  +
                </button>

                <button
                  onClick={() => zoomOut()}
                  className="rounded-xl border border-white/10 bg-[#0f172a]/90 px-3 py-2 text-lg font-bold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-900"
                >
                  −
                </button>

                <button
                  onClick={() => resetTransform()}
                  className="rounded-xl border border-white/10 bg-[#0f172a]/90 px-3 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-900"
                >
                  Reset
                </button>
              </div>

              <TransformComponent
                wrapperClass="!w-full"
                contentClass="!w-full"
              >

                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 260,
                    center: [45, 38],
                  }}
                  width={900}
                  height={520}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#1e293b"
                          stroke="#334155"
                          strokeWidth={0.6}
                          style={{
                            default: {
                              outline: "none",
                            },
                            hover: {
                              fill: "#155e75",
                              outline: "none",
                            },
                            pressed: {
                              outline: "none",
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {researchLocations.map((location) => (
                    <Marker
                      key={`${location.city}-${location.institution}`}
                      coordinates={
                        location.coordinates as [number, number]
                      }
                    >
                      <g className="cursor-pointer">

                        <circle
                          r={5}
                          fill="#22d3ee"
                          stroke="#ecfeff"
                          strokeWidth={2}
                        />

                        <circle
                          r={10}
                          fill="rgba(34, 211, 238, 0.15)"
                        />

                        <title>
                          {location.institution}
                          {"\n"}
                          {location.city}, {location.country}
                        </title>

                      </g>
                    </Marker>
                  ))}
                </ComposableMap>

              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}