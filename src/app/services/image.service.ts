import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class ImageService {

    localUrl = './assets/scripts/images.json';

    constructor(private http: HttpClient) { }

    getImages() {
        return this.http.get(this.localUrl)
        .pipe(map((res) => res["imagen"] ? res["imagen"] : [] )
        )
    }

    private handleError(error: any) {}

}