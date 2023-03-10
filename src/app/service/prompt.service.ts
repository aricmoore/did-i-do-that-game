import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private http: HttpClient) { }

	getPromptJson() {
		return this.http.get<any>("assets/prompts.json");
	}
}
