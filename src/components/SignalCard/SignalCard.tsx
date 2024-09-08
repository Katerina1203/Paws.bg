"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import StaticGoogleMap from "@/components/StaticGoogleMap/StaticGoogleMap";
import type { ISignal } from "@/types/models";

type Props = {
    signal: ISignal;
}

const SignalCard = ({ signal }: Props) => {
    const latitude = signal.location.coordinates[1];
    const longitude = signal.location.coordinates[0];

    const [address, setAddress] = useState<string>("");

    useEffect(() => {

        const fetchAddress = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
                );
                const data = await response.json();

                if (data.results && data.results.length > 0) {

                    setAddress(data.results[0].formatted_address);
                } else {
                    setAddress("Адресът не е намерен");
                }
            } catch (error) {
                console.error("Error fetching address:", error);
                setAddress("Грешка при намиране на адрес");
            }
        };

        fetchAddress();
    }, [latitude, longitude]);

    return (
        <div className="max-w-80 min-h-80">
            <Link href={`/allsignals/${signal._id}`} className="block">
                <div className="w-full flex items-center justify-between">
                </div>
                <div className="mt-2">
                    <p>{signal.name}</p>
                </div>
                <div className="mt-4">
                    <p className="text-xs">Локация: <span className="text-xs">{address ? address : "Зареждане на адрес..."}</span></p>
                </div>


                <div className="w-full flex justify-center mx-auto">
                    <StaticGoogleMap
                        latitude={latitude}
                        longitude={longitude}
                    />
                </div>
            </Link>
        </div>
    );
};

export default SignalCard;
