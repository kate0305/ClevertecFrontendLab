export interface Book {
    id: string;
    title: string;
    rating: number | null;
    issueYear: string | null;
    authors: string[] | null;
    categories: string[] | null;
    booking: BookingData | null;
    delivery: DeliveryData | null;
    histories: HistoryData[] | null;
}

interface BookingData {
  id: number;
  order: boolean;
  dateOrder: string | null;
  customerId: number | null;
  customerFirstName: string | null;
  customerLastName: string | null;
}
interface DeliveryData {
  id: number;
  handed: boolean;
  dateHandedFrom: string | null;
  dateHandedTo: string | null;
  recipientId: number | null;
  recipientFirstName: string | null;
  recipientLastName: string | null;
}

interface HistoryData {
  id: number | null;
  userId: number | null;
}

export type BookPhoto = {
  url: string | null;
};
interface UserData {
  commentUserId: number;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

interface CommentData {
  id: number;
  rating: number;
  text: string | null;
  createdAt: string;
  user: UserData;
}

export interface ListOfBooks extends Book {
  image: BookPhoto;
}

export interface BookData extends Book {
  description: string | null;
  publish: string | null;
  pages: string | null;
  cover: string | null;
  weight: string | null;
  format: string | null;
  ISBN: string | null;
  producer: string | null;
  images: BookPhoto[] | null;
  comments: CommentData[] | null;
}
