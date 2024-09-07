"use client"
import React, { useEffect, useState, useRef, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript, Circle, StandaloneSearchBox } from "@react-google-maps/api";
import { Crosshair } from "lucide-react";
import styles from './map.module.css';

type Props = {
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    latitude: number;
    setLatitude: React.Dispatch<React.SetStateAction<number>>;
    longitude: number;
    setLongitude: React.Dispatch<React.SetStateAction<number>>;
};

const GoogleMaps = ({
    address,
    setAddress,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
}: Props) => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [searchInput, setSearchInput] = useState<string>("");

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries: ['places'],
    });

    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

    const inputRef = useRef<google.maps.places.SearchBox | null>(null);

    const handlePlaceChange = () => {
        if (!inputRef.current) return;

        const places = inputRef.current.getPlaces();
        if (places && places.length > 0) {
            const place = places[0];
            setAddress(place.formatted_address || "");
            setLatitude(place.geometry?.location?.lat() || latitude);
            setLongitude(place.geometry?.location?.lng() || longitude);
            setSearchInput(place.formatted_address || "");
        }
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    setLatitude(lat);
                    setLongitude(lng);

                    const geocoder = new google.maps.Geocoder();
                    const { results } = await geocoder.geocode({ location: { lat, lng } });
                    if (results && results[0]) {
                        setAddress(results[0].formatted_address);
                        setSearchInput(results[0].formatted_address);
                    } else {
                        console.error("No address found for this location");
                    }

                    if (map) {
                        map.panTo({ lat, lng });
                    }
                },
                (error) => {
                    console.error("Error getting the location", error);
                },
                { enableHighAccuracy: true }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        if (isLoaded && map) {
            handleCurrentLocation();
        }
    }, [isLoaded, map]);

    return (
        <div className={styles.container}>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={center}
                        zoom={14}
                        onLoad={(mapInstance) => setMap(mapInstance)}
                    >
                        <StandaloneSearchBox
                            onLoad={(ref) => (inputRef.current = ref)}
                            onPlacesChanged={handlePlaceChange}
                        >
                            <input
                                type="text"
                                value={searchInput}
                                placeholder="Search Location"
                                onChange={(e) => setSearchInput(e.target.value)}
                                className={styles.searchInput}
                            />
                        </StandaloneSearchBox>

                        <Marker
                            draggable
                            animation={google.maps.Animation.DROP}
                            onDragEnd={(coord) => {
                                const latLng = coord.latLng;
                                if (latLng) {
                                    setLatitude(latLng.lat());
                                    setLongitude(latLng.lng());

                                    const geocoder = new google.maps.Geocoder();
                                    geocoder.geocode({ location: { lat: latLng.lat(), lng: latLng.lng() } }, (results, status) => {
                                        if (status === "OK" && results && results[0]) {
                                            setAddress(results[0].formatted_address);
                                            setSearchInput(results[0].formatted_address);
                                        }
                                    });
                                }
                            }}
                            position={{ lat: latitude, lng: longitude }}
                        />

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

                        <button
                            onClick={handleCurrentLocation}
                            className={styles.currentLocationButton}
                        >
                            <Crosshair />
                        </button>
                    </GoogleMap>
                </>
            )}
        </div>
    );
};

export default GoogleMaps;