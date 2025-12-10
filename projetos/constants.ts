import { Contact } from './types';

// Centralized contact list for easy editing
export const CONTACTS: Contact[] = [
  {
    id: '1',
    name: 'Augusto Cruz',
    relation: 'Pai',
    phone: '5541991934404',
    whatsapp: '5541991934404'
  },
  {
    id: '2',
    name: 'Maria Leal',
    relation: 'Mãe',
    phone: '5541991796880',
    whatsapp: '5541991796880'
  },
  {
    id: '3',
    name: 'Pedro Cruz',
    relation: 'Irmão',
    phone: '5541992889109',
    whatsapp: '5541992889109'
  },
  {
    id: '4',
    name: 'Letícia Cruz',
    relation: 'Irmã',
    phone: '5561991481642',
    whatsapp: '5561991481642'
  }
];

export const DEFAULT_MESSAGE = "Olá! Encontrei a criança e estou entrando em contato através do QR Code.";