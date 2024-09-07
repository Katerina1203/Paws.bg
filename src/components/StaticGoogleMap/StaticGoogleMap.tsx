"use client";
import React, { useMemo } from "react";
import { GoogleMap, Marker, Circle, useLoadScript } from "@react-google-maps/api";

type Props = {
    latitude: number;
    longitude: number;
};

const StaticGoogleMap = ({ latitude, longitude }: Props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });

    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

    if (loadError) {
        return <div className="text-red-500 text-center">Error loading map. Please try again later.</div>;
    }

    return (
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            {!isLoaded ? (
                <h1 className="text-center text-lg font-bold">Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="w-full h-full"
                    center={center}
                    zoom={14} 
                >
                   
                    <Marker position={center} />

                   
                    <Circle
                        center={center}
                        radius={300} 
                        options={{
                            fillColor: "#ff0000",
                            strokeOpacity: 0.7,
                            strokeColor: "#ff0000",
                            strokeWeight: 2,
                            fillOpacity: 0.2,
                        }}
                    />
                </GoogleMap>
            )}
        </div>
    );
};

export default StaticGoogleMap;
