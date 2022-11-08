import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'спаданням';
  itemShowItem = 12;
  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemUpdated(count: number): void { 
    this.itemShowItem = count;
  }

  onColumnsUpdated(colsNumber: number): void {
    this.columnsCountChange.emit(colsNumber);
  }
}
