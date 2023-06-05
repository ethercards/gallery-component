'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');
var InfiniteScroll = require('react-infinite-scroll-component');
var _ = require('lodash');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var InfiniteScroll__default = /*#__PURE__*/_interopDefaultLegacy(InfiniteScroll);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

const FilterContext = /*#__PURE__*/React.createContext([]);
const FilterContextProvider = _ref => {
  let {
    children
  } = _ref;
  const [filters, setFilters] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const updateFilters = value => {
    setFilters(value);
    resetCurrentPage();
  };
  const updateCurrentPage = value => {
    setCurrentPage(value);
  };
  const resetCurrentPage = () => {
    setCurrentPage(1);
  };
  return /*#__PURE__*/React__default["default"].createElement(FilterContext.Provider, {
    value: {
      filters,
      updateFilters,
      updateCurrentPage,
      currentPage,
      resetCurrentPage
    }
  }, children);
};

const getFilters = async base_url => {
  return new Promise((resolve, reject) => {
    axios__default["default"].get(`${base_url}filters`).then(response => {
      resolve(response.data);
    });
  });
};
const getFilteredCards = async (base_url, filters, currentPage) => {
  return new Promise((resolve, reject) => {
    axios__default["default"].post(`${base_url}filter?page=${currentPage}`, filters).then(response => {
      resolve(response.data);
    }).catch(e => {
      reject(e.message);
    });
  });
};

const FilterItem = _ref => {
  let {
    filterKeyName,
    filterList = [],
    handleSelect,
    selectedFilters = []
  } = _ref;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCheckboxChange = event => {
    const {
      value,
      checked
    } = event.target;
    handleSelect(filterKeyName, value, checked);
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-dropdown-container"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: "dropdown-label",
    onClick: toggleDropdown
  }, filterKeyName), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `gallery-filter-dropdown-content ${isOpen ? 'open' : ''}`
  }, filterList.map(option => /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-item-box",
    key: option
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    className: "gallery-filter-item-box-name"
  }, option), /*#__PURE__*/React__default["default"].createElement("label", {
    className: "checkbox-container"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    value: option,
    onChange: handleCheckboxChange,
    checked: selectedFilters.includes(option)
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "checkmark"
  }))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `gallery-filter-dropdown-backdrop ${isOpen ? 'open' : ''}`,
    onClick: toggleDropdown
  }));
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

var css_248z$4 = ".gallery-filter-container-root {\r\n  margin: 20px auto;\r\n  text-align: center;\r\n  width: 100%;\r\n  background-color: #faf9f5;\r\n  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 29%);\r\n  border-radius: 20px;\r\n  z-index: 1;\r\n\r\n}\r\n\r\n.gallery-filter-inner-container {\r\n  padding: 16px 20px;\r\n  display: flex;\r\n  column-gap: 32px;\r\n  width: auto;\r\n}\r\n\r\n.dark .gallery-filter-container-root {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.dropdown-label {\r\n  font-family: 'poppins-semibold';\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  color: #000;\r\n}\r\n\r\n.dark .dropdown-label {\r\n  color: #FFF\r\n}\r\n\r\n.gallery-filter-dropdown-container {\r\n  display: inline-block;\r\n}\r\n\r\n.gallery-filter-dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #faf9f5;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  padding: 12px 16px;\r\n  z-index: 3;\r\n  max-height: 160px;\r\n  overflow:  hidden auto ;\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #FE2C85 transparent;\r\n}\r\n.dark .gallery-filter-dropdown-content {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.gallery-filter-dropdown-content.open {\r\n  display: block;\r\n}\r\n.gallery-filter-dropdown-content::-webkit-scrollbar {\r\n  width: 6px;               /* width of the entire scrollbar */\r\n}\r\n\r\n.gallery-filter-dropdown-content::-webkit-scrollbar-track {\r\n  background: transparent;        /* color of the tracking area */\r\n}\r\n\r\n.gallery-filter-dropdown-content::-webkit-scrollbar-thumb {\r\n  background-color: #FE2C85;    /* color of the scroll thumb */\r\n  border-radius: 20px;       /* roundness of the scroll thumb */\r\n  border: 1px solid #FE2C85;  /* creates padding around scroll thumb */\r\n}\r\n.gallery-filter-dropdown-backdrop {\r\n  display: none;\r\n  position: absolute;\r\n  width: 90vw;\r\n  height: 100vh;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.gallery-filter-dropdown-backdrop.open {\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.gallery-filter-item-box {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  column-gap: 10px;\r\n}\r\n\r\n.gallery-filter-item-box .gallery-filter-item-box-name {\r\n  font-family: 'poppins';\r\n  font-size: 14px;\r\n  margin-bottom: 8px;\r\n}\r\n.dark .gallery-filter-item-box .gallery-filter-item-box-name {\r\n color: #FFF;\r\n}\r\n\r\n.checkbox-container {\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 0;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #FFF;\r\n  border: 1px solid #FE2C85;\r\n  cursor: pointer;\r\n}\r\n.dark .checkmark {\r\n  background-color: #151E2A;\r\n}\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox-container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n.checkbox-container .checkmark:after {\r\n  left: 5px;\r\n  top: 1px;\r\n  width: 4px;\r\n  height: 8px;\r\n  border: solid #FE2C85;\r\n  border-width: 0 2px 2px 0;\r\n  transform: rotate(45deg);\r\n}";
styleInject(css_248z$4);

