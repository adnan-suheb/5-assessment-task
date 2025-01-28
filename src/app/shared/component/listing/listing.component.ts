import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface Reward {
  pk: number;
  name: string;
  points: number;
  display_img_url: string;
  quantity: number;
  valid_until: string;
  low_quantity: number;
  category: string;  // Category as string
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  currentYear: number = new Date().getFullYear();
  rewards: Reward[] = [
    { pk: 1, name: 'Laptop', points: 500, display_img_url: 'https://picsum.photos/150/150?random=1', quantity: 10, valid_until: '2025-12-31', low_quantity: 2, category: 'electronics' },
    { pk: 2, name: 'Smartphone', points: 300, display_img_url: 'https://picsum.photos/150/150?random=2', quantity: 5, valid_until: '2025-12-31', low_quantity: 1, category: 'electronics' },
    { pk: 3, name: 'Headphones', points: 150, display_img_url: 'https://picsum.photos/150/150?random=3', quantity: 20, valid_until: '2025-12-31', low_quantity: 5, category: 'electronics' },
    { pk: 4, name: 'Smartwatch', points: 200, display_img_url: 'https://picsum.photos/150/150?random=4', quantity: 15, valid_until: '2025-12-31', low_quantity: 3, category: 'electronics' },
    { pk: 5, name: 'Tablet', points: 250, display_img_url: 'https://picsum.photos/150/150?random=5', quantity: 8, valid_until: '2025-12-31', low_quantity: 2, category: 'electronics' },
    { pk: 6, name: 'Rose Bouquet', points: 100, display_img_url: 'https://picsum.photos/150/150?random=6', quantity: 50, valid_until: '2025-12-31', low_quantity: 10, category: 'flowers' },
    { pk: 7, name: 'Tulip Bouquet', points: 120, display_img_url: 'https://picsum.photos/150/150?random=7', quantity: 40, valid_until: '2025-12-31', low_quantity: 5, category: 'flowers' },
    { pk: 8, name: 'Orchid Arrangement', points: 150, display_img_url: 'https://picsum.photos/150/150?random=8', quantity: 30, valid_until: '2025-12-31', low_quantity: 6, category: 'flowers' },
    { pk: 9, name: 'Sunflower Vase', points: 110, display_img_url: 'https://picsum.photos/150/150?random=9', quantity: 25, valid_until: '2025-12-31', low_quantity: 8, category: 'flowers' },
    { pk: 10, name: 'Lily Bouquet', points: 130, display_img_url: 'https://picsum.photos/150/150?random=10', quantity: 35, valid_until: '2025-12-31', low_quantity: 7, category: 'flowers' },
    { pk: 11, name: 'Gaming Console', points: 450, display_img_url: 'https://picsum.photos/150/150?random=11', quantity: 18, valid_until: '2025-12-31', low_quantity: 3, category: 'electronics' },
    { pk: 12, name: 'Bluetooth Speaker', points: 180, display_img_url: 'https://picsum.photos/150/150?random=12', quantity: 22, valid_until: '2025-12-31', low_quantity: 4, category: 'electronics' },
    { pk: 13, name: 'Drone', points: 600, display_img_url: 'https://picsum.photos/150/150?random=13', quantity: 12, valid_until: '2025-12-31', low_quantity: 2, category: 'electronics' },
    { pk: 14, name: 'Smart Glasses', points: 350, display_img_url: 'https://picsum.photos/150/150?random=14', quantity: 7, valid_until: '2025-12-31', low_quantity: 1, category: 'electronics' },
    { pk: 15, name: 'Camera', points: 400, display_img_url: 'https://picsum.photos/150/150?random=15', quantity: 10, valid_until: '2025-12-31', low_quantity: 3, category: 'electronics' },
    { pk: 16, name: 'Peony Bouquet', points: 140, display_img_url: 'https://picsum.photos/150/150?random=16', quantity: 30, valid_until: '2025-12-31', low_quantity: 6, category: 'flowers' },
    { pk: 17, name: 'Jasmine Wreath', points: 180, display_img_url: 'https://picsum.photos/150/150?random=17', quantity: 45, valid_until: '2025-12-31', low_quantity: 8, category: 'flowers' },
    { pk: 18, name: 'Magnolia Branch', points: 200, display_img_url: 'https://picsum.photos/150/150?random=18', quantity: 20, valid_until: '2025-12-31', low_quantity: 4, category: 'flowers' },
    { pk: 19, name: 'Camellia Blossom', points: 160, display_img_url: 'https://picsum.photos/150/150?random=19', quantity: 25, valid_until: '2025-12-31', low_quantity: 7, category: 'flowers' },
    { pk: 20, name: 'Lavender Arrangement', points: 110, display_img_url: 'https://picsum.photos/150/150?random=20', quantity: 40, valid_until: '2025-12-31', low_quantity: 9, category: 'flowers' },
    { pk: 21, name: 'Cactus', points: 80, display_img_url: 'https://picsum.photos/150/150?random=21', quantity: 50, valid_until: '2025-12-31', low_quantity: 12, category: 'flowers' },
    { pk: 22, name: 'Iris Arrangement', points: 130, display_img_url: 'https://picsum.photos/150/150?random=22', quantity: 30, valid_until: '2025-12-31', low_quantity: 6, category: 'flowers' },
    { pk: 23, name: 'Poppy Bouquet', points: 150, display_img_url: 'https://picsum.photos/150/150?random=23', quantity: 35, valid_until: '2025-12-31', low_quantity: 8, category: 'flowers' },
    { pk: 24, name: 'Daisy Bouquet', points: 100, display_img_url: 'https://picsum.photos/150/150?random=24', quantity: 45, valid_until: '2025-12-31', low_quantity: 10, category: 'flowers' },
    { pk: 25, name: 'Gardenia', points: 120, display_img_url: 'https://picsum.photos/150/150?random=25', quantity: 40, valid_until: '2025-12-31', low_quantity: 8, category: 'flowers' },
    { pk: 26, name: 'Chrysanthemum', points: 110, display_img_url: 'https://picsum.photos/150/150?random=26', quantity: 30, valid_until: '2025-12-31', low_quantity: 7, category: 'flowers' },
    { pk: 27, name: 'Tulip Field', points: 140, display_img_url: 'https://picsum.photos/150/150?random=27', quantity: 25, valid_until: '2025-12-31', low_quantity: 6, category: 'flowers' },
    { pk: 28, name: 'Carnations', points: 90, display_img_url: 'https://picsum.photos/150/150?random=28', quantity: 55, valid_until: '2025-12-31', low_quantity: 10, category: 'flowers' },
    { pk: 29, name: 'Freesia Bouquet', points: 160, display_img_url: 'https://picsum.photos/150/150?random=29', quantity: 15, valid_until: '2025-12-31', low_quantity: 3, category: 'flowers' },
    { pk: 30, name: 'Lily of the Valley', points: 130, display_img_url: 'https://picsum.photos/150/150?random=30', quantity: 20, valid_until: '2025-12-31', low_quantity: 5, category: 'flowers' }
  ];

  sortOrder: string = '';
  searchQuery: string = '';
  pageSize: number = 15;
  pageIndex: number = 0;
  selectedCategory: string = 'electronics';  // Default to electronics

  get filteredRewards() {
    let sortedRewards = this.rewards.filter(r => r.category === this.selectedCategory);  // Filter by category
    if (this.sortOrder === 'asc') {
      sortedRewards.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOrder === 'desc') {
      sortedRewards.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortedRewards.filter(r => r.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  get paginatedRewards() {
    const startIndex = this.pageIndex * this.pageSize;
    return this.filteredRewards.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: PageEvent) {
    console.log("Page Changed: ", event);  // Debugging
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.pageIndex = 0; // Reset to first page when category is changed
  }
}
