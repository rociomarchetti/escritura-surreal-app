export interface Result {
    page:          number;
    per_page:      number;
    total_results: number;
    url:           string;
    videos:        Video[];
}

export interface Video {
    id:             number;
    width:          number;
    height:         number;
    url:            string;
    image:          string;
    duration:       number;
    user:           User;
    video_files:    VideoFile[];
    video_pictures: VideoPicture[];
}

export interface User {
    id:   number;
    name: string;
    url:  string;
}

export interface VideoFile {
    id:        number;
    quality:   string;
    file_type: string;
    width:     number | null;
    height:    number | null;
    link:      string;
}

export interface VideoPicture {
    id:      number;
    picture: string;
    nr:      number;
}
