'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');
var InfiniteScroll = require('react-infinite-scroll-component');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var InfiniteScroll__default = /*#__PURE__*/_interopDefaultLegacy(InfiniteScroll);

const FilterContext = /*#__PURE__*/React.createContext([]);
const FilterContextProvider = _ref => {
  let {
    children
  } = _ref;
  const [filters, setFilters] = React.useState([]);
  const updateFilters = (type, value) => {
    setFilters(prevFilter => ({
      ...prevFilter,
      [type]: value
    }));
  };
  return /*#__PURE__*/React__default["default"].createElement(FilterContext.Provider, {
    value: {
      filters,
      updateFilters
    }
  }, children);
};

const getFilters = async base_url => {
  return new Promise((resolve, reject) => {
    axios__default["default"].get(`${base_url}/filters`).then(response => {
      resolve(response.data);
    });
  });
};
const getFilteredCards = async (base_url, filters) => {
  return new Promise((resolve, reject) => {
    axios__default["default"].post(`${base_url}/filter`, filters).then(response => {
      resolve(response.data);
    }).catch(e => {
      reject(e.message);
    });
  });
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = ".gallery-filter-container {\r\n  position: sticky;\r\n  top: 20px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  z-index: 2;\r\n  width: 100%;\r\n  background-color: #faf9f5;\r\n  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 29%);\r\n  border-radius: 20px;\r\n  z-index: 3;\r\n}\r\n.dark .gallery-filter-container{\r\n  background-color: #151E2A;\r\n}\r\n.gallery-filter-inner-container{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 24px;\r\n  padding: 20px;\r\n}";
styleInject(css_248z$4);

var css_248z$3 = " .custom-filter-select {\r\n \tcursor: pointer;\r\n \tmin-width: 100px;\r\n }\r\n\r\n .filter-container label {\r\n \tcolor: #000;\r\n \tfont-size: 16px;\r\n \tfont-weight: 500;\r\n \tcursor: pointer;\r\n }\r\n\r\n .gallery-filter-type-label span.gallery-filter-arrow {\r\n \tfont-size: 12px;\r\n }\r\n\r\n .gallery-filter-type-label.open span.gallery-filter-arrow {\r\n \tcolor: #FE2C85;\r\n }\r\n\r\n .custom-filter-select {\r\n \tposition: relative;\r\n }\r\n\r\n\r\n .custom-filter-select .filter-dropdown {\r\n \tmin-width: 180px;\r\n \tmax-height: 300px;\r\n \toverflow-y: auto;\r\n \tcolor: #000;\r\n \tfont-size: 14px;\r\n \tfont-weight: 400;\r\n \ttext-align: left;\r\n \tpadding: 1rem;\r\n \tposition: absolute;\r\n \tdisplay: none;\r\n \ttop: 40px;\r\n \tleft: 0;\r\n \tbackground-color: #faf9f5;\r\n \tborder-radius: 8px;\r\n \t/* box-shadow: 0 0 8px rgba(0, 0, 0, 0.5); */\r\n \tz-index: 5;\r\n }\r\n .dark .custom-filter-select .filter-dropdown {\r\n\tbackground-color: #151E2A;\r\n\tcolor: #FFF;\r\n }\r\n\r\n .custom-filter-select .filter-dropdown::-webkit-scrollbar {\r\n \twidth: 4px !important;\r\n \theight: 8px;\r\n }\r\n\r\n .custom-filter-select .filter-dropdown::-webkit-scrollbar-track {\r\n \tbackground: transparent;\r\n }\r\n\r\n /* Handle */\r\n .custom-filter-select .filter-dropdown::-webkit-scrollbar-thumb {\r\n \tbackground: #FE2C85;\r\n \tborder-radius: 10px;\r\n }\r\n\r\n .gallery-filter-type-label.open + .filter-dropdown {\r\n \tdisplay: block;\r\n }\r\n\r\n .filter-value {\r\n \tcolor: #FE2C85;\r\n \tfont-size: 14px;\r\n \tfont-weight: 600;\r\n }\r\n\r\n .cust-filter-item.selected {\r\n \tfont-weight: 600;\r\n\tfont-family: 'poppins';\r\n }\r\n .gallery-filter-type-label{\r\n\tcolor: #000\r\n }\r\n .dark .gallery-filter-type-label {\r\n \tcolor: #FFF\r\n }";
styleInject(css_248z$3);

const CustomFilterSelect = _ref => {
  let {
    keyname,
    filters,
    filterChanged
  } = _ref;
  const [selectValue, setSelectValue] = React.useState('All');
  const [opened, setOpened] = React.useState(false);
  const toggleOpen = () => {
    setOpened(!opened);
  };
  const handleSelectChange = (keyname, value) => {
    setSelectValue(value);
    if (value === 'All') {
      filterChanged(keyname, []);
    } else filterChanged(keyname, value);
  };
  const renderFilters = () => {
    return filters[keyname].map((filter, idx) => {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: `filter` + idx,
        onClick: e => handleSelectChange(keyname, filter),
        className: `cust-filter-item ${selectValue === filter ? 'selected' : ''}`
      }, filter);
    });
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "custom-filter-select",
    onClick: toggleOpen,
    onMouseLeave: () => setOpened(false)
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: `gallery-filter-type-label ${opened ? 'open' : ''}`
  }, keyname, " ", /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-filter-arrow"
  }, "\u25BC")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `filter-dropdown`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: e => handleSelectChange(keyname, 'All'),
    className: `cust-filter-item ${selectValue === 'All' ? 'selected' : ''}`
  }, "All"), renderFilters()), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "filter-value"
  }, selectValue ? selectValue : 'All'));
};

