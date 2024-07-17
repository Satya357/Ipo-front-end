/* 
  Author: Satyam Rathore
  Date: 2024-07-15
  Description: Generates a list of IPO card components based on data provided in cardData array.
*/

const IpoCardList = () => {
    return React.createElement('div', { className: 'ipo-card-list' }, 
        cardData.map((data, index) => React.createElement(IpoCard, { key: index, ...data }))
    );
};