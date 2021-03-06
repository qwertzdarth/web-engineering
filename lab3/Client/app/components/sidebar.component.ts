import {Component, OnInit} from "@angular/core";

import 'rxjs/add/operator/toPromise';
import {Http, HttpModule, Request, RequestOptions, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'my-sidebar',
    templateUrl: '../views/sidebar.component.html'
})
export class SidebarComponent implements OnInit{

    failed_logins: number = 0;
    server_start: Date = new Date();

    constructor(private http: Http){}

    ngOnInit(): void {
        //TODO Lesen Sie über die REST-Schnittstelle den Status des Servers aus und speichern Sie diesen in obigen Variablen
        let headers = new Headers({ 'token': JSON.parse(localStorage.getItem('currentUser')).token });
        let options = new RequestOptions({ headers: headers });
        this.http.get("http://localhost:8081/state").map((response: Response) => {
            return response.json();
        }).toPromise().then(state => {
            this.failed_logins = state['failed_logins'];
            this.server_start = new Date(state['server_start'] * 1000);
        });
    }


}
