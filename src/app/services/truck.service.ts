import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class TruckService {

    localUrl = './assets/scripts/truck.json';

    constructor(private http: HttpClient) { }

    getTrucks() {
        return this.http.get(this.localUrl)
        .pipe(map((res) => res["truck"] ? res["truck"] : [] )
        )
    }

    private handleError(error: any) {}

}