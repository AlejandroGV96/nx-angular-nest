import {
    ChangeDetectionStrategy,
    Component,
    inject,
    WritableSignal,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { TestModel } from "@shared";
import { HttpClientModule } from "@angular/common/http";
import { TestService } from "@angular-libs/api";

@Component({
    standalone: true,
    imports: [RouterModule, HttpClientModule],
    providers: [TestService],
    selector: "nx-angular-nest-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly #testService: TestService = inject(TestService);

    readonly testData: WritableSignal<TestModel | undefined> =
        this.#testService.data;

    getData(): void {
        this.#testService.getTestData();
    }
}
