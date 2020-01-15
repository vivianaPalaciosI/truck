import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class AboutService {

    localUrl = './assets/scripts/companyInformation.json';

    constructor(private http: HttpClient) { }

    getInformation() {
        return this.http.get(this.localUrl)
        .pipe(map((res) => res["information"] ? res["information"] : [] )
        )
    }

    private handleError(error: any) {}

}