const FilterContainer = _ref => {
  let {
    filtersArray
  } = _ref;
  const {
    filters,
    updateFilters
  } = React.useContext(FilterContext);
  const handleSelect = (category, item, checked) => {
    const activeFilters = {
      ...filters
    };
    if (checked) {
      const tmpArray = activeFilters[category] ? [...activeFilters[category], item] : [item];
      activeFilters[category] = tmpArray;
    } else {
      if (activeFilters[category]) {
        const filteredArray = activeFilters[category].filter(data => data !== item);
        if (filteredArray.length === 0) {
          delete activeFilters[category];
        } else {
          activeFilters[category] = filteredArray;
        }
      }
    }
    updateFilters(activeFilters);
  };
  const renderFilters = () => {
    return filtersArray ? Object.keys(filtersArray).map((filterKeyName, index) => /*#__PURE__*/React__default["default"].createElement(FilterItem, {
      filterKeyName: filterKeyName,
      filterList: filtersArray[filterKeyName],
      key: index,
      handleSelect: handleSelect,
      selectedFilters: filters[filterKeyName]
    })) : 'No filters loaded!';
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-container-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-filter-inner-container"
  }, renderFilters()));
};

const Filter = _ref => {
  let {
    baseUrl,
    headerStyle
  } = _ref;
  //this component fetching data from BE
  const [filters, setFilters] = React.useState({});
  const fetchFilters = async () => {
    getFilters(baseUrl).then(res => {
      setFilters(res);
    });
  };
  React.useEffect(() => {
    fetchFilters();
  }, [baseUrl]);
  return /*#__PURE__*/React__default["default"].createElement(FilterContainer, {
    filtersArray: filters
  });
};
var Filter$1 = /*#__PURE__*/React__default["default"].memo(Filter);

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

