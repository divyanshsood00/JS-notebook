================================================================================
                        JS NOTEBOOK - README
================================================================================

PROJECT DESCRIPTION
================================================================================

JS Notebook is an interactive web application that enables developers to write,
execute, and document JavaScript code in a Jupyter-like notebook environment.
This tool combines code cells and markdown cells for a seamless literate
programming experience, complete with live preview, data visualization, and
support for external libraries like axios, lodash, and more.


KEY FEATURES
================================================================================

1. CODE CELLS
   - Execute JavaScript code in isolated, cached cells
   - Full ES6 support with async/await
   - Cumulative code execution (later cells can use variables from earlier ones)
   - Real-time compilation and error reporting

2. MARKDOWN CELLS
   - Rich text editing with markdown preview
   - Click-to-edit markdown interface
   - Documentation alongside code examples

3. LIVE PREVIEW IFRAME
   - Sandboxed preview window for safe code execution
   - Display rendered HTML, JSON objects, React components, or plain text
   - Real-time error display with stack traces

4. NPM PACKAGE INTEGRATION
   - Built-in support for axios, lodash, immer, React, and more
   - Dynamic imports and tree-shaking optimized

5. INTERACTIVE DEMONSTRATIONS
   - Preloaded example cells on startup
   - Interactive demo with stateful buttons and task lists
   - Fancy analytics dashboard with live API data fetching
   - Learn by example with copy-paste ready code snippets

6. NOTEBOOK PERSISTENCE
   - Auto-save functionality via localStorage
   - Resume work between sessions


SYSTEM REQUIREMENTS
================================================================================

- Node.js 16.x or higher
- npm 7.0 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 2GB RAM minimum

INSTALLATION
================================================================================

1. Navigate to the project directory:
   cd /home/divyanshsood/Documents/projects/JS-notebook

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

4. The application will automatically open at http://localhost:3000

AVAILABLE SCRIPTS
================================================================================

npm start
  Runs the app in development mode
  Opens http://localhost:3000 automatically
  Hot-reload enabled; changes appear live

npm run build
  Creates an optimized production build in the /build folder
  Minified bundles with source maps
  Ready for deployment

npm test
  Launches the test runner in interactive watch mode
  Runs unit and integration tests


USAGE GUIDE
================================================================================

ADDING CELLS:
  - Click "+ Add Code" or "+ Add Text" buttons
  - Code cells appear with the code editor on the left, preview on the right
  - Text cells display markdown in read-mode; click to edit

EXECUTING CODE:
  - Code cells compile and execute automatically on change
  - Use the built-in show() function to display output:
    show('Hello, World!')
    show({ data: [1, 2, 3] })
    show(<div>React JSX works too!</div>)

USING LIBRARIES:
  - Import is fully supported in code cells:
    import axios from 'axios';
    import _ from 'lodash';

MOVING CELLS:
  - Use the up/down arrow buttons in the action bar to reorder cells

DELETING CELLS:
  - Click the trash icon to remove a cell


PRELOADED EXAMPLES
================================================================================

On startup, JS Notebook loads several demonstration cells:

1. Introduction Markdown
   A brief overview of the notebook's capabilities

2. Hello World Code Cell
   Basic show() function example

3. Interactive Demo Code Cell
   Demonstrates state management with buttons and dynamic lists
   Features: counter, task list, event handling

4. Object Display Code Cell
   Shows how to display JavaScript objects and dates

5. Fancy Analytics Dashboard Code Cell
   Fetches data from JSONPlaceholder API
   Uses axios, lodash for grouping and ranking
   Renders styled HTML output with statistics

Feel free to edit, delete, or extend these examples.


EXAMPLE CODE SNIPPETS
================================================================================

Display Text:
  show('Hello from JS Notebook 🚀');

Display Objects:
  show({ id: 1, name: 'Alice', timestamp: new Date().toISOString() });

Fetch API Data (async):
  import axios from 'axios';
  (async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    show(data);
  })();

Use Lodash for Data Manipulation:
  import _ from 'lodash';
  const nums = [3, 1, 4, 1, 5, 9];
  show(_.orderBy(_.uniq(nums)));

Render React Components:
  import React from 'react';
  show(
    <div style={{ padding: '10px', background: '#f0f0f0' }}>
      <h2>Hello React</h2>
      <p>You can render JSX directly!</p>
    </div>
  );

Interactive State Example:
  (() => {
    let count = 0;
    const handleClick = () => {
      count += 1;
      show(`Clicked ${count} times`);
    };
    show('<button onclick="window.handleClick()">Click Me</button>');
    window.handleClick = handleClick;
  })();


