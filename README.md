# DataTable
Angular library generated with angular-cli (6.0.3) for more information and a full explanation go on this link: http://www.dzurico.com/generate-a-library-with-angular-6/

![alt text](https://raw.githubusercontent.com/daniele-zurico/library-ngx-data-table/master-detail/master-detail.jpg)

# dependencies
This packages require:

```
"@angular/common": "^6.0.0-rc.0 || ^6.0.0",
"@angular/core": "^6.0.0-rc.0 || ^6.0.0",
"@angular/material": "^6.1.0",
"@angular/cdk": "^6.1.0"
```


# Usage:
```
npm install --save npm install @angular/material @angular/cdk ngx-nested-data-table
```
In your module:
```
  imports: [
    ...
    BrowserAnimationsModule,
    NgxDataTableModule
  ],
```
in your template:
```
<ngx-data-table [data]="data"></ngx-data-table>
```
If you like the material style in your angular.json add in the style section:
```
"styles": [
{
  "input": "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
},
...
]
```

Where data is something like that:
```
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
```
