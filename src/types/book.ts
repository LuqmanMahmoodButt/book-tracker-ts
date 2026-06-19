export type ReadingStatus = 'want_to_read' | 'currently_reading' | 'finished';


export interface Book {
    id: string;
    title: string;
    author: string;
    status: ReadingStatus;
    rating?: number;

}

