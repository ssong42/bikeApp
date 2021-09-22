import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bicycles } from '../mock-bicycles';

@Injectable({
  providedIn: 'root'
})
export class BicyclesService {
  private apiUrl = "http://localhost:3000/bicycles";
  private bicycles = new BehaviorSubject<Bicycles[]>([]);
  public bicycles$ = this.bicycles.asObservable();

  constructor(private http:HttpClient) { }

  loadBicycles(): void {
    this.http.get<Bicycles[]>(this.apiUrl).subscribe((bicycles) => {
      this.bicycles.next(bicycles);
    });
  }

}
