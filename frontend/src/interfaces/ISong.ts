
export interface ISongWithoutId {
    name: string,
    artist: string,
    album: string,
    coverUrl: string,
    releaseYear: number,
    notes?: string,
}

export interface ISong extends  ISongWithoutId {
    id: string,
}
