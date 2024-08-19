import React from 'react';
import styles from './organisation.module.css'; 

export default function Organisation() {
    const organization = {
        name: 'Tech Innovators Inc.',
        description: 'Tech Innovators is a leading company in the tech industry, focused on bringing innovative solutions to market.',
        logo: 'https://via.placeholder.com/150',
        address: '123 Innovation Drive, Tech City, TC 54321',
        email: 'info@techinnovators.com',
        phone: '+1 800 123 4567',
        website: 'https://techinnovators.com',
    };

    return (
        <div className={styles.container}>
            <div className={styles.organizationCard}>
                <div className={styles.imageContainer}>
                    <img
                        src={organization.logo}
                        alt={`${organization.name} logo`}
                        className={styles.organizationLogo}
                    />
                </div>
                <h1 className={styles.name}>{organization.name}</h1>
                <p className={styles.description}>{organization.description}</p>
                <div className={styles.contactInfo}>
                    <p><strong>Address:</strong> {organization.address}</p>
                    <p><strong>Email:</strong> {organization.email}</p>
                    <p><strong>Phone:</strong> {organization.phone}</p>
                    <p><strong>Website:</strong> <a href={organization.website} target="_blank" rel="noopener noreferrer">{organization.website}</a></p>
                </div>
            </div>
        </div>
    );
}
