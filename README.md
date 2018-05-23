# DataTable
Angular library generated with angular-cli for more information and a full explanation go on this link: http://www.dzurico.com/generate-a-library-with-angular-6/

If you want to have a master detail table nest your data in a "details" array:

example: 
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
