import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bicycle } from '../mock-bicycles';

@Injectable({
  providedIn: 'root'
})
export class BicyclesService {
  private apiUrl = "http://localhost:3001/bicycles";
  private bicycles = new BehaviorSubject<Bicycle[]>([]);
  public bicycles$ = this.bicycles.asObservable();

  constructor(private http:HttpClient) { }

  loadBicycles(): void {
    this.http.get<Bicycle[]>(this.apiUrl).subscribe((bicycles) => {
      this.bicycles.next(bicycles);
    });
  }

  updateBicycle(bike: Bicycle): void {
    const putApiUrl = `http://localhost:3000/bicycles/${bike._id}`;

    this.http.put<Bicycle>(putApiUrl, bike).subscribe(() => {
      this.loadBicycles();
    });
  }

}
