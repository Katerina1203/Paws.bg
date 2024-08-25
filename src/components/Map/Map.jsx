"use client"
import React, { useEffect, useState, useRef, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript, Circle, StandaloneSearchBox } from "@react-google-maps/api";
import { Target } from "../svgs"; // Import the SVG
import styles from './map.module.css'; // Import the CSS module

const GoogleMaps = ({
    address,
    setAddress,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
}) => {

    const [map, setMap] = useState(null);
    const [searchInput, setSearchInput] = useState(""); 

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

    const inputRef = useRef();

    const handlePlaceChange = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            setAddress(place.formatted_address);
            setLatitude(place.geometry.location.lat());
            setLongitude(place.geometry.location.lng());
            setSearchInput(place.formatted_address); 
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

                    const geocoder = new window.google.maps.Geocoder();
                    const { results } = await geocoder.geocode({ location: { lat, lng } });
                    if (results[0]) {
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
                            animation={window.google.maps.Animation.DROP}
                            onDragEnd={(coord) => {
                                const { latLng } = coord;
                                setLatitude(latLng.lat());
                                setLongitude(latLng.lng());

                                const geocoder = new window.google.maps.Geocoder();
                                geocoder.geocode({ location: { lat: latLng.lat(), lng: latLng.lng() } }, (results, status) => {
                                    if (status === "OK" && results[0]) {
                                        setAddress(results[0].formatted_address);
                                        setSearchInput(results[0].formatted_address);
                                    }
                                });
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
                            <Target width="24px" height="24px" fill="#fff" /> {/* Display the SVG inside the button */}
                        </button>
                    </GoogleMap>
                </>
            )}
        </div>
    );
};

export default GoogleMaps;
