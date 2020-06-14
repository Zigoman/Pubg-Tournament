import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'pubg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public tabs: any[]

  constructor(private router: Router, private http$: HttpClient) {}

  ngOnInit() {
    this.tabs = [
      { action: 'dashboard', name: 'Dashboard' },
      { action: 'groups', name: 'Groups' },
      { action: 'results', name: 'Results' },
      { action: 'scoring', name: 'Scoring' },
    ]
  }

  public getUserData() {
    console.log('`${environment.api}/getData`', `${environment.api}/getData`)
    return this.http$.get<any>(`${environment.api}/getData`).map((x) => {
      return x
    })
  }

  public getData() {

  }

  public changeMain($event: string) {
    this.router.navigate([$event])
  }
}
