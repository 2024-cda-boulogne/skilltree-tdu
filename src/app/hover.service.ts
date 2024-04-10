import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HoverService {
  private hoveredApprenant = new BehaviorSubject<number | null>(null);
  hoveredApprenant$ = this.hoveredApprenant.asObservable();

  hoverUser(apprenantId: number | null) {
    this.hoveredApprenant.next(apprenantId);
  }
}