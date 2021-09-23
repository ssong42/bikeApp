import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Part } from '../mock-parts';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
  private apiUrl = 'http://localhost:3001/parts';
  private parts = new BehaviorSubject<any>([]);
  public parts$ = this.parts.asObservable();

  constructor(private http: HttpClient) {}

  loadParts(): void {
    this.http.get<Part[]>(this.apiUrl).subscribe((parts) => {
      this.parts.next(parts);
    });
  }

  updateParts(): void {
    
  }
}
