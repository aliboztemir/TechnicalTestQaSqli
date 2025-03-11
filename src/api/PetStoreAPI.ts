import { APIRequestContext } from '@playwright/test';
import { UserModel } from '../models/UserModel';

export class PetStoreAPI {
    private request: APIRequestContext;
    private baseURL: string;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseURL = process.env.PETSTORE_API_TEST_BASE_URL!;
    }

    async createUser(user: UserModel) {
        return await this.request.post(`${this.baseURL}/user`, { data: user });
    }

    async getUser(username: string) {
        return await this.request.get(`${this.baseURL}/user/${username}`);
    }
}