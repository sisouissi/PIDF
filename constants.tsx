
import React from 'react';
import { Home, Lungs, Search, Stethoscope, ListChecks, Pill, TrendingUp, Image, Activity, FlaskConical, Microscope, ClipboardCheck, AlertTriangle, FileMedical, ClipboardList, BrainCircuit, Wind, ClipboardPlus } from './components/icons';
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'welcome', title: 'Accueil', icon: Home },
  { id: 'definition', title: 'Définitions, pathogénie et Classification', icon: Lungs },
  { 
    id: 'diagnostic-clinique', 
    title: 'Algorithmes Diagnostiques Interactifs', 
    icon: Search
  },
  { 
    id: 'fpi', 
    title: 'Fibrose Pulmonaire Idiopathique (FPI)', 
    icon: Stethoscope,
    subItems: [
      { id: 'fpi-pathogenie-clinique', title: 'Pathogénie et manifestations cliniques', icon: Lungs },
      { id: 'diagnostic-fonctionnel', title: 'Evaluation initiale', icon: Activity },
      { id: 'diagnostic-tdm-algorithme', title: 'Algorithme TDM & Biopsie', icon: ClipboardCheck },
      { id: 'diagnostic-biopsie', title: 'Biopsie Pulmonaire', icon: Microscope },
      { id: 'fpi-traitement', title: 'Traitement', icon: Pill },
      { id: 'fpi-exacerbation-aigue', title: 'Exacerbation aiguë de la FPI', icon: AlertTriangle },
      { id: 'fpi-suivi-pronostic', title: 'Pronostic et suivi', icon: TrendingUp },
    ]
  },
  { 
    id: 'pid-connectivites', 
    title: 'PID associées aux connectivites', 
    icon: FileMedical 
  },
  {
    id: 'fpp',
    title: 'Fibroses pulmonaires progressives (FPP)',
    icon: TrendingUp
  },
    {
    id: 'ipaf',
    title: 'PID avec manifestations auto-immunes (IPAF)',
    icon: BrainCircuit
  },
  {
    id: 'pins-fibrosantes',
    title: 'Pneumopathies interstitielles non spécifiques (PINS)',
    icon: ClipboardList
  },
  {
    id: 'phs',
    title: "Pneumopathies d'hypersensibilité (PHS)",
    icon: Wind
  },
  {
    id: 'ila',
    title: 'Anomalies Pulmonaires Interstitielles (ILA)',
    icon: ClipboardPlus
  },
  { 
    id: 'autres-pid', 
    title: 'Autres PID Fibrosantes', 
    icon: ListChecks
  },
  { id: 'therapeutique', title: 'Prise en Charge Thérapeutique', icon: Pill },
  { id: 'suivi-pronostic', title: 'Suivi, Pronostic et Complications', icon: TrendingUp },
];