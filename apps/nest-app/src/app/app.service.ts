import { Injectable } from "@nestjs/common";
import { TestModel } from "@shared";

@Injectable()
export class AppService {
    #requestCount: number = 0;

    getData(): TestModel {
        return { prop: `request ${++this.#requestCount}` };
    }
}