PROJECT STRUCTURE
================================================================================

/src
  /components          - React UI components (CellList, CodeEditor, Preview, etc.)
  /state              - Redux store, reducers, and action creators
  /hooks              - Custom React hooks (useActions, useTypedSelector, etc.)
  /bundler            - ESbuild-based bundling and module resolution
  /bundler/plugins    - Webpack-style plugins (fetch, filter)
  index.tsx           - Main React entry point
  public/             - Static assets (manifest, favicon)
/build                - Production build output (auto-generated)
/node_modules         - Installed dependencies
package.json          - Project metadata and dependencies
tsconfig.json         - TypeScript configuration
README.md             - Original CRA documentation


DEPENDENCIES
================================================================================

Core:
  - react@17.0.2: UI framework
  - react-dom@17.0.2: React DOM rendering
  - react-redux@7.2.2: React bindings for Redux
  - redux@4.0.5: State management
  - redux-thunk@2.3.0: Async Redux middleware

Development Tools:
  - typescript@4.3.4: Type safety
  - react-scripts@4.0.3: Create React App scripts
  - prettier@2.3.1: Code formatting
  - eslint: Code linting

Editor & UI:
  - @monaco-editor/react@3.7.5: Monaco code editor
  - @uiw/react-md-editor@2.1.1: Markdown editor
  - react-resizable@3.0.4: Resizable panels
  - bulmaswatch@0.8.1: Bulma CSS framework

Utilities:
  - axios@0.21.1: HTTP client
  - lodash@4.17.23: Utility library
  - immer@8.0.1: Immutable state updates
  - esbuild-wasm@0.8.27: JavaScript bundler
  - localforage@1.9.0: LocalStorage wrapper


TROUBLESHOOTING
================================================================================

Issue: Port 3000 already in use
  Solution: The app will prompt to use an available port. Select 'yes'.
            Alternatively: pkill -f "react-scripts start" && npm start

Issue: Dependencies not installed
  Solution: Delete node_modules and package-lock.json, then run:
            npm install

Issue: Stale code not updating
  Solution: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
            Clear localStorage: Open DevTools > Application > Storage > Clear

Issue: Build fails with memory error
  Solution: The build script includes memory optimization:
            NODE_OPTIONS='--max_old_space_size=4096' npm run build

Issue: Cell code not executing
  Solution: Check browser console for errors (F12 > Console tab)
            Verify code syntax and imports

Issue: External API calls fail (CORS)
  Solution: Use CORS-enabled endpoints or CORS proxy
            Example: https://cors-anywhere.herokuapp.com/


DEPLOYMENT
================================================================================

To deploy to a static host:

1. Build the project:
   npm run build

2. Serve the /build folder:
   npm install -g serve
   serve -s build

3. Deploy /build folder to your hosting service:
   - GitHub Pages
   - Vercel
   - Netlify
   - AWS S3
   - Firebase Hosting


PERFORMANCE NOTES
================================================================================

- Bundle size after gzip: ~13KB (main chunk)
- Large asset chunks (~2MB) due to ESbuild and dependencies
- Lazy loading enabled for code splitting
- localStorage caching for faster notebook loads
- Sandboxed iframe preview prevents main thread blocking


DEVELOPMENT TIPS
================================================================================

1. Use the interactive demo cell as a template for interactive features
2. Test code in isolation before combining with other cells
3. Use async/await for API calls; avoid blocking operations
4. Reference earlier cells by name; cumulative code ensures availability
5. Leverage show() for debugging; outputs are captured in preview
6. Use markdown cells to document your analysis and findings


FUTURE ENHANCEMENTS
================================================================================

- Multi-notebook support (tabs/load-save)
- Collaborative editing (WebSockets)
- Export to PDF or HTML
- Executable code comments
- Custom CSS/component library
- Debugging tools (breakpoints, stepping)
- Performance profiling


SUPPORT & CONTRIBUTIONS
================================================================================

For issues, feature requests, or contributions:
1. Check existing documentation and examples
2. Review the preloaded demo cells for patterns
3. Consult browser DevTools console for error details
4. Test code in isolation before reporting bugs


LICENSE
================================================================================

This project is licensed under the terms of Create React App.
See package.json for dependency licenses.


VERSION
================================================================================

App Version: 0.1.0
Node Version Required: 16.x
npm Version Required: 7.0+
Last Updated: February 21, 2026


================================================================================
                        END OF README
================================================================================

For more detailed API documentation, refer to the source code in /src.
Happy coding with JS Notebook!
