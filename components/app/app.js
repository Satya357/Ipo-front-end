// Main container component

const App = () => {
    return createElement('div', { className: 'app' }, 
        createElement(UpcomingIpo)
    );
};

// Render the App component
ReactDOM.render(
    createElement(App, null, null),
    document.getElementById('root')
);