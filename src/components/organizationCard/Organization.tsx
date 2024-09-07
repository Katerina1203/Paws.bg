import React from 'react';

export default function Organization() {
    const organization = {
        name: 'Animal Rescue Foundation',
        description: 'Animal Rescue Foundation е организация, посветена на спасяването на изоставени и бедстващи животни. Нашата мисия е да намерим постоянен дом за всяко животно, нуждаещо се от помощ.',
        logo: 'https://via.placeholder.com/150',
        address: 'ул. Спасение 12, Град на надеждата, България',
        email: 'contact@animalrescue.bg',
        phone: '+359 800 123 456',
        website: 'https://animalrescue.bg',
    };

    return (
        <div className="flex flex-col items-center p-5">
            <div className="bg-popover-background p-5 rounded-xl text-center max-w-[360px] w-full mb-10 shadow-lg">
                <div className="flex justify-center mb-5">
                    <img
                        src={organization.logo}
                        alt={`${organization.name} logo`}
                        className="w-40 h-40 rounded-full"
                    />
                </div>
                <h1 className="text-2xl mb-3">{organization.name}</h1>
                <p className="text-base mb-5">{organization.description}</p>
                <div>
                    <p className="text-sm text-gray-600 my-1"><strong>Адрес:</strong> {organization.address}</p>
                    <p className="text-sm text-gray-600 my-1"><strong>Email:</strong> {organization.email}</p>
                    <p className="text-sm text-gray-600 my-1"><strong>Телефон:</strong> {organization.phone}</p>
                    <p className="text-sm text-gray-600 my-1"><strong>Уебсайт:</strong> <a className="text-blue-500 no-underline hover:underline" href={organization.website} target="_blank" rel="noopener noreferrer">{organization.website}</a></p>
                </div>
            </div>
        </div>
    );
}