var css_248z$3 = ".gallery-card-root-box {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  background-color: #faf9f5;\r\n  box-shadow: 0px 0px 15px 2px rgb(0 0 0 / 29%)\r\n}\r\n\r\n.dark .gallery-card-root-box {\r\n  background-color: #151E2A;\r\n}\r\n\r\n.gallery-card-root-box p {\r\n  margin-block-start: 0em !important;\r\n  margin-block-end: 0em !important;\r\n}\r\n\r\n.gallery-card-content {\r\n  padding: 15px 22px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 10px;\r\n  height: 100%;\r\n}\r\n\r\n.gallery-card-content-general {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  column-gap: 16px;\r\n}\r\n\r\n.gallery-card-content-name {\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  color: #000;\r\n  font-family: 'poppins-medium';\r\n  text-align: left;\r\n}\r\n\r\n.dark .gallery-card-content-name {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-card-content-id-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.gallery-card-content-id-box span {\r\n  font-family: 'poppins';\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  color: #00000090;\r\n  text-align: left;\r\n}\r\n\r\n.dark .gallery-card-content-id-box span {\r\n  color: #FFFFFF90;\r\n}\r\n\r\n.gallery-card-content-id-box p {\r\n  font-family: 'poppins-medium';\r\n  font-size: 14px;\r\n  color: #000;\r\n  text-align: left;\r\n}\r\n\r\n.dark .gallery-card-content-id-box p {\r\n  color: #FFFFFF;\r\n}\r\n.gallery-card-content-id-box.gallery-owner-box p:hover {\r\n  color: #FE2C85;\r\n}\r\n.gallery-price-box{\r\n  margin-bottom: 5px;\r\n}\r\n.gallery-price-box p {\r\n  color: #FE2C85 !important;\r\n  line-height: 18px;\r\n  font-size: 14px;\r\n  font-family: 'poppins-semibold';\r\n}\r\n\r\n.gallery-social-trait-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n\r\n}\r\n\r\n.gallery-social-items-box {\r\n  display: flex;\r\n  gap: 10px\r\n}\r\n\r\n.gallery-trait-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: flex-start;\r\n\r\n}\r\n\r\n.gallery-trait-holder-box {\r\n  border-radius: 20px;\r\n  width: 26px;\r\n  height: 26px;\r\n  background-color: #FE2C85;\r\n  padding: 2px;\r\n}\r\n\r\n.gallery-trait-holder-box img {\r\n  height: 100%;\r\n  width: auto;\r\n}";
styleInject(css_248z$3);

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.248' height='41.177' viewBox='0 0 41.248 41.177'%3e %3cg id='opensea' transform='translate(-4.953 -6)'%3e %3cg id='Group_1481' data-name='Group 1481' transform='translate(4.953 6)'%3e %3cpath id='Path_140' data-name='Path 140' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.751-1.751h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.751V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.457%2c1.457%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_141' data-name='Path 141' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3cpath id='Path_142' data-name='Path 142' d='M46.677%2c26.589A20.589%2c20.589%2c0%2c1%2c1%2c26.089%2c6%2c20.592%2c20.592%2c0%2c0%2c1%2c46.677%2c26.589Z' transform='translate(-0.501)' fill='%232081e2'/%3e %3cpath id='Path_143' data-name='Path 143' d='M125.931%2c165.509l.084-.126%2c5.356-8.362c.084-.126.244-.126.328.042.909%2c2.021%2c1.65%2c4.488%2c1.314%2c6.054a8.8%2c8.8%2c0%2c0%2c1-1.069%2c2.307.985.985%2c0%2c0%2c1-.2.328.219.219%2c0%2c0%2c1-.168.084h-5.516A.225.225%2c0%2c0%2c1%2c125.931%2c165.509Z' transform='translate(-110.76 -138.221)' fill='white'/%3e %3cpath id='Path_144' data-name='Path 144' d='M133.105%2c118.418v1.314c0%2c.084-.042.126-.126.168a6.4%2c6.4%2c0%2c0%2c0-2.434%2c1.65c-1.524%2c2.1-2.678%2c5.1-5.229%2c5.1H114.58a6.9%2c6.9%2c0%2c0%2c1-6.88-6.922v-.126a.181.181%2c0%2c0%2c1%2c.168-.168h6.054a.216.216%2c0%2c0%2c1%2c.2.2%2c2.333%2c2.333%2c0%2c0%2c0%2c.2%2c1.154%2c2.094%2c2.094%2c0%2c0%2c0%2c1.895%2c1.154h2.964v-2.307h-2.922a.187.187%2c0%2c0%2c1-.168-.286.581.581%2c0%2c0%2c0%2c.126-.168c.286-.413.657-.985%2c1.069-1.684a9.738%2c9.738%2c0%2c0%2c0%2c.741-1.482%2c2.39%2c2.39%2c0%2c0%2c0%2c.126-.286c.042-.168.126-.328.168-.455s.084-.244.126-.371a6.808%2c6.808%2c0%2c0%2c0%2c.126-1.356%2c2.782%2c2.782%2c0%2c0%2c0-.042-.573c0-.2-.042-.413-.042-.615a2.392%2c2.392%2c0%2c0%2c0-.084-.539%2c5.738%2c5.738%2c0%2c0%2c0-.168-.825l-.042-.084a2.65%2c2.65%2c0%2c0%2c0-.168-.539c-.168-.573-.37-1.154-.573-1.65-.084-.2-.168-.413-.244-.615-.126-.286-.244-.573-.37-.825-.042-.126-.126-.2-.168-.328s-.126-.244-.168-.371c-.042-.084-.084-.168-.126-.244l-.37-.657c-.042-.084.042-.2.126-.168l2.265.615h0l.286.084.328.084.126.042V105a1.192%2c1.192%2c0%2c0%2c1%2c1.154-1.2%2c1.179%2c1.179%2c0%2c0%2c1%2c.825.328%2c1.164%2c1.164%2c0%2c0%2c1%2c.328.825v1.979l.244.084a.041.041%2c0%2c0%2c1%2c.042.042%2c1.448%2c1.448%2c0%2c0%2c0%2c.244.2%2c1.672%2c1.672%2c0%2c0%2c0%2c.286.244c.2.168.5.413.783.657.084.084.168.126.2.2a15.975%2c15.975%2c0%2c0%2c1%2c1.2%2c1.2c.126.126.2.244.328.371s.2.286.328.413c.126.168.286.371.413.539a2.149%2c2.149%2c0%2c0%2c1%2c.168.286c.168.244.286.5.455.741.042.126.126.244.168.371a2.937%2c2.937%2c0%2c0%2c1%2c.328%2c1.027.445.445%2c0%2c0%2c1%2c.042.2h0a.779.779%2c0%2c0%2c1%2c.042.328%2c4.553%2c4.553%2c0%2c0%2c1-.042%2c1.069c-.042.168-.084.286-.126.455a3.135%2c3.135%2c0%2c0%2c1-.168.455%2c9.574%2c9.574%2c0%2c0%2c1-.455.867c-.042.084-.126.2-.2.328a1.157%2c1.157%2c0%2c0%2c0-.2.328c-.084.126-.2.244-.286.371a2.745%2c2.745%2c0%2c0%2c1-.286.371c-.126.168-.286.328-.413.5a2039668559500.258%2c2039668559500.258%2c0%2c0%2c1-.573.573%2c2.593%2c2.593%2c0%2c0%2c1-.371.328l-.244.2a.155.155%2c0%2c0%2c1-.126.042h-1.81v2.307h2.265a2.041%2c2.041%2c0%2c0%2c0%2c1.356-.5c.126-.126.7-.615%2c1.4-1.356.042-.042.042-.042.084-.042l6.257-1.81C133.021%2c118.216%2c133.105%2c118.292%2c133.105%2c118.418Z' transform='translate(-94.095 -89.565)' fill='white'/%3e %3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='41.756' height='41.177' viewBox='0 0 41.756 41.177'%3e %3cg id='Group_1482' data-name='Group 1482' transform='translate(-288 -1871)'%3e %3cellipse id='Ellipse_1' data-name='Ellipse 1' cx='20.878' cy='20.469' rx='20.878' ry='20.469' transform='translate(288 1871.24)' fill='white'/%3e %3cg id='etherscan-seeklogo.com' transform='translate(288.125 1871)'%3e %3cpath id='Path_138' data-name='Path 138' d='M13.529%2c25.573a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h.008l2.914.008a1.75%2c1.75%2c0%2c0%2c1%2c1.752%2c1.751V36.6c.328-.1.749-.2%2c1.213-.312a1.461%2c1.461%2c0%2c0%2c0%2c1.128-1.423V21.211a1.75%2c1.75%2c0%2c0%2c1%2c1.752-1.752h2.922a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V33.884s.733-.295%2c1.44-.6a1.463%2c1.463%2c0%2c0%2c0%2c.893-1.347V16.84A1.75%2c1.75%2c0%2c0%2c1%2c32.8%2c15.089h2.914a1.75%2c1.75%2c0%2c0%2c1%2c1.751%2c1.752V29.286A34.4%2c34.4%2c0%2c0%2c0%2c44.593%2c22.6a2.946%2c2.946%2c0%2c0%2c0%2c.446-2.745A20.609%2c20.609%2c0%2c1%2c0%2c7.694%2c36.873a2.6%2c2.6%2c0%2c0%2c0%2c2.484%2c1.288c.556-.051%2c1.238-.118%2c2.055-.211A1.458%2c1.458%2c0%2c0%2c0%2c13.521%2c36.5l.008-10.93' transform='translate(-4.953 -6.003)' fill='%2321325b'/%3e %3cpath id='Path_139' data-name='Path 139' d='M106.1%2c251.479a20.6%2c20.6%2c0%2c0%2c0%2c32.731-16.665c0-.472-.025-.943-.051-1.415-7.528%2c11.233-21.439%2c16.488-32.681%2c18.079' transform='translate(-97.583 -214.252)' fill='%23979695'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

