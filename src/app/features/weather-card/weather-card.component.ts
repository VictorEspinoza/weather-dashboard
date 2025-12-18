import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  imports: [CommonModule],
  templateUrl: './weather-card.component.html',
})
export class WeatherCardComponent {
  // 1. Reactive Inputs (Signals)
  city = input.required<string>();
  temperature = input.required<number>();
  condition = input<string>('Clear');
  humidity = input<number>(0);
  windSpeed = input<number>(0);


  cardGradient = computed(() => {
    const temp = this.temperature();
    if (temp > 25) return 'from-orange-400 to-red-500'; // Hot
    if (temp > 10) return 'from-blue-400 to-emerald-400'; // Mild
    return 'from-blue-600 to-indigo-800'; // Cold
  });


  weatherIcon = computed(() => {
    const cond = this.condition().toLowerCase();
    if (cond.includes('cloud')) return '☁️';
    if (cond.includes('rain')) return '🌧️';
    if (cond.includes('snow')) return '❄️';
    return '☀️';
  });
}