const FilterContainer = _ref => {
  let {
    filters,
    headerStyle = null
  } = _ref;
  const {
    updateFilters
  } = React.useContext(FilterContext);
  const filterChanged = (type, value) => {
    updateFilters(type, value);
  };
  const GetFilters = () => {
    return filters ? Object.keys(filters).map(keyname => {
      return /*#__PURE__*/React__default["default"].createElement(CustomFilterSelect, {
        key: keyname,
        keyname: keyname,
        filters: filters,
        filterChanged: filterChanged
      });
    }) : 'No filters loaded!';
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-container",
    style: headerStyle
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-inner-container"
  }, GetFilters()));
};

const Filter = _ref => {
  let {
    baseUrl,
    headerStyle
  } = _ref;
  const [filters, setFilters] = React.useState({});
  const fetchFilters = async () => {
    getFilters(baseUrl).then(res => {
      setFilters(res);
    });
  };
  React.useEffect(() => {
    fetchFilters();
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(FilterContainer, {
    filters: filters,
    headerStyle: headerStyle
  });
};
var Filter$1 = /*#__PURE__*/React__default["default"].memo(Filter);

const loadNext = (nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards) => {
  let c = [];
  let end = nfts.length < ITEMS_PER_PAGE ? nfts.length : ITEMS_PER_PAGE;
  for (let i = 0; i < end; i++) {
    if (currentPageRef.current * ITEMS_PER_PAGE + i < nfts.length) {
      c.push(nfts[currentPageRef.current * ITEMS_PER_PAGE + i]);
    }
  }
  setCards(cards => cards.concat(c));
  setCurrentPage(currentPageRef.current + 1);
};

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
const LazyImage = _ref => {
  let {
    src,
    alt,
    idx,
    imageOnLoad,
    onClick,
    style
  } = _ref;
  const [imageSrc, setImageSrc] = React.useState(placeHolder);
  const [imageRef, setImageRef] = React.useState();
  const onLoad = event => {
    event.target.classList.add('loaded');
    imageOnLoad();
  };
  const onError = event => {
    event.target.classList.add('has-error');
  };
  React.useEffect(() => {
    let observer;
    let didCancel = false;
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setTimeout(() => {
                setImageSrc(src);
              }, idx * 100); //add 200 ms delay between image loads :/

              observer.unobserve(imageRef);
            }
          });
        }, {
          threshold: 0.01,
          rootMargin: '75%'
        });
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return /*#__PURE__*/React__default["default"].createElement("img", {
    className: "gallery-lazy-image",
    ref: setImageRef,
    src: imageSrc,
    alt: alt,
    onLoad: onLoad,
    onError: onError,
    style: {
      zIndex: '0',
      ...style
    },
    onClick: onClick
  });
};

