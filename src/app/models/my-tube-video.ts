export interface MyTubeVideo {
    videoId: string;
    videoUrl: string;
    videoTitle: string;
    thumbnailUrl: string;
    notes: string;
    myNotes: string;
    notesAuthor: Author;
    addedDate: number;
}

export interface Author {
    name: string;
    facebookLink: string;
}
