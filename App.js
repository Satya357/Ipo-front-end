/* 
  Author: Satyam Rathore
  Date: 2024-07-15
  Description: Root React component setup for rendering the entire application.
*/

const App = () => {
    return createElement('div', { className: 'app' }, 
        createElement(UpcomingIpo)
    );
};

ReactDOM.render(
    createElement(App, null, null),
    document.getElementById('root')
);