import { test, expect } from '@playwright/test';
import { PetStoreAPI } from '../../api/PetStoreAPI';
import { UserModel } from '../../models/UserModel';

test('Create a new user', async ({ request }) => {
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

    const response = await api.createUser(user);
    expect(response.status()).toBe(200);
});