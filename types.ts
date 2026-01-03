import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  stats: string;
  subProjects?: string[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedIn?: string;
  image?: string;
}