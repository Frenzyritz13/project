export interface Artwork {
  id: string
  title: string
  description: string
  category: 'flame-working' | 'stained-glass' | 'macrame'
  imageUrl: string
  purchaseUrl?: string
}