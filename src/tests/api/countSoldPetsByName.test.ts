import { test, expect } from '@playwright/test';
import { PetStoreAPI } from '../../api/PetStoreAPI';
import { PetCounter } from '../../utils/PetCounter';

test('Retrieve sold pets and count their occurrences by name', async ({ request }) => {
    const api = new PetStoreAPI(request);

    const response = await api.getPetsByStatus();
    expect(response.status()).toBe(200);

    const pets = await response.json();

    console.log('RAW PET DATA:', pets); 

    const soldPets = pets
        .filter((pet: { id: number; name?: string }) => pet.name && typeof pet.name === "string")
        .map((pet: { id: number; name: string }) => ({
            id: pet.id,
            name: pet.name.trim()
        }));

    console.log('CLEANED PET DATA:', soldPets);

    const petCounter = new PetCounter(soldPets);
    const petNameCounts = petCounter.countPetsByName();

    console.log('FINAL Sold Pets Count:', petNameCounts);
    expect(Object.keys(petNameCounts).length).toBeGreaterThan(0);
});
