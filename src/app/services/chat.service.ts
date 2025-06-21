import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://chatbot-app-server-291370868073.europe-west1.run.app/chat';
//https://chatbot-appserver.onrender.com/chat
  constructor(private http: HttpClient) { }


  sendMessage(message: string): Observable<string> { 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string>( 
      `${this.apiUrl}/`, 
      { message: message }, 
      { headers }
    ).pipe(
      map( (response: any)=> response.response)  // Extract the content property
    );
  }
} 
