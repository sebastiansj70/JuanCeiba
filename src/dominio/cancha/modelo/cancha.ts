
export class Cancha {
    readonly #idCancha: number;
    readonly #statusCancha: string;

    constructor(idCancha: number, statusCancha: string) {
        this.#idCancha = idCancha;
        this.#statusCancha = statusCancha;
    }

    get idCancha(): number {
        return this.#idCancha;
    }

    get statusCancha(): string {
        return this.#statusCancha;
    }


}
