const root = ReactDOM.createRoot(document.getElementById('root'));
const element = React.createElement('h1', {id: 'heading'}, 'Hello, ReactJS from React');
root.render(element);

const parent = React.createElement('div',{id: 'parent'},
        React.createElement('div',{id: 'child'},
                [React.createElement('h1', {}, 'This is from heading1.'),
                React.createElement('h2', {}, 'This is from heading2.')
                ]
        )
);
root.render(parent);