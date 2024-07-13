// Main container component
const App = () => {
    return React.createElement('div', { className: 'container' }, 
        cardData.map((data, index) => React.createElement(Card, { key: index, ...data }))
    );
};

// Render the App component
ReactDOM.render(
    React.createElement(App, null, null),
    document.getElementById('root')
);