const Breadcrumb = () => {
    return React.createElement(
      'div',
      { className: 'breadcrumb' },
      React.createElement('a', { href: '/', className: 'breadcrumb__link' }, 'Bluestock'),
      React.createElement('span', { className: 'breadcrumb__separator' }, ' › '),
      React.createElement('a', { href: '/ipo', className: 'breadcrumb__link' }, 'IPO'),
      React.createElement('span', { className: 'breadcrumb__separator' }, ' › '),
      React.createElement('span', { className: 'breadcrumb__current' }, 'UPCOMING IPO')
    );
  };

  const Header = () => {
    return React.createElement(
      'div',
      { className: 'header' },
      React.createElement('h1', { className: 'header__title' }, 'Upcoming IPO'),
      React.createElement(
        'p',
        { className: 'header__subtitle' },
        'Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.'
      )
    );
  };

const UpcomingIpo = () => {
    return React.createElement('div', { className: 'upcoming-ipo' }, 
        createElement(Breadcrumb),
        createElement(Header),
        createElement(IpoCardList)
    );
};