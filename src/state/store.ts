import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// Interactive demo code - validated and tested
const interactiveDemoCode = `(() => {
  let count = 0;
  const tasks = [];

  const render = () => {
    const list = tasks.length
      ? tasks.map((task, index) => '<li style="margin:6px 0;">' + (index + 1) + '. ' + task + '</li>').join('')
      : '<li style="color:#94a3b8;">No tasks yet</li>';

    const html = [
      '<div style="font-family:Inter,system-ui,sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;border-radius:10px;">',
      '<h2 style="margin:0 0 8px;">⚡ Interactive Playground</h2>',
      '<p style="margin:0 0 12px;color:#94a3b8;">Counter + dynamic task list in one preview.</p>',
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">',
      '<button id="inc-btn" style="padding:8px 12px;border:none;border-radius:8px;background:#22c55e;color:#052e16;cursor:pointer;">+1</button>',
      '<button id="dec-btn" style="padding:8px 12px;border:none;border-radius:8px;background:#f97316;color:#431407;cursor:pointer;">-1</button>',
      '<button id="add-task-btn" style="padding:8px 12px;border:none;border-radius:8px;background:#38bdf8;color:#082f49;cursor:pointer;">Add Task</button>',
      '<button id="reset-btn" style="padding:8px 12px;border:none;border-radius:8px;background:#e2e8f0;color:#0f172a;cursor:pointer;">Reset</button>',
      '</div>',
      '<div style="padding:10px;border-radius:8px;background:#1e293b;margin-bottom:10px;">Counter: <strong>' + count + '</strong></div>',
      '<ul style="margin:0;padding-left:18px;">' + list + '</ul>',
      '</div>'
    ].join('');

    show(html);

    const root = document.querySelector('#root');
    root.querySelector('#inc-btn')?.addEventListener('click', () => {
      count += 1;
      render();
    });
    root.querySelector('#dec-btn')?.addEventListener('click', () => {
      count -= 1;
      render();
    });
    root.querySelector('#add-task-btn')?.addEventListener('click', () => {
      tasks.push('Task ' + (tasks.length + 1) + ' at ' + new Date().toLocaleTimeString());
      render();
    });
    root.querySelector('#reset-btn')?.addEventListener('click', () => {
      count = 0;
      tasks.length = 0;
      render();
    });
  };

  render();
})();`;

// Fancy analytics dashboard code - validated and tested
const fancyExampleCode = `import axios from 'axios';
import _ from 'lodash';

const currency = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

(async () => {
  try {
    const [todosRes, usersRes, postsRes] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
    ]);

    const todos = todosRes.data;
    const users = usersRes.data;
    const posts = postsRes.data;

    const statsByUser = _(todos).groupBy('userId').map((items, userId) => {
      const done = items.filter((t) => t.completed).length;
      return { userId: Number(userId), total: items.length, done, donePct: Math.round((done / items.length) * 100) };
    }).orderBy(['donePct', 'total'], ['desc', 'desc']).take(5).value();

    const topUsers = statsByUser.map((s) => ({
      ...s,
      name: (users.find((u) => u.id === s.userId) || {}).name || ('User ' + s.userId)
    }));

    const featuredPosts = _.sampleSize(posts, 3);

    let html = '<div style="font-family:Inter,system-ui,sans-serif;padding:16px;background:#0b1220;color:#e6eef8;border-radius:12px;">';
    html += '<h2 style="margin:0 0 8px;color:#8ab4ff;">🚀 Team Productivity Pulse</h2>';
    html += '<p style="margin:0 0 12px;color:#b3bfd1;">Live stats from JSONPlaceholder.</p>';
    html += '<div style="margin-bottom:10px;">Total tasks: <strong>' + todos.length + '</strong></div>';
    html += '<div style="margin-bottom:10px;">Completed: <strong>' + todos.filter((t) => t.completed).length + '</strong></div>';
    html += '<div style="margin-bottom:12px;">Estimated value: <strong>' + currency(todos.length * 3.75) + '</strong></div>';
    html += '<h3 style="margin:0 0 6px;color:#cfe8ff;">Top 5 Users</h3><ul style="padding-left:18px;">';
    html += topUsers.map((u) => '<li>' + u.name + ' — ' + u.done + '/' + u.total + ' (' + u.donePct + '%)</li>').join('');
    html += '</ul><h3 style="margin:12px 0 6px;color:#cfe8ff;">Featured Posts</h3><ul style="padding-left:18px;">';
    html += featuredPosts.map((p) => '<li>' + p.title + '</li>').join('');
    html += '</ul></div>';

    show(html);
  } catch (err) {
    show('<div style="color:red;">Error loading dashboard: ' + String(err) + '</div>');
  }
})();`;

const starterCells: Array<{ type: 'code' | 'text'; content: string }> = [
  {
    type: 'text',
    content:
      '# JS Notebook Demo\n\nThis notebook is preloaded with examples to showcase app capabilities.\n\n- Quick 2-line basics\n- Interactive demo\n- Fancy analytics dashboard',
  },
  {
    type: 'code',
    content: "show('Hello from JS Notebook! This is a preloaded code cell. Feel free to edit or delete it.')",
  },
   {
    type: 'text',
    content:
      '## Interactive Demo\n\nClick buttons to mutate state in-place. This demonstrates event handling, rendering, and app interactivity inside a single code cell.',
  },
  {
    type: 'code',
    content: interactiveDemoCode,
  },
  {
    type: 'code',
    content: "show({ now: new Date().toISOString(), nums: [1, 2, 3], ok: true })",
  },
  {
    type: 'text',
    content:
      '## Fancy Example 1 (ES6)\n\nCombined libraries: axios + lodash for fetching, grouping, ranking, and rendering analytics with styled output.',
  },
  {
    type: 'code',
    content: fancyExampleCode,
  },
];

let previousCellId: string | null = null;

starterCells.forEach((starterCell) => {
  store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id: previousCellId,
      type: starterCell.type,
    },
  });

  const state = store.getState();
  const insertedIndex =
    previousCellId === null
      ? 0
      : state.cells.order.findIndex((id) => id === previousCellId) + 1;
  const insertedCellId = state.cells.order[insertedIndex];

  store.dispatch({
    type: ActionType.UPDATE_CELL,
    payload: {
      id: insertedCellId,
      content: starterCell.content,
    },
  });

  previousCellId = insertedCellId;
});
