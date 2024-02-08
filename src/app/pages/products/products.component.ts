import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription, debounceTime, distinctUntilChanged, filter, forkJoin, map, subscribeOn, switchMap, tap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsApiActions } from 'src/app/state/products.actions';
import { selectProducts } from 'src/app/state/products.selectors';
import { icFilter, icLoading, icPlus, icStars } from 'src/assets/svgs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  icStars = icStars;
  icFilter = icFilter;
  icPlus = icPlus;
  icLoading = icLoading;

  Math = Math;

  dataFetching: boolean = false;

  _search!: string;
  _search$ = new BehaviorSubject(this._search);
  searchSubscription!: Subscription;

  set search(value: string) {
    this._search = value;
    this._search$.next(this._search);
  }

  products$ = this.store.select(selectProducts);

  constructor(private productsService: ProductsService, private store: Store) { }

  ngOnInit() {
    this.searchSubscription = this._search$.asObservable().pipe(
      filter(searchText => !!searchText || searchText === ''),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.dataFetching = true;
      }),
      switchMap(searchText => this.productsService.getProducts(searchText))
    ).subscribe((products) => {
      this.store.dispatch(ProductsApiActions.retrievedProductList({ products }));
      this.dataFetching = false;
    });
  }
}
