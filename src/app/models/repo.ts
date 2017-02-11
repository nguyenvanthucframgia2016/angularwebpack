export class Repo {
    public id: number;
    public name: string;
    public html_url: string;
    public description: string;

    constructor(id: number, name: string, html_url: string, description: string) {
        this.id = id;
        this.name = name;
        this.html_url = html_url;
        this.description = description;
    }
}