var css_248z$2 = ".gallery-card-root-box {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  background-color: #faf9f5;\r\n  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 29%)\r\n}\r\n\r\n.dark .gallery-card-root-box {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.gallery-card-root-box p {\r\n  margin-block-start: 0em !important;\r\n  margin-block-end: 0em !important;\r\n}\r\n\r\n.gallery-card-content {\r\n  padding: 15px 22px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px\r\n}\r\n\r\n.gallery-card-content-name {\r\n  font-size: 18px;\r\n  line-height: 22px;\r\n  color: #000;\r\n  font-family: 'poppins-medium';\r\n  text-align: left;\r\n  max-width: 60%;\r\n}\r\n\r\n.dark .gallery-card-content-name {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-card-content-id-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.gallery-card-content-id-box span {\r\n  font-family: 'poppins';\r\n  font-size: 14px;\r\n  color: #00000090;\r\n  text-align: left;\r\n}\r\n\r\n.dark .gallery-card-content-id-box span {\r\n  color: #FFFFFF90;\r\n}\r\n\r\n.gallery-card-content-id-box p {\r\n  font-family: 'poppins-medium';\r\n  font-size: 16px;\r\n  color: #000;\r\n  text-align: left;\r\n}\r\n\r\n.dark .gallery-card-content-id-box p {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.gallery-social-items-box {\r\n  display: flex;\r\n  gap: 10px\r\n}";
styleInject(css_248z$2);

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.248' height='41.177' viewBox='0 0 41.248 41.177'%3e %3cg id='opensea' transform='translate(-4.953 -6)'%3e %3cg id='Group_1481' data-name='Group 1481' transform='translate(4.953 6)'%3e %3cpath id='Path_140' data-name='Path 140' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.457%2c1.457%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_141' data-name='Path 141' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3cpath id='Path_142' data-name='Path 142' d='M46.677%2c26.589A20.589%2c20.589%2c0%2c1%2c1%2c26.089%2c6%2c20.592%2c20.592%2c0%2c0%2c1%2c46.677%2c26.589Z' transform='translate(-0.501)' fill='%232081e2'/%3e %3cpath id='Path_143' data-name='Path 143' d='M125.931%2c165.509l.084-.126%2c5.356-8.362c.084-.126.244-.126.328.042.909%2c2.021%2c1.65%2c4.488%2c1.314%2c6.054a8.8%2c8.8%2c0%2c0%2c1-1.069%2c2.307.985.985%2c0%2c0%2c1-.2.328.219.219%2c0%2c0%2c1-.168.084h-5.516A.225.225%2c0%2c0%2c1%2c125.931%2c165.509Z' transform='translate(-110.76 -138.221)' fill='white'/%3e %3cpath id='Path_144' data-name='Path 144' d='M133.105%2c118.418v1.314c0%2c.084-.042.126-.126.168a6.4%2c6.4%2c0%2c0%2c0-2.434%2c1.65c-1.524%2c2.1-2.678%2c5.1-5.229%2c5.1H114.58a6.9%2c6.9%2c0%2c0%2c1-6.88-6.922v-.126a.181.181%2c0%2c0%2c1%2c.168-.168h6.054a.216.216%2c0%2c0%2c1%2c.2.2%2c2.333%2c2.333%2c0%2c0%2c0%2c.2%2c1.154%2c2.094%2c2.094%2c0%2c0%2c0%2c1.895%2c1.154h2.964v-2.307h-2.922a.187.187%2c0%2c0%2c1-.168-.286.581.581%2c0%2c0%2c0%2c.126-.168c.286-.413.657-.985%2c1.069-1.684a9.738%2c9.738%2c0%2c0%2c0%2c.741-1.482%2c2.39%2c2.39%2c0%2c0%2c0%2c.126-.286c.042-.168.126-.328.168-.455s.084-.244.126-.371a6.808%2c6.808%2c0%2c0%2c0%2c.126-1.356%2c2.782%2c2.782%2c0%2c0%2c0-.042-.573c0-.2-.042-.413-.042-.615a2.392%2c2.392%2c0%2c0%2c0-.084-.539%2c5.738%2c5.738%2c0%2c0%2c0-.168-.825l-.042-.084a2.65%2c2.65%2c0%2c0%2c0-.168-.539c-.168-.573-.37-1.154-.573-1.65-.084-.2-.168-.413-.244-.615-.126-.286-.244-.573-.37-.825-.042-.126-.126-.2-.168-.328s-.126-.244-.168-.371c-.042-.084-.084-.168-.126-.244l-.37-.657c-.042-.084.042-.2.126-.168l2.265.615h0l.286.084.328.084.126.042V105a1.192%2c1.192%2c0%2c0%2c1%2c1.154-1.2%2c1.179%2c1.179%2c0%2c0%2c1%2c.825.328%2c1.164%2c1.164%2c0%2c0%2c1%2c.328.825v1.979l.244.084a.041.041%2c0%2c0%2c1%2c.042.042%2c1.448%2c1.448%2c0%2c0%2c0%2c.244.2%2c1.672%2c1.672%2c0%2c0%2c0%2c.286.244c.2.168.5.413.783.657.084.084.168.126.2.2a15.975%2c15.975%2c0%2c0%2c1%2c1.2%2c1.2c.126.126.2.244.328.371s.2.286.328.413c.126.168.286.371.413.539a2.149%2c2.149%2c0%2c0%2c1%2c.168.286c.168.244.286.5.455.741.042.126.126.244.168.371a2.937%2c2.937%2c0%2c0%2c1%2c.328%2c1.027.445.445%2c0%2c0%2c1%2c.042.2h0a.779.779%2c0%2c0%2c1%2c.042.328%2c4.553%2c4.553%2c0%2c0%2c1-.042%2c1.069c-.042.168-.084.286-.126.455a3.135%2c3.135%2c0%2c0%2c1-.168.455%2c9.574%2c9.574%2c0%2c0%2c1-.455.867c-.042.084-.126.2-.2.328a1.157%2c1.157%2c0%2c0%2c0-.2.328c-.084.126-.2.244-.286.371a2.745%2c2.745%2c0%2c0%2c1-.286.371c-.126.168-.286.328-.413.5a2039668559500.258%2c2039668559500.258%2c0%2c0%2c1-.573.573%2c2.593%2c2.593%2c0%2c0%2c1-.371.328l-.244.2a.155.155%2c0%2c0%2c1-.126.042h-1.81v2.307h2.265a2.041%2c2.041%2c0%2c0%2c0%2c1.356-.5c.126-.126.7-.615%2c1.4-1.356.042-.042.042-.042.084-.042l6.257-1.81C133.021%2c118.216%2c133.105%2c118.292%2c133.105%2c118.418Z' transform='translate(-94.095 -89.565)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.756' height='41.177' viewBox='0 0 41.756 41.177'%3e %3cg id='Group_1482' data-name='Group 1482' transform='translate(-288 -1871)'%3e %3cellipse id='Ellipse_1' data-name='Ellipse 1' cx='20.878' cy='20.469' rx='20.878' ry='20.469' transform='translate(288 1871.24)' fill='white'/%3e %3cg id='etherscan-seeklogo.com' transform='translate(288.125 1871)'%3e %3cpath id='Path_138' data-name='Path 138' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.752%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.458%2c1.458%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_139' data-name='Path 139' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

