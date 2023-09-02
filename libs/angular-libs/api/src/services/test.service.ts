import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";
import { TestModel } from "@shared";

@Injectable({
    providedIn: "root",
})
export class TestService {
    readonly #http: HttpClient = inject(HttpClient);
    readonly #BASE_URL: string = "http://localhost:3000/api";

    readonly data: WritableSignal<TestModel | undefined> = signal<
        TestModel | undefined
    >(undefined);

    getTestData(): void {
        this.#http
            .get<TestModel>(`${this.#BASE_URL}/data`)
            .pipe(
                tap((data) => {
                    this.data.set(data);
                }),
            )
            .subscribe();
    }
}
