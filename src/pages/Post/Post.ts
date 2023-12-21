export interface PostData{
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface PostListProps {
    loading: boolean;
    posts: PostData[];
    fetchPosts: () => void;
  }
