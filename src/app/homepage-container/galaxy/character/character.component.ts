import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataServiceService } from 'src/app/data-service.service';
import { HoverService } from 'src/app/hover.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent implements OnInit, OnDestroy {
  chars: any;
  timers: any;
  Math: Math = Math;

  hoveredUserId: number | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private dataService: DataServiceService,
    private hoverService: HoverService
  ) { }
  
  async ngOnInit(): Promise<void> {
    this.chars = await this.dataService.getAllApprenant();

    this.timers = [
      "11",
      "12.4",
      "13.2",
      "14",
      "12.5",
      "13.4",
      "14.2",
      "12.8",
      "13.5",
      "14.4",
      "12.6",
      "13.6",
    ];

    this.subscription = this.hoverService.hoveredApprenant$.subscribe(apprenantId => {
      this.hoveredUserId = apprenantId;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