const Card = _ref => {
  let {
    card,
    openseaUrl,
    etherscanUrl,
    handleCardClick,
    displayTraits,
    owner,
    ownerLabel,
    etherOffer = null,
    dustOffer = null,
    handleOwnerClick
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
  const handleOwnerBoxClick = owner => {
    handleOwnerClick(owner);
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
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-general"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-general-informations"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "gallery-card-content-name "
  }, card.name), owner || ownerLabel ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box gallery-owner-box"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "Owner"), /*#__PURE__*/React__default["default"].createElement("p", {
    onClick: () => handleOwnerBoxClick(owner),
    style: {
      cursor: handleOwnerBoxClick ? 'pointer' : 'unset'
    }
  }, ownerLabel || owner.slice(0, 6) + '...')) : '', /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box "
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "Token ID"), /*#__PURE__*/React__default["default"].createElement("p", null, "#", card.tokenId))), (etherOffer || dustOffer) && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box gallery-price-box"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "Price"), /*#__PURE__*/React__default["default"].createElement("p", null, etherOffer)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-card-content-id-box gallery-price-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, dustOffer)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-social-trait-box"
  }, etherscanUrl || openseaUrl ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-social-items-box"
  }, openseaUrl && /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$2,
    alt: "opensea",
    style: {
      maxWidth: '30px',
      cursor: openseaUrl ? 'pointer' : 'unset'
    },
    onClick: () => handleOpenseaClick(card.tokenId)
  }), etherscanUrl && /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$1,
    alt: "etherscan",
    style: {
      maxWidth: '30px',
      cursor: etherscanUrl ? 'pointer' : 'unset'
    },
    onClick: () => handleEtherscanClick()
  })) : null, card.traits && displayTraits && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-trait-container"
  }, card.traits.map((item, index) => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "gallery-trait-holder-box",
      key: index
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: item.icon_url,
      alt: "trait"
    }));
  })))));
};

