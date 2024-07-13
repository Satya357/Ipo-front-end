// Main container component
const App = () => {
    return React.createElement('div', { className: 'ipo-card-list' }, 
        cardData.map((data, index) => React.createElement(IpoCard, { key: index, ...data }))
    );
};

// Render the App component
ReactDOM.render(
    React.createElement(App, null, null),
    document.getElementById('root')
);