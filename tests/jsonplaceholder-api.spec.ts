import { test, expect, request } from '@playwright/test';
import { JsonPlaceholderAPI } from '../api-pom/JsonPlaceholderAPI';

test.describe('JsonPlaceholder API tests con POM', () => {
  let apiContext;
  let apiClient: JsonPlaceholderAPI;

  test.beforeAll(async () => {
    apiContext = await request.newContext();
    apiClient = new JsonPlaceholderAPI(apiContext);
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test('CP 01 - Obtener lista de posts', async () => {
    const response = await apiClient.getPosts();
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);

    const firstPost = body[0];
    expect(firstPost).toHaveProperty('id');
    expect(typeof firstPost.id).toBe('number');
    expect(firstPost).toHaveProperty('title');
    expect(typeof firstPost.title).toBe('string');
    expect(firstPost).toHaveProperty('body');
    expect(typeof firstPost.body).toBe('string');
    expect(firstPost).toHaveProperty('userId');
    expect(typeof firstPost.userId).toBe('number');
  });

  test('CP 02 - Crear un nuevo post', async () => {
    const newPost = {
      title: 'QA',
      body: 'Testing',
      userId: 1,
    };

    const response = await apiClient.createPost(newPost);
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toMatchObject(newPost);
    expect(body.id).toBeDefined();
  });

  test('CP 03 - Actualizar un post', async () => {
    const updatePost = {
      title: 'QA updated',
      body: 'Testing updated',
      userId: 1,
    };

    const response = await apiClient.updatePost(1, updatePost);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toMatchObject({ id: 1, ...updatePost });
  });

  test('CP 04 - Eliminar un post', async () => {
    const response = await apiClient.deletePost(1);
    expect(response.status()).toBe(200);
  });
});