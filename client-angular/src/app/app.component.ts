import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL:string = '/api';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://4200-fceba7d2-05bf-4d3c-9b9a-1f0fbec14982.ws-eu01.gitpod.io/').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
      });
    }
}
