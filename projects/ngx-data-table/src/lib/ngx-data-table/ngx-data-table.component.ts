import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NgxDataTableDataSource } from './ngx-data-table-datasource';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styleUrls: ['./ngx-data-table.component.css'],
})
export class NgxDataTableComponent {
  @Input()
  set data(_data: any[]) {
    this.dataSource = new NgxDataTableDataSource(
      this.paginator,
      _data,
      this.sort
    );
    this.displayedColumns = Object.keys(_data[0]);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: NgxDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: Array<string>;
}
