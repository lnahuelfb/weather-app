import React from "react";

export interface weather {
  city: string;
  temperature: string;
  weather: string;
  feelsLike: string;
  tempMin: string;
  tempMax: string;
  humidity: string;
  wind: string;
}

export interface children {
  children: JSX.Element | JSX.Element[]
}