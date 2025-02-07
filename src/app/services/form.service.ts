import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormSubmitResponse } from '../models/form-submit-response.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'https://localhost:7147/api/Form/submit'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  submitForm(formData: any): Observable<FormSubmitResponse> {
    return this.http.post<FormSubmitResponse>(this.apiUrl, formData);
  }
}