const Card = _ref => {
  let {
    card,
    openseaUrl,
    etherscanUrl,
    handleCardClick
  } = _ref;
  const [loading, setLoading] = React.useState(true);
  const handleCardImageClick = tokenId => {
    handleCardClick && handleCardClick(tokenId);
  };
  const handleEtherscanClick = () => {
    etherscanUrl && window.open(`${etherscanUrl}`, '_blank');
  };
  const handleOpenseaClick = tokenId => {
    openseaUrl && window.open(`${openseaUrl}/${tokenId}`, '_blank');
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-root-box"
  }, /*#__PURE__*/React__default["default"].createElement(LazyImage, {
    style: {
      cursor: handleCardClick ? 'pointer' : 'unset'
    },
    src: card.image,
    imageOnLoad: () => setLoading(false),
    alt: "Card",
    onClick: () => {
      handleCardImageClick(card.tokenId);
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "gallery-card-content-name "
  }, card.name), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box "
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "ID"), /*#__PURE__*/React__default["default"].createElement("p", null, "#", card.tokenId)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-social-items-box"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$1,
    alt: "opensea",
    style: {
      maxWidth: '30px',
      cursor: openseaUrl ? 'pointer' : 'unset'
    },
    onClick: () => handleOpenseaClick(card.tokenId)
  }), /*#__PURE__*/React__default["default"].createElement("img", {
    src: img,
    alt: "etherscan",
    style: {
      maxWidth: '30px',
      cursor: etherscanUrl ? 'pointer' : 'unset'
    },
    onClick: () => handleEtherscanClick()
  }))));
};