var css_248z$2 = ".gallery-grid-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 24px;\r\n  padding: 10px;\r\n}\r\n\r\n.gallery-card-item {\r\n  flex-basis: 23%;\r\n  -webkit-box-flex: 0;\r\n  flex-grow: 0;\r\n  max-width: 23%;\r\n}\r\n\r\n.dark .gallery-error-message {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-error-message {\r\n  color: #000\r\n}\r\n\r\n.dark .gallery-no-item-message {\r\n  color: #FFF;\r\n}\r\n\r\n.gallery-no-item-message {\r\n  color: #000\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  .gallery-card-item {\r\n    flex-basis: 45%;\r\n    max-width: 45%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .gallery-card-item {\r\n    flex-basis: 100%;\r\n    max-width: 100%;\r\n  }\r\n}";
styleInject(css_248z$2);

const ScrollComponent = _ref => {
  let {
    nfts,
    openseaUrl,
    etherscanUrl,
    handleCardClick,
    displayTraits,
    handleOwnerClick
  } = _ref;
  const ITEMS_PER_PAGE = 16;
  const [cards, setCards] = React.useState([]);
  const {
    currentPage,
    updateCurrentPage
  } = React.useContext(FilterContext);
  const currentPageRef = React.useRef(1);
  const setCurrentPage = val => {
    //update the context, and the ref to store the actual data
    updateCurrentPage(val);
    currentPageRef.current = val;
  };
  const renderCards = () => {
    return cards.map((card, i) => {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: i,
        className: "gallery-card-item"
      }, /*#__PURE__*/React__default["default"].createElement(Card, {
        card: card.metadata ? card.metadata : card,
        openseaUrl: openseaUrl,
        etherscanUrl: etherscanUrl,
        handleCardClick: handleCardClick,
        displayTraits: displayTraits,
        owner: card.owner || null,
        ownerLabel: card.ownerLabel || null,
        etherOffer: card.marketplaceData ? card.marketplaceData.ethOffer : null,
        dustOffer: card.marketplaceData ? card.marketplaceData.dustOffer : null,
        handleOwnerClick: handleOwnerClick
      }));
    });
  };
  React.useEffect(() => {
    if (nfts.length > 0) {
      setCards(nfts);
    } else {
      setCards([]);
    }
  }, [nfts]);
  React.useEffect(() => {
    //need to set currentPageRef.current 1 when we select a filter
    if (currentPage === 1) {
      currentPageRef.current = 1;
    }
  }, [currentPage]);
  if (!nfts) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "gallery-error-message"
    }, "ERROR");
  }
  if (cards.length === 0) {
    return /*#__PURE__*/React__default["default"].createElement("p", {
      className: "gallery-no-item-message"
    }, "No item to display");
  }
  return /*#__PURE__*/React__default["default"].createElement(InfiniteScroll__default["default"], {
    className: "gallery-infinite-scroll",
    dataLength: cards.length,
    next: () => {
      setCurrentPage(currentPageRef.current + 1);
    },
    pullDownToRefreshThreshold: 500,
    hasMore: currentPageRef.current * ITEMS_PER_PAGE < cards.length
    // scrollThreshold="200px"
    // scrollableTarget="content-container"
    // initialScrollY={1000}
    ,
    loader: /*#__PURE__*/React__default["default"].createElement("h4", null, "Loading...")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-grid-container"
  }, renderCards()));
};

