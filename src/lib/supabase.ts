import { createClient } from '@supabase/supabase-js';

// Mira Shop — Cosmetics & Beauty
const MIRA_URL = 'https://tlfttrcaifmadbgaomcl.supabase.co';
const MIRA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsZnR0cmNhaWZtYWRiZ2FvbWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMjQzMDQsImV4cCI6MjA5MjcwMDMwNH0.wTQoqAf3Kse0Nd5dXxoCE0H2Ypk_Ds0y15XxW75o-BU';

// HTH Online — Watches
const HTH_URL = 'https://qkzrqdbgdticofhgodgk.supabase.co';
const HTH_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrenJxZGJnZHRpY29maGdvZGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0Njc5NzcsImV4cCI6MjA5MzA0Mzk3N30.gYDE2vGQtIhh1dQ4r93nkOk3ZhSuN8IVAXTKfiUpNz4';

export const miraSupabase = createClient(MIRA_URL, MIRA_KEY);
export const hthSupabase = createClient(HTH_URL, HTH_KEY);

// Normalized product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  storeId: 'mira' | 'hth';
  createdAt: string;
}

// Store definitions
export interface Store {
  id: 'mira' | 'hth';
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  color: string;
  url: string;
  currency: string;
}

export const stores: Store[] = [
  {
    id: 'mira',
    name: 'ميرا شوب',
    nameEn: 'Mira Shop',
    description: 'مستحضرات تجميل، عناية بالبشرة، عطور، أزياء وحقائب',
    icon: '💄',
    color: '#E91E8B',
    url: 'https://mirashop.mamonpfmp.workers.dev',
    currency: 'ر.س',
  },
  {
    id: 'hth',
    name: 'HTH Online',
    nameEn: 'HTH Online',
    description: 'ساعات أصلية رجالية ونسائية من أفخم الماركات',
    icon: '⌚',
    color: '#D4AF37',
    url: 'https://hth-online.mamonpfmp.workers.dev',
    currency: 'ر.ي',
  },
];

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=400&q=80';

// Fetch products from Mira Shop
async function fetchMiraProducts(): Promise<Product[]> {
  const { data, error } = await miraSupabase
    .from('products')
    .select('id, name, price, category, description, image, created_at')
    .order('created_at', { ascending: false });

  if (error || !data) return [];

  return data.map(p => ({
    id: String(p.id),
    name: p.name || '',
    price: p.price || 0,
    category: p.category || 'عام',
    description: p.description || '',
    image: (p.image && !p.image.startsWith('data:')) ? p.image : PLACEHOLDER_IMG,
    storeId: 'mira' as const,
    createdAt: p.created_at || '',
  }));
}

// Fetch products from HTH Online (different column names: cat, img)
async function fetchHthProducts(): Promise<Product[]> {
  const { data, error } = await hthSupabase
    .from('products')
    .select('id, name, price, cat, description, img, created_at')
    .order('created_at', { ascending: false });

  if (error || !data) return [];

  return data.map(p => ({
    id: String(p.id),
    name: p.name || '',
    price: p.price || 0,
    category: p.cat || 'ساعات',
    description: p.description || '',
    image: (p.img && !p.img.startsWith('data:')) ? p.img : PLACEHOLDER_IMG,
    storeId: 'hth' as const,
    createdAt: p.created_at || '',
  }));
}

// Fetch all products from both stores
export async function fetchAllProducts(): Promise<Product[]> {
  const [mira, hth] = await Promise.all([fetchMiraProducts(), fetchHthProducts()]);
  return [...mira, ...hth];
}

// Fetch products from a specific store
export async function fetchStoreProducts(storeId: 'mira' | 'hth'): Promise<Product[]> {
  if (storeId === 'mira') return fetchMiraProducts();
  return fetchHthProducts();
}
