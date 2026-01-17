import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

// ルートエンドポイント
app.get('/', (c) => {
  return c.json({
    message: 'Welcome to Hono API Server!',
    version: '1.0.0',
    endpoints: {
      '/': 'このメッセージ',
      '/hello': 'Hello World',
      '/hello/:name': '名前付きの挨拶',
      '/api/users': 'ユーザー一覧',
      '/api/users/:id': '特定ユーザー情報',
      'POST /api/echo': 'POSTデータのエコーバック'
    }
  });
});

// シンプルなGETエンドポイント
app.get('/hello', (c) => {
  return c.text('Hello Hono!');
});

// パラメータを使用したエンドポイント
app.get('/hello/:name', (c) => {
  const name = c.req.param('name');
  return c.json({
    message: `こんにちは、${name}さん！`,
    timestamp: new Date().toISOString()
  });
});

// ユーザーデータのサンプル
const users = [
  { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: 'admin' },
  { id: 2, name: '佐藤花子', email: 'sato@example.com', role: 'user' },
  { id: 3, name: '鈴木一郎', email: 'suzuki@example.com', role: 'user' },
];

// ユーザー一覧取得
app.get('/api/users', (c) => {
  const query = c.req.query('role');

  if (query) {
    const filtered = users.filter(user => user.role === query);
    return c.json({
      count: filtered.length,
      users: filtered
    });
  }

  return c.json({
    count: users.length,
    users
  });
});

// 特定ユーザー取得
app.get('/api/users/:id', (c) => {
  const id = parseInt(c.req.param('id'));
  const user = users.find(u => u.id === id);

  if (!user) {
    return c.json({ error: 'User not found' }, 404);
  }

  return c.json(user);
});

// POSTエンドポイント - エコーバック
app.post('/api/echo', async (c) => {
  const body = await c.req.json();
  return c.json({
    received: body,
    timestamp: new Date().toISOString(),
    method: c.req.method,
    path: c.req.path
  });
});

// 404ハンドラ
app.notFound((c) => {
  return c.json({
    error: 'Not Found',
    message: `${c.req.path} は存在しません`,
    availableEndpoints: [
      '/',
      '/hello',
      '/hello/:name',
      '/api/users',
      '/api/users/:id',
      'POST /api/echo'
    ]
  }, 404);
});

// エラーハンドラ
app.onError((err, c) => {
  console.error('Error:', err);
  return c.json({
    error: 'Internal Server Error',
    message: err.message
  }, 500);
});

const port = 3000;
console.log(`🚀 Hono server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});
