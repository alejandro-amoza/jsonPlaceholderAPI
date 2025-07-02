import { APIRequestContext } from '@playwright/test';

export class JsonPlaceholderAPI {
  readonly apiContext: APIRequestContext;

  constructor(apiContext: APIRequestContext) {
    this.apiContext = apiContext;
  }

  async getPosts() {
    return this.apiContext.get('https://jsonplaceholder.typicode.com/posts');
  }

  async createPost(data: { title: string; body: string; userId: number }) {
    return this.apiContext.post('https://jsonplaceholder.typicode.com/posts', { data });
  }

  async updatePost(id: number, data: { title: string; body: string; userId: number }) {
    return this.apiContext.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { data });
  }

  async deletePost(id: number) {
    return this.apiContext.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