function useDeepCompareMemoize(value) {
  const ref = React.useRef();
  if (!___default["default"].isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepEffect(callback, dependencies) {
  React.useEffect(callback, useDeepCompareMemoize(dependencies));
}

const Explorer = _ref => {
  let {
    baseUrl = undefined,
    openseaUrl,
    etherscanUrl,
    handleCardClick,
    nftsCardList = [],
    displayTraits,
    handleOwnerClick
  } = _ref;
  const [nfts, setNfts] = React.useState([]);
  const {
    filters,
    currentPage
  } = React.useContext(FilterContext);
  const explorerRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters, currentPage).then(res => {
      if (res.length > 0 && currentPage > 1) {
        //load elements into array when currentPage is increasing
        setNfts(prevState => [...prevState, ...res]);
      }
      if (currentPage === 1) {
        //this happens when select a filter 
        setNfts(res);
      }
    });
    setLoading(false);
  };
  useDeepEffect(() => {
    if (baseUrl) {
      setLoading(true);
      fetchNfts();
    }
  }, [filters, baseUrl, currentPage]);
  React.useEffect(() => {
    if (!baseUrl && nftsCardList.length > 0) {
      setNfts(nftsCardList);
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: explorerRef,
    style: {
      width: '100%',
      height: 'auto',
      paddingTop: '50px'
    },
    className: "gallery-scroll-component-holder"
  }, loading ? /*#__PURE__*/React__default["default"].createElement("p", null, "Fetching data ....") : /*#__PURE__*/React__default["default"].createElement(ScrollComponent, {
    nfts: nfts,
    openseaUrl: openseaUrl,
    etherscanUrl: etherscanUrl,
    handleCardClick: handleCardClick,
    displayTraits: displayTraits,
    handleOwnerClick: handleOwnerClick
  }));
};

var css_248z$1 = "@font-face {\r\n  font-family: 'bau';\r\n  src: local('bau'), url(../../assets/fonts/Bau-Regular.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins';\r\n  src: local('poppins'), url(../../assets/fonts/Poppins.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins-semibold';\r\n  src: local('poppins-semibold'),\r\n    url(../../assets/fonts/Poppins-SemiBold.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'poppins-medium';\r\n  src: local('poppins-medium'),\r\n    url(../../assets/fonts/Poppins-Medium.ttf) format('truetype');\r\n  font-display: swap;\r\n}\r\n\r\n";
styleInject(css_248z$1);

var css_248z = ".gallery-selected-filters-box {\r\n  width: 100%;\r\n  gap: 16px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.gallery-selected-filters-content-box {\r\n  width: auto;\r\n  display: flex;\r\n  background-color: #faf9f5;\r\n  border-radius: 20px;\r\n  padding: 14px;\r\n  align-items: center;\r\n  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 9px 5px;\r\n}\r\n\r\n.dark .gallery-selected-filters-content-box {\r\n  background-color: #151a2d;\r\n}\r\n\r\n.gallery-selected-filters-content-box span {\r\n  font-family: 'poppins';\r\n  color: #000;\r\n  font-size: 14px;\r\n}\r\n\r\n.dark .gallery-selected-filters-content-box span {\r\n  color: #FFF\r\n}\r\n\r\n.gallery-selected-filters-category-name{\r\n  margin-right: 5px;\r\n}\r\n.gallery-selected-filters-filter-name {\r\n  margin-right: 15px;\r\n}\r\n.gallery-selected-filters-clear-button{\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n";
styleInject(css_248z);

var img = "data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M24 3.35998L20.64 0L12 8.63999L3.35998 0L0 3.35998L8.63999 12L0 20.64L3.35998 24L12 15.36L20.64 24L24 20.64L15.36 12L24 3.35998Z' fill='%23FE2C85'/%3e%3c/svg%3e";

const SelectedFilterItem = _ref => {
  let {
    filterKeyName,
    filterName,
    handleClearOne
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-selected-filters-content-box"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-selected-filters-category-name"
  }, filterKeyName, ":", ' '), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "gallery-selected-filters-filter-name"
  }, filterName), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-selected-filters-clear-button",
    onClick: () => handleClearOne(filterKeyName, filterName)
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img,
    alt: "clear",
    style: {
      height: '15px',
      width: '15px'
    }
  })));
};

