import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Good } from '../models/good';
import { GoodGroup } from '../models/good-group';
import { InstallItem } from '../models/install-item';
import { InstallItemGood } from '../models/install-item-good';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  categories$ = new BehaviorSubject<Category[]>([]);
  installItems$ = new BehaviorSubject<InstallItem[]>([]);
  constructor(private http: HttpClient) { }

  init() {
    this.getFull();
    this.getFullInstallItems();
  }

  getFull() {
    this.http.get(environment.host + '/data2/full-categories')
      .subscribe(
        (data: any[]) => {
          let categories: Category[] = [];
          data.forEach(c => {
            let category = new Category(c.id, c.name, c.description, c.n, c.img);
            (c.good_groups as any[])
              .forEach(gg => {
                let goodGroup = new GoodGroup(gg.id, gg.name, gg.description, gg.thickness_of, gg.img);
                (gg.goods as any[])
                  .forEach(g => {
                    const good = new Good(g.id, g.name, g.thickness, g.size, g.square, g.price, g.length, g.width);
                    goodGroup.goods.push(good);
                  });
                category.goodGroups.push(goodGroup);
              });
            categories.push(category);
          });
          this.categories$.next(categories);
        }
      );
  }

  getFullInstallItems() {
    this.http.get(environment.host + '/data2/full-install-items')
      .subscribe(
        (data: any[]) => {
          let installItems: InstallItem[] = [];
          data.forEach(ii => {
            let installItem = new InstallItem(ii.id, ii.name, ii.works, ii.recommendations, ii.as_result, ii.img);
            (ii.install_item_goods as any[]).forEach(iig => {
              const installItemGood = new InstallItemGood(
                new Good(iig.good.id, iig.good.name, iig.good.thickness, iig.good.size, iig.good.square, iig.good.price, iig.good.length, iig.good.width),
                iig.quantity
              )
              installItem.installItemGoods.push(installItemGood)
            });
            installItems.push(installItem);
          });
          this.installItems$.next(installItems);
        }
      );
  }
}
