export class PetCounter {
    private pets: { id: number; name?: string }[];

    constructor(pets: { id: number; name?: string }[]) {
        this.pets = pets;
    }

    countPetsByName(): Record<string, number> {
        const nameCounts: Record<string, number> = {};

        for (const pet of this.pets) {
            if (pet.name) {
                nameCounts[pet.name] = (nameCounts[pet.name] || 0) + 1;
            }
        }

        return nameCounts;
    }
}