const SelectedFilters = () => {
  const {
    filters,
    updateFilters
  } = React.useContext(FilterContext);
  const handleClearOne = (category, value) => {
    const activeFilters = {
      ...filters
    };
    const filteredArray = activeFilters[category].filter(data => data !== value);
    if (filteredArray.length === 0) {
      delete activeFilters[category];
    } else {
      activeFilters[category] = filteredArray;
    }
    updateFilters(activeFilters);
  };
  const renderSelectedFilters = () => {
    return filters ? Object.keys(filters).map(keyName => {
      return filters[keyName].map((filter, index) => {
        return /*#__PURE__*/React__default["default"].createElement(SelectedFilterItem, {
          filterKeyName: keyName,
          filterName: filter,
          handleClearOne: handleClearOne,
          key: index
        });
      });
    }) : "";
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "gallery-selected-filters-box"
  }, renderSelectedFilters());
};
var SelectedFilters$1 = /*#__PURE__*/React__default["default"].memo(SelectedFilters);

var GalleryComponent = function GalleryComponent(_ref) {
  var apiBaseUrl = _ref.apiBaseUrl,
    openseaUrl = _ref.openseaUrl,
    etherscanUrl = _ref.etherscanUrl,
    handleCardClick = _ref.handleCardClick,
    headerStyle = _ref.headerStyle,
    cardArray = _ref.cardArray,
    _ref$displayTraits = _ref.displayTraits,
    displayTraits = _ref$displayTraits === void 0 ? false : _ref$displayTraits,
    _ref$displayFilters = _ref.displayFilters,
    displayFilters = _ref$displayFilters === void 0 ? true : _ref$displayFilters,
    _ref$handleOwnerClick = _ref.handleOwnerClick,
    handleOwnerClick = _ref$handleOwnerClick === void 0 ? undefined : _ref$handleOwnerClick;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: '100%',
      position: 'relative'
    },
    className: "gallery-component-box"
  }, /*#__PURE__*/React__default["default"].createElement(FilterContextProvider, null, apiBaseUrl && displayFilters ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Filter$1, {
    baseUrl: apiBaseUrl,
    headerStyle: headerStyle
  }), /*#__PURE__*/React__default["default"].createElement(SelectedFilters$1, null)) : null, /*#__PURE__*/React__default["default"].createElement(Explorer, {
    baseUrl: apiBaseUrl,
    openseaUrl: openseaUrl,
    etherscanUrl: etherscanUrl,
    handleCardClick: handleCardClick,
    nftsCardList: cardArray,
    displayTraits: displayTraits,
    handleOwnerClick: handleOwnerClick
  })));
};
var GalleryComponent$1 = /*#__PURE__*/React__default["default"].memo(GalleryComponent);

exports.GalleryComponent = GalleryComponent$1;
