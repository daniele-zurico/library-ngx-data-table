import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  data: any[] = [
    {
      name: 'daniele',
      surname: 'zurico',
      sex: 'male'
    },
    {
      name: 'Emma',
      surname: 'Smith',
      sex: 'female',
      details: [
        {
          phone: '+44234323456',
          address: 'Oxford Street',
          city: 'London',
          details: [
            {
              country: 'UK'
            }
          ]
        },
        {
          a: 'Charlotte',
          b: 'Taylor'
        },
      ]
    }
  ];
}
