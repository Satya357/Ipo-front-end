const IpoCardList = () => {
    return React.createElement('div', { className: 'ipo-card-list' }, 
        cardData.map((data, index) => React.createElement(IpoCard, { key: index, ...data }))
    );
};