import { UniqueSelectionDispatcher } from "@angular/cdk/collections";
import { FormGroupDirective } from "@angular/forms";

export class Company {
    data: any[];
    currentPageNumber: number;
    dataCount: number;
    hasNext: boolean;
    hasPrevious: boolean;
}
