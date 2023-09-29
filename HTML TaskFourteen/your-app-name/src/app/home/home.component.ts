import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4" *ngFor="let country of peopleByCountry">
          <div [ngClass]="['country-box', getCountryClass(country.country)]">
            <h3>{{ country.country }}</h3>
            <ul>
              <li *ngFor="let person of country.people">{{ person.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [{ name: 'Douglas Pace' }, { name: 'Mcleod Mueller' }]
    },
    {
      country: 'US',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' }
      ]
    },
    {
      country: 'MARS',
      people: [{ name: 'Douglas Pace' }, { name: 'Mcleod Mueller' }]
    }
  ];

  getCountryClass(country: string): string {
    switch (country) {
      case 'UK':
        return 'uk';
      case 'US':
        return 'us';
      case 'MARS':
        return 'mars';
      default:
        return '';
    }
  }
}
