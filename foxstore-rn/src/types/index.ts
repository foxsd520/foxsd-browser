export type AppItem = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ownerName: string;
  ownerEmail: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  downloads: number;
  createdAt: number;
};
