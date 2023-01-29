export class Advertiser {
    public async findAll() {
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/advertiser`)
        const responseJSON = await response.json();
        return console.log(responseJSON);
    }
    
    public async findOne(id: string) {}

    public async create() {}

    public async update(id: string) {}

    public async delete(id: string) {}
}