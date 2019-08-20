export class News {

    source: Sourse;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date | string;
    content: string;
}

export class Sourse {
    id: string;
    name: string;
}

export class NewsResponse {
    status: string;
    totalResults: number;
    articles: News[];
}

