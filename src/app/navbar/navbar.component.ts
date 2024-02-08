import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class HomeComponent {
  categories: categories[] | any = [];
  constructor(private __http: HttpClient, public dialog: MatDialog) {
    this.__http
      .get('https://fakestoreapi.com/products/categories')
      .subscribe((response) => {
        this.categories = response;
      });
  }
  getCategories(category: string) {
    if (category === 'electronics') return 'Elektronik';
    else if (category === 'jewelery') return 'Mücevherat';
    else if (category === "men's clothing") return 'Erkek Kıyafet';
    else if (category === "women's clothing") return 'Kadın Kıyafet';
    else return '';
  }
}
export interface categories {
  category: string;
}
/* // HttpClient, Angular tarafından sağlanan bir modüldür ve HTTP istekleri yapmak için kullanılır.
import { HttpClient } from '@angular/common/http';
// Component dekoratörü, bu sınıfın bir Angular bileşeni olduğunu belirtir.
import { Component } from '@angular/core';
// MatDialog, Angular Materyal tarafından sağlanan bir modüldür ve iletişim kutuları oluşturmak için kullanılır.
import { MatDialog } from '@angular/material/dialog';
// MatButtonModule, Angular Materyal tarafından sağlanan bir modüldür ve düğmeler oluşturmak için kullanılır.
import { MatButtonModule } from '@angular/material/button';

// @Component dekoratörü, bu sınıfın bir Angular bileşeni olduğunu belirtir ve bileşenin özelliklerini tanımlar.
@Component({
  selector: 'app-navbar', // Bileşenin kullanılacağı yerel ad veya etiket
  standalone: true, // Standalone özelliği, bu bileşenin kendi başına çalışabilir bir bileşen olduğunu belirtir.
  imports: [MatButtonModule], // Kullanılan Angular Materyal modüllerini belirtir.
  templateUrl: './navbar.component.html', // Bileşenin HTML şablonunu belirtir.
  styleUrl: './navbar.component.scss' // Bileşenin CSS dosyasını belirtir.
})
// HomeComponent sınıfı, bu bileşenin gerçek uygulamasını içerir.
export class HomeComponent {
  categories: categories[] | any = []; // Kategorileri tutan bir dizi.
  
  // Constructor metodu, sınıfın bir örneği oluşturulduğunda otomatik olarak çağrılır.
  constructor(private __http: HttpClient, public dialog: MatDialog) {
    // HttpClient kullanarak bir HTTP GET isteği yapılır.
    // API'den kategoriler çekilir ve 'response' adlı değişkene atanır.
    this.__http.get("https://fakestoreapi.com/products/categories").subscribe(response => {
      this.categories = response; // Kategoriler, API yanıtıyla güncellenir.
    })
  }

  // Belirli bir kategori adını alır ve daha okunabilir bir Türkçe kategori adına dönüştürür.
  getCategories(category: string): string {
    if (category === "electronics") return "Elektronik";
    else if (category === "jewelery") return "Mücevherat"
    else if (category === "men's clothing") return "Erkek Kıyafet"
    else if (category === "women's clothing") return "Kadın Kıyafet"
    else return "";
  }
}

// Kategori arayüzü, kategorilerin nasıl görüneceğini tanımlar.
export interface categories {
  category: string; // Kategori adını temsil eden bir özellik.
}
 */
