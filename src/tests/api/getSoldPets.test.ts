import { test, expect } from '@playwright/test';
import { PetStoreAPI } from '../../api/PetStoreAPI';

test('Retrieve sold pets and list their names', async ({ request }) => {
    const api = new PetStoreAPI(request);
    
    const response = await api.getPetsByStatus();
    expect(response.status()).toBe(200);
    
    const pets = await response.json();
    const soldPets = pets.map((pet: { id: number; name: string }) => ({ id: pet.id, name: pet.name }));
    
    console.log('Sold Pets:', soldPets);
    expect(soldPets.length).toBeGreaterThan(0);
});