import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './shared/weather-api.service';
import { weatherData } from './weatherData';
import { ForecastDaysService } from './shared/forecast-days.service';
import { forecastData } from './forecastData';
import { HttpClient } from '@angular/common/http';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather!: weatherData;
  title = 'weather_project';
  city = '';
  clicked = false;
  loaded = false;
  days: string[] = [];
  forecastWeather: forecastData[] = [];
  constructor(
    private weatherService: WeatherApiService,
    private forecastDaysService: ForecastDaysService
  ) {}
  ngOnInit(): void {}

  getWeather() {
    this.clicked = true;
    this.weatherService.getCurrentWeather(this.city).subscribe((u: any) => {
      this.weather = {
        city: u.location.name,
        temperature: u.current.temperature,
        weather_descriptions: u.current.weather_descriptions,
        feels_like: u.current.feelslike,
        humidity: u.current.humidity,
        cloudcover: u.current.cloudcover,
        wind_speed: u.current.wind_speed,
        weather_icons: u.current.weather_icons,
      };
      console.log(u);
      this.loaded = true;
      this.clicked = false;
      this.city = '';
    });
    this.loaded = false;
  }
  getForecast() {
    this.days = this.forecastDaysService.getDays();
    this.weatherService.getForecast(this.weather.city).subscribe((u: any) => {
      for (let i = 0; i < 5; i++) {
        const temp: forecastData = {
          weather_description: u.list[i].weather[0].description,
          temperature: u.list[i].main.temp,
        };
        this.forecastWeather.push(temp);
      }

      console.log(u);
      console.log(this.weather.city);
    });
  }
}