var css_248z$1 = ".gallery-grid-container{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 24px;\r\n}\r\n.gallery-card-item{\r\n  flex-basis: 23%;\r\n  -webkit-box-flex: 0;\r\n  flex-grow: 0;\r\n  max-width: 23%;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .gallery-card-item{\r\n    flex-basis: 45%;\r\n    max-width: 45%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .gallery-card-item{\r\n    flex-basis: 100%;\r\n    max-width: 100%;\r\n  }\r\n}";
styleInject(css_248z$1);

const ScrollComponent = _ref => {
  let {
    nfts,
    openseaUrl,
    etherscanUrl,
    handleCardClick
  } = _ref;
  const ITEMS_PER_PAGE = 29;
  const [cards, setCards] = React.useState([]);
  const [currentPage, _setCurrentPage] = React.useState(0);
  const currentPageRef = React.useRef(currentPage);
  const setCurrentPage = val => {
    currentPageRef.current = val;
    _setCurrentPage(val);
  };
  const renderCards = () => {
    return cards.map((card, i) => {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: i,
        className: "gallery-card-item"
      }, /*#__PURE__*/React__default["default"].createElement(Card, {
        card: card,
        openseaUrl: openseaUrl,
        etherscanUrl: etherscanUrl,
        handleCardClick: handleCardClick
      }));
    });
  };
  React.useEffect(() => {
    if (nfts) {
      setCards([]);
      setCurrentPage(0);
      loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards);
    }
  }, [nfts]);
  if (!nfts) {
    return /*#__PURE__*/React__default["default"].createElement("div", null, "ERROR");
  }
  return /*#__PURE__*/React__default["default"].createElement(InfiniteScroll__default["default"], {
    className: "gallery-infinite-scroll",
    dataLength: cards.length,
    next: () => loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards),
    pullDownToRefreshThreshold: 500,
    hasMore: currentPageRef.current * ITEMS_PER_PAGE < nfts.length
    // scrollThreshold="200px"
    // scrollableTarget="content-container"
    // initialScrollY={1000}
    ,
    loader: /*#__PURE__*/React__default["default"].createElement("h4", null, "Loading...")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-grid-container"
  }, renderCards()));
};

const Explorer = _ref => {
  let {
    baseUrl,
    openseaUrl,
    etherscanUrl,
    handleCardClick
  } = _ref;
  const [nfts, setNfts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const {
    filters
  } = React.useContext(FilterContext);
  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters).then(res => {
      setNfts(res);
      setLoading(false);
    });
  };
  React.useEffect(() => {
    setLoading(true);
    fetchNfts();
  }, [baseUrl, filters]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      height: 'auto',
      paddingTop: '50px'
    }
  }, loading ? /*#__PURE__*/React__default["default"].createElement("p", null, "....Loading") : null, /*#__PURE__*/React__default["default"].createElement(ScrollComponent, {
    nfts: nfts,
    openseaUrl: openseaUrl,
    etherscanUrl: etherscanUrl,
    handleCardClick: handleCardClick
  }));
};

var css_248z = "@font-face {\r\n  font-family: 'bau';\r\n  src: local('bau'), url(../../assets/fonts/Bau-Regular.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins';\r\n  src: local('poppins'), url(../../assets/fonts/Poppins.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins-semibold';\r\n  src: local('poppins-semibold'),\r\n    url(../../assets/fonts/Poppins-SemiBold.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins-medium';\r\n  src: local('poppins-medium'),\r\n    url(../../assets/fonts/Poppins-Medium.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n";
styleInject(css_248z);

var GalleryComponent = function GalleryComponent(_ref) {
  var apiBaseUrl = _ref.apiBaseUrl,
    openseaUrl = _ref.openseaUrl,
    etherscanUrl = _ref.etherscanUrl,
    handleCardClick = _ref.handleCardClick,
    headerStyle = _ref.headerStyle;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React__default["default"].createElement(FilterContextProvider, null, /*#__PURE__*/React__default["default"].createElement(Filter$1, {
    baseUrl: apiBaseUrl,
    headerStyle: headerStyle
  }), /*#__PURE__*/React__default["default"].createElement(Explorer, {
    baseUrl: apiBaseUrl,
    openseaUrl: openseaUrl,
    etherscanUrl: etherscanUrl,
    handleCardClick: handleCardClick
  })));
};
var GalleryComponent$1 = /*#__PURE__*/React__default["default"].memo(GalleryComponent);

exports.GalleryComponent = GalleryComponent$1;
