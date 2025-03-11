import { test, expect } from '@playwright/test';
import { PetStoreAPI } from '../../api/PetStoreAPI';
import { UserModel } from '../../models/UserModel';

test('Retrieve user data', async ({ request }) => {
    const api = new PetStoreAPI(request);
    const user: UserModel = {
        id: Math.floor(Math.random() * 100000),
        username: `autotest_${Date.now()}`,
        firstName: "Test",
        lastName: "User",
        email: `autotest_${Date.now()}@example.com`,
        password: "Test@1234",
        phone: "9876543210",
        userStatus: 1
    };

    const createResponse = await api.createUser(user);
    expect(createResponse.status()).toBe(200);
    console.log('Created User:', user.username);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = await api.getUser(user.username);
    expect(response.status()).toBe(200);
    
    const userData = await response.json();
    console.log('Retrieved User:', userData);
    
    expect.soft(userData.username).toBe(user.username);
    expect.soft(userData.email).toBe(user.email);
    expect.soft(userData.firstName).toBe(user.firstName);
    expect.soft(userData.lastName).toBe(user.lastName);
    expect.soft(userData.phone).toBe(user.phone);
});