/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___ = __webpack_require__(1);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const countries = [{
  name: 'Afghanistan',
  value: 'AF'
}, {
  name: 'land Islands',
  value: 'AX'
}, {
  name: 'Albania',
  value: 'AL'
}, {
  name: 'Algeria',
  value: 'DZ'
}, {
  name: 'American Samoa',
  value: 'AS'
}, {
  name: 'AndorrA',
  value: 'AD'
}, {
  name: 'Angola',
  value: 'AO'
}, {
  name: 'Anguilla',
  value: 'AI'
}, {
  name: 'Antarctica',
  value: 'AQ'
}, {
  name: 'Antigua and Barbuda',
  value: 'AG'
}, {
  name: 'Argentina',
  value: 'AR'
}, {
  name: 'Armenia',
  value: 'AM'
}, {
  name: 'Aruba',
  value: 'AW'
}, {
  name: 'Australia',
  value: 'AU'
}, {
  name: 'Austria',
  value: 'AT'
}, {
  name: 'Azerbaijan',
  value: 'AZ'
}, {
  name: 'Bahamas',
  value: 'BS'
}, {
  name: 'Bahrain',
  value: 'BH'
}, {
  name: 'Bangladesh',
  value: 'BD'
}, {
  name: 'Barbados',
  value: 'BB'
}, {
  name: 'Belarus',
  value: 'BY'
}, {
  name: 'Belgium',
  value: 'BE'
}, {
  name: 'Belize',
  value: 'BZ'
}, {
  name: 'Benin',
  value: 'BJ'
}, {
  name: 'Bermuda',
  value: 'BM'
}, {
  name: 'Bhutan',
  value: 'BT'
}, {
  name: 'Bolivia',
  value: 'BO'
}, {
  name: 'Bosnia and Herzegovina',
  value: 'BA'
}, {
  name: 'Botswana',
  value: 'BW'
}, {
  name: 'Bouvet Island',
  value: 'BV'
}, {
  name: 'Brazil',
  value: 'BR'
}, {
  name: 'British Indian Ocean Territory',
  value: 'IO'
}, {
  name: 'Brunei Darussalam',
  value: 'BN'
}, {
  name: 'Bulgaria',
  value: 'BG'
}, {
  name: 'Burkina Faso',
  value: 'BF'
}, {
  name: 'Burundi',
  value: 'BI'
}, {
  name: 'Cambodia',
  value: 'KH'
}, {
  name: 'Cameroon',
  value: 'CM'
}, {
  name: 'Canada',
  value: 'CA'
}, {
  name: 'Cape Verde',
  value: 'CV'
}, {
  name: 'Cayman Islands',
  value: 'KY'
}, {
  name: 'Central African Republic',
  value: 'CF'
}, {
  name: 'Chad',
  value: 'TD'
}, {
  name: 'Chile',
  value: 'CL'
}, {
  name: 'China',
  value: 'CN'
}, {
  name: 'Christmas Island',
  value: 'CX'
}, {
  name: 'Cocos (Keeling) Islands',
  value: 'CC'
}, {
  name: 'Colombia',
  value: 'CO'
}, {
  name: 'Comoros',
  value: 'KM'
}, {
  name: 'Congo',
  value: 'CG'
}, {
  name: 'Congo, The Democratic Republic of the',
  value: 'CD'
}, {
  name: 'Cook Islands',
  value: 'CK'
}, {
  name: 'Costa Rica',
  value: 'CR'
}, {
  name: 'Cote D"Ivoire',
  value: 'CI'
}, {
  name: 'Croatia',
  value: 'HR'
}, {
  name: 'Cuba',
  value: 'CU'
}, {
  name: 'Cyprus',
  value: 'CY'
}, {
  name: 'Czech Republic',
  value: 'CZ'
}, {
  name: 'Denmark',
  value: 'DK'
}, {
  name: 'Djibouti',
  value: 'DJ'
}, {
  name: 'Dominica',
  value: 'DM'
}, {
  name: 'Dominican Republic',
  value: 'DO'
}, {
  name: 'Ecuador',
  value: 'EC'
}, {
  name: 'Egypt',
  value: 'EG'
}, {
  name: 'El Salvador',
  value: 'SV'
}, {
  name: 'Equatorial Guinea',
  value: 'GQ'
}, {
  name: 'Eritrea',
  value: 'ER'
}, {
  name: 'Estonia',
  value: 'EE'
}, {
  name: 'Ethiopia',
  value: 'ET'
}, {
  name: 'Falkland Islands (Malvinas)',
  value: 'FK'
}, {
  name: 'Faroe Islands',
  value: 'FO'
}, {
  name: 'Fiji',
  value: 'FJ'
}, {
  name: 'Finland',
  value: 'FI'
}, {
  name: 'France',
  value: 'FR'
}, {
  name: 'French Guiana',
  value: 'GF'
}, {
  name: 'French Polynesia',
  value: 'PF'
}, {
  name: 'French Southern Territories',
  value: 'TF'
}, {
  name: 'Gabon',
  value: 'GA'
}, {
  name: 'Gambia',
  value: 'GM'
}, {
  name: 'Georgia',
  value: 'GE'
}, {
  name: 'Germany',
  value: 'DE'
}, {
  name: 'Ghana',
  value: 'GH'
}, {
  name: 'Gibraltar',
  value: 'GI'
}, {
  name: 'Greece',
  value: 'GR'
}, {
  name: 'Greenland',
  value: 'GL'
}, {
  name: 'Grenada',
  value: 'GD'
}, {
  name: 'Guadeloupe',
  value: 'GP'
}, {
  name: 'Guam',
  value: 'GU'
}, {
  name: 'Guatemala',
  value: 'GT'
}, {
  name: 'Guernsey',
  value: 'GG'
}, {
  name: 'Guinea',
  value: 'GN'
}, {
  name: 'Guinea-Bissau',
  value: 'GW'
}, {
  name: 'Guyana',
  value: 'GY'
}, {
  name: 'Haiti',
  value: 'HT'
}, {
  name: 'Heard Island and Mcdonald Islands',
  value: 'HM'
}, {
  name: 'Holy See (Vatican City State)',
  value: 'VA'
}, {
  name: 'Honduras',
  value: 'HN'
}, {
  name: 'Hong Kong',
  value: 'HK'
}, {
  name: 'Hungary',
  value: 'HU'
}, {
  name: 'Iceland',
  value: 'IS'
}, {
  name: 'India',
  value: 'IN'
}, {
  name: 'Indonesia',
  value: 'ID'
}, {
  name: 'Iran, Islamic Republic Of',
  value: 'IR'
}, {
  name: 'Iraq',
  value: 'IQ'
}, {
  name: 'Ireland',
  value: 'IE'
}, {
  name: 'Isle of Man',
  value: 'IM'
}, {
  name: 'Israel',
  value: 'IL'
}, {
  name: 'Italy',
  value: 'IT'
}, {
  name: 'Jamaica',
  value: 'JM'
}, {
  name: 'Japan',
  value: 'JP'
}, {
  name: 'Jersey',
  value: 'JE'
}, {
  name: 'Jordan',
  value: 'JO'
}, {
  name: 'Kazakhstan',
  value: 'KZ'
}, {
  name: 'Kenya',
  value: 'KE'
}, {
  name: 'Kiribati',
  value: 'KI'
}, {
  name: 'Korea, Democratic People"S Republic of',
  value: 'KP'
}, {
  name: 'Korea, Republic of',
  value: 'KR'
}, {
  name: 'Kuwait',
  value: 'KW'
}, {
  name: 'Kyrgyzstan',
  value: 'KG'
}, {
  name: 'Lao People"S Democratic Republic',
  value: 'LA'
}, {
  name: 'Latvia',
  value: 'LV'
}, {
  name: 'Lebanon',
  value: 'LB'
}, {
  name: 'Lesotho',
  value: 'LS'
}, {
  name: 'Liberia',
  value: 'LR'
}, {
  name: 'Libyan Arab Jamahiriya',
  value: 'LY'
}, {
  name: 'Liechtenstein',
  value: 'LI'
}, {
  name: 'Lithuania',
  value: 'LT'
}, {
  name: 'Luxembourg',
  value: 'LU'
}, {
  name: 'Macao',
  value: 'MO'
}, {
  name: 'Macedonia, The Former Yugoslav Republic of',
  value: 'MK'
}, {
  name: 'Madagascar',
  value: 'MG'
}, {
  name: 'Malawi',
  value: 'MW'
}, {
  name: 'Malaysia',
  value: 'MY'
}, {
  name: 'Maldives',
  value: 'MV'
}, {
  name: 'Mali',
  value: 'ML'
}, {
  name: 'Malta',
  value: 'MT'
}, {
  name: 'Marshall Islands',
  value: 'MH'
}, {
  name: 'Martinique',
  value: 'MQ'
}, {
  name: 'Mauritania',
  value: 'MR'
}, {
  name: 'Mauritius',
  value: 'MU'
}, {
  name: 'Mayotte',
  value: 'YT'
}, {
  name: 'Mexico',
  value: 'MX'
}, {
  name: 'Micronesia, Federated States of',
  value: 'FM'
}, {
  name: 'Moldova, Republic of',
  value: 'MD'
}, {
  name: 'Monaco',
  value: 'MC'
}, {
  name: 'Mongolia',
  value: 'MN'
}, {
  name: 'Montenegro',
  value: 'ME'
}, {
  name: 'Montserrat',
  value: 'MS'
}, {
  name: 'Morocco',
  value: 'MA'
}, {
  name: 'Mozambique',
  value: 'MZ'
}, {
  name: 'Myanmar',
  value: 'MM'
}, {
  name: 'Namibia',
  value: 'NA'
}, {
  name: 'Nauru',
  value: 'NR'
}, {
  name: 'Nepal',
  value: 'NP'
}, {
  name: 'Netherlands',
  value: 'NL'
}, {
  name: 'Netherlands Antilles',
  value: 'AN'
}, {
  name: 'New Caledonia',
  value: 'NC'
}, {
  name: 'New Zealand',
  value: 'NZ'
}, {
  name: 'Nicaragua',
  value: 'NI'
}, {
  name: 'Niger',
  value: 'NE'
}, {
  name: 'Nigeria',
  value: 'NG'
}, {
  name: 'Niue',
  value: 'NU'
}, {
  name: 'Norfolk Island',
  value: 'NF'
}, {
  name: 'Northern Mariana Islands',
  value: 'MP'
}, {
  name: 'Norway',
  value: 'NO'
}, {
  name: 'Oman',
  value: 'OM'
}, {
  name: 'Pakistan',
  value: 'PK'
}, {
  name: 'Palau',
  value: 'PW'
}, {
  name: 'Palestinian Territory, Occupied',
  value: 'PS'
}, {
  name: 'Panama',
  value: 'PA'
}, {
  name: 'Papua New Guinea',
  value: 'PG'
}, {
  name: 'Paraguay',
  value: 'PY'
}, {
  name: 'Peru',
  value: 'PE'
}, {
  name: 'Philippines',
  value: 'PH'
}, {
  name: 'Pitcairn',
  value: 'PN'
}, {
  name: 'Poland',
  value: 'PL'
}, {
  name: 'Portugal',
  value: 'PT'
}, {
  name: 'Puerto Rico',
  value: 'PR'
}, {
  name: 'Qatar',
  value: 'QA'
}, {
  name: 'Reunion',
  value: 'RE'
}, {
  name: 'Romania',
  value: 'RO'
}, {
  name: 'Russian Federation',
  value: 'RU'
}, {
  name: 'RWANDA',
  value: 'RW'
}, {
  name: 'Saint Helena',
  value: 'SH'
}, {
  name: 'Saint Kitts and Nevis',
  value: 'KN'
}, {
  name: 'Saint Lucia',
  value: 'LC'
}, {
  name: 'Saint Pierre and Miquelon',
  value: 'PM'
}, {
  name: 'Saint Vincent and the Grenadines',
  value: 'VC'
}, {
  name: 'Samoa',
  value: 'WS'
}, {
  name: 'San Marino',
  value: 'SM'
}, {
  name: 'Sao Tome and Principe',
  value: 'ST'
}, {
  name: 'Saudi Arabia',
  value: 'SA'
}, {
  name: 'Senegal',
  value: 'SN'
}, {
  name: 'Serbia',
  value: 'RS'
}, {
  name: 'Seychelles',
  value: 'SC'
}, {
  name: 'Sierra Leone',
  value: 'SL'
}, {
  name: 'Singapore',
  value: 'SG'
}, {
  name: 'Slovakia',
  value: 'SK'
}, {
  name: 'Slovenia',
  value: 'SI'
}, {
  name: 'Solomon Islands',
  value: 'SB'
}, {
  name: 'Somalia',
  value: 'SO'
}, {
  name: 'South Africa',
  value: 'ZA'
}, {
  name: 'South Georgia and the South Sandwich Islands',
  value: 'GS'
}, {
  name: 'Spain',
  value: 'ES'
}, {
  name: 'Sri Lanka',
  value: 'LK'
}, {
  name: 'Sudan',
  value: 'SD'
}, {
  name: 'Suriname',
  value: 'SR'
}, {
  name: 'Svalbard and Jan Mayen',
  value: 'SJ'
}, {
  name: 'Swaziland',
  value: 'SZ'
}, {
  name: 'Sweden',
  value: 'SE'
}, {
  name: 'Switzerland',
  value: 'CH'
}, {
  name: 'Syrian Arab Republic',
  value: 'SY'
}, {
  name: 'Taiwan, Province of China',
  value: 'TW'
}, {
  name: 'Tajikistan',
  value: 'TJ'
}, {
  name: 'Tanzania, United Republic of',
  value: 'TZ'
}, {
  name: 'Thailand',
  value: 'TH'
}, {
  name: 'Timor-Leste',
  value: 'TL'
}, {
  name: 'Togo',
  value: 'TG'
}, {
  name: 'Tokelau',
  value: 'TK'
}, {
  name: 'Tonga',
  value: 'TO'
}, {
  name: 'Trinidad and Tobago',
  value: 'TT'
}, {
  name: 'Tunisia',
  value: 'TN'
}, {
  name: 'Turkey',
  value: 'TR'
}, {
  name: 'Turkmenistan',
  value: 'TM'
}, {
  name: 'Turks and Caicos Islands',
  value: 'TC'
}, {
  name: 'Tuvalu',
  value: 'TV'
}, {
  name: 'Uganda',
  value: 'UG'
}, {
  name: 'Ukraine',
  value: 'UA'
}, {
  name: 'United Arab Emirates',
  value: 'AE'
}, {
  name: 'United Kingdom',
  value: 'GB'
}, {
  name: 'United States',
  value: 'US'
}, {
  name: 'United States Minor Outlying Islands',
  value: 'UM'
}, {
  name: 'Uruguay',
  value: 'UY'
}, {
  name: 'Uzbekistan',
  value: 'UZ'
}, {
  name: 'Vanuatu',
  value: 'VU'
}, {
  name: 'Venezuela',
  value: 'VE'
}, {
  name: 'Viet Nam',
  value: 'VN'
}, {
  name: 'Virgin Islands, British',
  value: 'VG'
}, {
  name: 'Virgin Islands, U.S.',
  value: 'VI'
}, {
  name: 'Wallis and Futuna',
  value: 'WF'
}, {
  name: 'Western Sahara',
  value: 'EH'
}, {
  name: 'Yemen',
  value: 'YE'
}, {
  name: 'Zambia',
  value: 'ZM'
}, {
  name: 'Zimbabwe',
  value: 'ZW'
}];
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['config', 'import', 'move'],
  name: "Index",

  data() {
    return {
      templates: {
        text: 'input',
        file: 'input',
        email: 'input',
        number: 'input',
        hidden: 'input',
        password: 'input',
        range: 'input',
        url: 'input',
        radio: 'input',
        checkbox: 'input',
        textarea: 'textarea',
        button: 'button',
        select: {
          select: 'select',
          option: 'option'
        },
        countries: {
          select: 'select',
          option: 'option'
        },
        paragraph: 'p',
        label: 'label'
      },
      toggle: {},
      defaultConfig: {
        hide: {},
        class: {
          select: 'input',
          countries: 'input',
          button: 'button',
          textarea: 'input',
          buttonType: {
            span: 'span',
            select: 'input'
          }
        },
        action: {
          move: {
            up: '⇧',
            down: '⇩',
            class: null,
            style: 'font-size:16px;cursor:pointer;'
          },
          toggle: {
            show: '⊕',
            hide: '⊖',
            class: null,
            style: 'font-size:16px;cursor:pointer;'
          }
        },
        additional: {
          inputs: {
            style: null,
            class: null
          },
          add: {
            style: 'margin-top:10px'
          },
          remove: {
            style: 'margin-top:10px'
          }
        },
        containerTag: 'div'
      },
      listed: [],
      exported: null
    };
  },

  computed: {
    list() {
      return Object.keys(this.templates);
    },

    hide() {
      return this.defaultConfig.hide;
    },

    count() {
      return this.listed.length;
    },

    action() {
      return this.defaultConfig.action;
    }

  },

  created() {
    this.defaultConfig = Object.assign({}, this.defaultConfig, this.config); // If importing

    if (Array.isArray(this.import)) {
      // populate hide field.
      this.import.forEach((e, i) => {
        this.$set(this.defaultConfig.hide, e.type, []);
        this.$set(this.toggle, i, false);
      });
      this.listed = this.import;
    }
  },

  mounted() {
    const display = this.$refs.display;
    let size = 0;
    display.addEventListener('drop', e => {
      e.preventDefault();
      let type = e.dataTransfer.getData('text'),
          options = null; // Set the default option for radio, checkbox and select

      if (['radio', 'checkbox', 'select'].indexOf(type) >= 0) {
        options = [{
          name: 'Yes',
          value: 1
        }, {
          name: 'No',
          value: 0
        }];
      } // Converts countries to select field.
      else if (type === 'countries') {
          options = countries;
          type = 'select';
        } // Default data for all attributes.


      const data = {
        type,
        required: false,
        name: null,
        label: {
          text: null,
          class: null
        },
        placeholder: null,
        value: null,
        pattern: null,
        autofocus: null,
        autocomplete: null,
        min: null,
        max: null,
        useName: true,
        options,
        multiple: false,
        additionalAttr: [],
        cols: null,
        rows: null,
        maxlength: null,
        readonly: null,
        disabled: null,
        buttonType: 'button',
        content: 'Content',
        class: this.defaultConfig.class[type] || 'input'
      };
      this.$set(this.defaultConfig.hide, type, []);
      this.$set(this.toggle, size, false);
      this.listed.push(data);
      this.$emit('add', data);
      size++;
    }, false);
    display.addEventListener('dragover', e => {
      e.preventDefault();
    }, false);
    display.addEventListener('dragenter', e => {
      e.preventDefault();
    }, false);
    this.$refs.draggable.forEach(e => {
      e.addEventListener('dragstart', e => {
        display.classList.add("drag-start");
        e.dataTransfer.setData("text", e.target.getAttribute('data-id'));
      }, false);
      e.addEventListener('dragend', e => {
        display.classList.remove("drag-start");
      }, false);
    });
  },

  methods: {
    /**
     * Create attributes for each element.
     *
     * @param {Object} e    element data to extract attributes from.
     */
    attributes(e) {
      let attr = {};
      Object.keys(e).forEach(name => {
        // we dont want to add type="select" to select option field
        if (name === 'type' && e.type === 'select' || name === 'content' || name === 'buttonType' && e.type !== 'button') {
          return;
        }

        if (name === 'additionalAttr') {
          e.additionalAttr.forEach(data => {
            attr[data.name] = data.value;
          });
          return;
        } // dont add attributes that is null or not declared.


        if (e[name] !== null && e[name] !== undefined && ['label', 'options', 'useName'].indexOf(name) < 0) {
          // we dont need to set a value for boolean attributes.
          // eg required doesnt need to be required="true"
          if (typeof e[name] === 'boolean') {
            if (e[name]) {
              // eg: required
              attr[name] = '';
            }
          } // since type is a generic attribute the most of the project relys on
          // when we create a button we want to be able to change the type attribute
          // without modifying the generic type, So we set the type attribute using buttonType
          else if (name === 'buttonType' && e.type === 'button') {
              attr['type'] = e[name];
            } else {
              // eg:  placeholder="...";
              attr[name] = e[name];
            }
        }
      });
      return attr;
    },

    /**
     * Moves element to a specific direction(Up or Down)
     *
     * @param {string} direction    The direction(up|down) to move {object}.
     * @param {Object} element      The object to move.
     * @param {number} index        The index of the object being moved.
     */
    moveElement(direction, element, index) {
      const i = direction === 'up' ? index - 1 : index + 1,
            current = this.listed[i];
      this.$set(this.listed, i, this.listed[index]);
      this.$set(this.listed, index, current); // Trigger a callback function if specified

      this.$emit('move', direction, element, index, i);
    },

    /**
     * Extract form data
     *
     * @param {string} type The extraction type(html|json)
     */
    extract(type) {
      if (type === 'html') {
        let html = '';
        this.$refs.exportable.forEach(dom => html += dom.outerHTML.replace('<!---->', '') + "\n");
        this.exported = html;
      } else {
        this.exported = JSON.stringify(this.listed) + "\n";
      }
    }

  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_5cb7703d___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___ = __webpack_require__(0);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(5);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Form_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_5cb7703d___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Form_vue_vue_type_template_id_5cb7703d___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/home/chrysu/Documents/Projects/vue-form-builder/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('5cb7703d', component.options)
    } else {
      api.reload('5cb7703d', component.options)
    }
    module.hot.accept("./Form.vue?vue&type=template&id=5cb7703d&", function () {
      api.rerender('5cb7703d', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5cb7703d___ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5cb7703d___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5cb7703d___["b"]; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "vue-form-gen-main" } }, [
    _c(
      "div",
      { ref: "display", staticClass: "vue-form-gen-builder list" },
      [
        _vm._l(_vm.listed, function(e, i) {
          return [
            _c(
              "fieldset",
              [
                _c("legend", [_vm._v(_vm._s(e.type) + ":")]),
                _vm._v(" "),
                _c(
                  _vm.defaultConfig.containerTag,
                  {
                    ref: "exportable",
                    refInFor: true,
                    tag: "component",
                    staticClass: "vue-form-gen-element"
                  },
                  [
                    e.label.text
                      ? _c("label", {
                          class: e.label.class,
                          domProps: { innerHTML: _vm._s(e.label.text) }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    e.type === "radio" || e.type === "checkbox"
                      ? [
                          _vm._l(e.options, function(el, index) {
                            return [
                              _c(
                                _vm.templates[e.type],
                                _vm._b(
                                  {
                                    tag: "component",
                                    attrs: { id: "radio-" + i + "-" + index }
                                  },
                                  "component",
                                  _vm.attributes(e),
                                  false
                                )
                              ),
                              _vm._v(" "),
                              _c(
                                "label",
                                { attrs: { for: "radio-" + i + "-" + index } },
                                [_vm._v(_vm._s(el.name))]
                              )
                            ]
                          })
                        ]
                      : e.type === "select"
                      ? [
                          _c(
                            _vm.templates[e.type].select,
                            _vm._b(
                              { tag: "comment" },
                              "comment",
                              _vm.attributes(e),
                              false
                            ),
                            _vm._l(e.options, function(el, index) {
                              return _c(
                                _vm.templates[e.type].option,
                                {
                                  key: "radio-" + i + "-" + index,
                                  tag: "component",
                                  attrs: {
                                    value: e.useName ? el.value : el.name
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(el.name) +
                                      "\n                                "
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        ]
                      : e.type === "button"
                      ? [
                          _c(
                            _vm.templates[e.type],
                            _vm._b(
                              {
                                tag: "comment",
                                domProps: { innerHTML: _vm._s(e.content) }
                              },
                              "comment",
                              _vm.attributes(e),
                              false
                            )
                          )
                        ]
                      : e.type === "paragraph" || e.type === "label"
                      ? [
                          _c(
                            _vm.templates[e.type],
                            _vm._b(
                              {
                                tag: "comment",
                                domProps: { innerHTML: _vm._s(e.content) }
                              },
                              "comment",
                              _vm.attributes(e),
                              false
                            )
                          )
                        ]
                      : [
                          _c(
                            _vm.templates[e.type],
                            _vm._b(
                              { tag: "comment" },
                              "comment",
                              _vm.attributes(e),
                              false
                            )
                          )
                        ]
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "vue-form-gen-action" },
                  [
                    _c("span", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.toggle[i],
                          expression: "! toggle[i]"
                        }
                      ],
                      class: _vm.action.toggle.class,
                      style: _vm.action.toggle.style,
                      domProps: { innerHTML: _vm._s(_vm.action.toggle.show) },
                      on: {
                        click: function($event) {
                          _vm.toggle[i] = true
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.toggle[i],
                          expression: "toggle[i]"
                        }
                      ],
                      class: _vm.action.toggle.class,
                      style: _vm.action.toggle.style,
                      domProps: { innerHTML: _vm._s(_vm.action.toggle.hide) },
                      on: {
                        click: function($event) {
                          _vm.toggle[i] = false
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.count > 1
                      ? [
                          i === _vm.count - 1
                            ? _c("span", {
                                class: _vm.action.move.class,
                                style: _vm.action.move.style,
                                domProps: {
                                  innerHTML: _vm._s(_vm.action.move.up)
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.moveElement("up", e, i)
                                  }
                                }
                              })
                            : i === 0
                            ? _c("span", {
                                class: _vm.action.move.class,
                                style: _vm.action.move.style,
                                domProps: {
                                  innerHTML: _vm._s(_vm.action.move.down)
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.moveElement("down", e, i)
                                  }
                                }
                              })
                            : [
                                _c(
                                  "span",
                                  {
                                    class: _vm.action.move.class,
                                    style: _vm.action.move.style,
                                    domProps: {
                                      innerHTML: _vm._s(_vm.action.move.up)
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.moveElement("up", e, i)
                                      }
                                    }
                                  },
                                  [_vm._v("⇑")]
                                ),
                                _vm._v(" "),
                                _c("span", {
                                  class: _vm.action.move.class,
                                  style: _vm.action.move.style,
                                  domProps: {
                                    innerHTML: _vm._s(_vm.action.move.down)
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.moveElement("down", e, i)
                                    }
                                  }
                                })
                              ]
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.toggle[i],
                        expression: "toggle[i]"
                      }
                    ],
                    staticStyle: {
                      "margin-top": "10px",
                      display: "block",
                      padding: "10px",
                      "border-top": "1px solid #ddd"
                    }
                  },
                  [
                    e.type === "paragraph" || e.type === "label"
                      ? [
                          _c("label", [
                            _vm._v(
                              " Content\n                                "
                            ),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: e.content,
                                  expression: "e.content"
                                }
                              ],
                              attrs: { rows: "4", cols: "70" },
                              domProps: { value: e.content },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(e, "content", $event.target.value)
                                }
                              }
                            })
                          ])
                        ]
                      : [
                          _vm.hide[e.type].indexOf("name") < 0
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "vue-form-gen-rendered" },
                                  [
                                    _c("span", [_vm._v("Name")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.name,
                                          expression: "e.name"
                                        }
                                      ],
                                      attrs: { type: "text" },
                                      domProps: { value: e.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            e,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          e.type !== "button"
                            ? [
                                _vm.hide[e.type].indexOf("required") < 0
                                  ? [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "vue-form-gen-rendered"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.required,
                                                expression: "e.required"
                                              }
                                            ],
                                            attrs: {
                                              id: "required" + i,
                                              type: "checkbox"
                                            },
                                            domProps: {
                                              checked: Array.isArray(e.required)
                                                ? _vm._i(e.required, null) > -1
                                                : e.required
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = e.required,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        e,
                                                        "required",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        e,
                                                        "required",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(e, "required", $$c)
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            { attrs: { for: "required" + i } },
                                            [_vm._v("Required")]
                                          )
                                        ]
                                      )
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.hide[e.type].indexOf("label") < 0
                                  ? [
                                      _c("fieldset", [
                                        _c("legend", [_vm._v("Label:")]),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Name")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: { type: "text" },
                                          on: {
                                            keyup: function(t) {
                                              return (e.label.text =
                                                t.target.value)
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Class")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: { type: "text" },
                                          on: {
                                            keyup: function(t) {
                                              return (e.label.class =
                                                t.target.value)
                                            }
                                          }
                                        })
                                      ])
                                    ]
                                  : _vm._e(),
                                _vm._v(" "),
                                e.type === "radio" ||
                                e.type === "checkbox" ||
                                e.type === "select"
                                  ? [
                                      _c(
                                        "fieldset",
                                        [
                                          _c("legend", [_vm._v("Options:")]),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.useName,
                                                expression: "e.useName"
                                              }
                                            ],
                                            attrs: {
                                              type: "checkbox",
                                              id: "option-list" + i
                                            },
                                            domProps: {
                                              checked: Array.isArray(e.useName)
                                                ? _vm._i(e.useName, null) > -1
                                                : e.useName
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = e.useName,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        e,
                                                        "useName",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        e,
                                                        "useName",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(e, "useName", $$c)
                                                }
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              attrs: { for: "option-list" + i }
                                            },
                                            [_vm._v("Use Name as value?")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(e.options, function(
                                            attr,
                                            index
                                          ) {
                                            return _c(
                                              "div",
                                              [
                                                _vm.defaultConfig.additional
                                                  .inputs.type === "checkbox"
                                                  ? _c(
                                                      "input",
                                                      _vm._b(
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: attr.name,
                                                              expression:
                                                                "attr.name"
                                                            }
                                                          ],
                                                          attrs: {
                                                            placeholder: "Name",
                                                            type: "checkbox"
                                                          },
                                                          domProps: {
                                                            checked: Array.isArray(
                                                              attr.name
                                                            )
                                                              ? _vm._i(
                                                                  attr.name,
                                                                  null
                                                                ) > -1
                                                              : attr.name
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              var $$a =
                                                                  attr.name,
                                                                $$el =
                                                                  $event.target,
                                                                $$c = $$el.checked
                                                                  ? true
                                                                  : false
                                                              if (
                                                                Array.isArray(
                                                                  $$a
                                                                )
                                                              ) {
                                                                var $$v = null,
                                                                  $$i = _vm._i(
                                                                    $$a,
                                                                    $$v
                                                                  )
                                                                if (
                                                                  $$el.checked
                                                                ) {
                                                                  $$i < 0 &&
                                                                    _vm.$set(
                                                                      attr,
                                                                      "name",
                                                                      $$a.concat(
                                                                        [$$v]
                                                                      )
                                                                    )
                                                                } else {
                                                                  $$i > -1 &&
                                                                    _vm.$set(
                                                                      attr,
                                                                      "name",
                                                                      $$a
                                                                        .slice(
                                                                          0,
                                                                          $$i
                                                                        )
                                                                        .concat(
                                                                          $$a.slice(
                                                                            $$i +
                                                                              1
                                                                          )
                                                                        )
                                                                    )
                                                                }
                                                              } else {
                                                                _vm.$set(
                                                                  attr,
                                                                  "name",
                                                                  $$c
                                                                )
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "input",
                                                        _vm.defaultConfig
                                                          .additional.inputs,
                                                        false
                                                      )
                                                    )
                                                  : _vm.defaultConfig.additional
                                                      .inputs.type === "radio"
                                                  ? _c(
                                                      "input",
                                                      _vm._b(
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: attr.name,
                                                              expression:
                                                                "attr.name"
                                                            }
                                                          ],
                                                          attrs: {
                                                            placeholder: "Name",
                                                            type: "radio"
                                                          },
                                                          domProps: {
                                                            checked: _vm._q(
                                                              attr.name,
                                                              null
                                                            )
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              return _vm.$set(
                                                                attr,
                                                                "name",
                                                                null
                                                              )
                                                            }
                                                          }
                                                        },
                                                        "input",
                                                        _vm.defaultConfig
                                                          .additional.inputs,
                                                        false
                                                      )
                                                    )
                                                  : _c(
                                                      "input",
                                                      _vm._b(
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value: attr.name,
                                                              expression:
                                                                "attr.name"
                                                            }
                                                          ],
                                                          attrs: {
                                                            placeholder: "Name",
                                                            type:
                                                              _vm.defaultConfig
                                                                .additional
                                                                .inputs.type
                                                          },
                                                          domProps: {
                                                            value: attr.name
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                attr,
                                                                "name",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        },
                                                        "input",
                                                        _vm.defaultConfig
                                                          .additional.inputs,
                                                        false
                                                      )
                                                    ),
                                                _vm._v(" "),
                                                e.useName
                                                  ? [
                                                      _vm.defaultConfig
                                                        .additional.inputs
                                                        .type === "checkbox"
                                                        ? _c(
                                                            "input",
                                                            _vm._b(
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      attr.value,
                                                                    expression:
                                                                      "attr.value"
                                                                  }
                                                                ],
                                                                attrs: {
                                                                  placeholder:
                                                                    "Value",
                                                                  type:
                                                                    "checkbox"
                                                                },
                                                                domProps: {
                                                                  checked: Array.isArray(
                                                                    attr.value
                                                                  )
                                                                    ? _vm._i(
                                                                        attr.value,
                                                                        null
                                                                      ) > -1
                                                                    : attr.value
                                                                },
                                                                on: {
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    var $$a =
                                                                        attr.value,
                                                                      $$el =
                                                                        $event.target,
                                                                      $$c = $$el.checked
                                                                        ? true
                                                                        : false
                                                                    if (
                                                                      Array.isArray(
                                                                        $$a
                                                                      )
                                                                    ) {
                                                                      var $$v = null,
                                                                        $$i = _vm._i(
                                                                          $$a,
                                                                          $$v
                                                                        )
                                                                      if (
                                                                        $$el.checked
                                                                      ) {
                                                                        $$i <
                                                                          0 &&
                                                                          _vm.$set(
                                                                            attr,
                                                                            "value",
                                                                            $$a.concat(
                                                                              [
                                                                                $$v
                                                                              ]
                                                                            )
                                                                          )
                                                                      } else {
                                                                        $$i >
                                                                          -1 &&
                                                                          _vm.$set(
                                                                            attr,
                                                                            "value",
                                                                            $$a
                                                                              .slice(
                                                                                0,
                                                                                $$i
                                                                              )
                                                                              .concat(
                                                                                $$a.slice(
                                                                                  $$i +
                                                                                    1
                                                                                )
                                                                              )
                                                                          )
                                                                      }
                                                                    } else {
                                                                      _vm.$set(
                                                                        attr,
                                                                        "value",
                                                                        $$c
                                                                      )
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              "input",
                                                              _vm.defaultConfig
                                                                .additional
                                                                .inputs,
                                                              false
                                                            )
                                                          )
                                                        : _vm.defaultConfig
                                                            .additional.inputs
                                                            .type === "radio"
                                                        ? _c(
                                                            "input",
                                                            _vm._b(
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      attr.value,
                                                                    expression:
                                                                      "attr.value"
                                                                  }
                                                                ],
                                                                attrs: {
                                                                  placeholder:
                                                                    "Value",
                                                                  type: "radio"
                                                                },
                                                                domProps: {
                                                                  checked: _vm._q(
                                                                    attr.value,
                                                                    null
                                                                  )
                                                                },
                                                                on: {
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.$set(
                                                                      attr,
                                                                      "value",
                                                                      null
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              "input",
                                                              _vm.defaultConfig
                                                                .additional
                                                                .inputs,
                                                              false
                                                            )
                                                          )
                                                        : _c(
                                                            "input",
                                                            _vm._b(
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      attr.value,
                                                                    expression:
                                                                      "attr.value"
                                                                  }
                                                                ],
                                                                attrs: {
                                                                  placeholder:
                                                                    "Value",
                                                                  type:
                                                                    _vm
                                                                      .defaultConfig
                                                                      .additional
                                                                      .inputs
                                                                      .type
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    attr.value
                                                                },
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    if (
                                                                      $event
                                                                        .target
                                                                        .composing
                                                                    ) {
                                                                      return
                                                                    }
                                                                    _vm.$set(
                                                                      attr,
                                                                      "value",
                                                                      $event
                                                                        .target
                                                                        .value
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              "input",
                                                              _vm.defaultConfig
                                                                .additional
                                                                .inputs,
                                                              false
                                                            )
                                                          )
                                                    ]
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  _vm._b(
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return e.options.splice(
                                                            index,
                                                            1
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "button",
                                                    _vm.defaultConfig.additional
                                                      .remove,
                                                    false
                                                  ),
                                                  [_vm._v("⊗")]
                                                )
                                              ],
                                              2
                                            )
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            _vm._b(
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return e.options.push({
                                                      name: null,
                                                      value: null
                                                    })
                                                  }
                                                }
                                              },
                                              "button",
                                              _vm.defaultConfig.additional.add,
                                              false
                                            ),
                                            [_vm._v("Add option")]
                                          )
                                        ],
                                        2
                                      )
                                    ]
                                  : e.type === "textarea"
                                  ? [
                                      _vm.hide[e.type].indexOf("cols") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [_vm._v("Cols")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.cols,
                                                      expression: "e.cols"
                                                    }
                                                  ],
                                                  attrs: { type: "text" },
                                                  domProps: { value: e.cols },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "cols",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hide[e.type].indexOf("rows") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [_vm._v("Rows")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.rows,
                                                      expression: "e.rows"
                                                    }
                                                  ],
                                                  attrs: { type: "text" },
                                                  domProps: { value: e.rows },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "rows",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hide[e.type].indexOf("maxlength") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v("Max Length")
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.maxlength,
                                                      expression: "e.maxlength"
                                                    }
                                                  ],
                                                  attrs: { type: "number" },
                                                  domProps: {
                                                    value: e.maxlength
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "maxlength",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hide[e.type].indexOf("readonly") < 0
                                        ? _c("div", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.readonly,
                                                      expression: "e.readonly"
                                                    }
                                                  ],
                                                  attrs: {
                                                    id: "readonly" + i,
                                                    type: "checkbox"
                                                  },
                                                  domProps: {
                                                    checked: Array.isArray(
                                                      e.readonly
                                                    )
                                                      ? _vm._i(
                                                          e.readonly,
                                                          null
                                                        ) > -1
                                                      : e.readonly
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$a = e.readonly,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = null,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            _vm.$set(
                                                              e,
                                                              "readonly",
                                                              $$a.concat([$$v])
                                                            )
                                                        } else {
                                                          $$i > -1 &&
                                                            _vm.$set(
                                                              e,
                                                              "readonly",
                                                              $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                )
                                                            )
                                                        }
                                                      } else {
                                                        _vm.$set(
                                                          e,
                                                          "readonly",
                                                          $$c
                                                        )
                                                      }
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    attrs: {
                                                      for: "readonly" + i
                                                    }
                                                  },
                                                  [_vm._v("Readonly")]
                                                )
                                              ]
                                            )
                                          ])
                                        : _vm._e()
                                    ]
                                  : [
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("placeholder") <
                                        0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v("Placeholder")
                                                ]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.placeholder,
                                                      expression:
                                                        "e.placeholder"
                                                    }
                                                  ],
                                                  attrs: { type: "text" },
                                                  domProps: {
                                                    value: e.placeholder
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "placeholder",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("min") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [_vm._v("Min")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.min,
                                                      expression: "e.min"
                                                    }
                                                  ],
                                                  attrs: { type: "number" },
                                                  domProps: { value: e.min },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "min",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("max") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [_vm._v("Max")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.max,
                                                      expression: "e.max"
                                                    }
                                                  ],
                                                  attrs: { type: "number" },
                                                  domProps: { value: e.max },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "max",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type === "file" &&
                                      _vm.hide[e.type].indexOf("multiple") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.multiple,
                                                      expression: "e.multiple"
                                                    }
                                                  ],
                                                  attrs: {
                                                    id: e.name + i,
                                                    type: "checkbox"
                                                  },
                                                  domProps: {
                                                    checked: Array.isArray(
                                                      e.multiple
                                                    )
                                                      ? _vm._i(
                                                          e.multiple,
                                                          null
                                                        ) > -1
                                                      : e.multiple
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$a = e.multiple,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = null,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            _vm.$set(
                                                              e,
                                                              "multiple",
                                                              $$a.concat([$$v])
                                                            )
                                                        } else {
                                                          $$i > -1 &&
                                                            _vm.$set(
                                                              e,
                                                              "multiple",
                                                              $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                )
                                                            )
                                                        }
                                                      } else {
                                                        _vm.$set(
                                                          e,
                                                          "multiple",
                                                          $$c
                                                        )
                                                      }
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    attrs: { for: e.name + i }
                                                  },
                                                  [_vm._v("Multiple")]
                                                )
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("default") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [_vm._v("Default")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.value,
                                                      expression: "e.value"
                                                    }
                                                  ],
                                                  attrs: { type: "text" },
                                                  domProps: { value: e.value },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "value",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("pattern") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [_vm._v("Pattern")]),
                                                _vm._v(" "),
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.pattern,
                                                      expression: "e.pattern"
                                                    }
                                                  ],
                                                  attrs: { type: "text" },
                                                  domProps: {
                                                    value: e.pattern
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        e,
                                                        "pattern",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("autofocus") < 0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: e.autofocus,
                                                      expression: "e.autofocus"
                                                    }
                                                  ],
                                                  attrs: {
                                                    id: "autofocus" + i,
                                                    type: "checkbox"
                                                  },
                                                  domProps: {
                                                    checked: Array.isArray(
                                                      e.autofocus
                                                    )
                                                      ? _vm._i(
                                                          e.autofocus,
                                                          null
                                                        ) > -1
                                                      : e.autofocus
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$a = e.autofocus,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = null,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            _vm.$set(
                                                              e,
                                                              "autofocus",
                                                              $$a.concat([$$v])
                                                            )
                                                        } else {
                                                          $$i > -1 &&
                                                            _vm.$set(
                                                              e,
                                                              "autofocus",
                                                              $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                )
                                                            )
                                                        }
                                                      } else {
                                                        _vm.$set(
                                                          e,
                                                          "autofocus",
                                                          $$c
                                                        )
                                                      }
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    attrs: {
                                                      for: "autofocus" + i
                                                    }
                                                  },
                                                  [_vm._v("Autofocus")]
                                                )
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      e.type !== "file" &&
                                      _vm.hide[e.type].indexOf("autocomplete") <
                                        0
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "vue-form-gen-rendered"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v("Autocomplete")
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: e.autocomplete,
                                                        expression:
                                                          "e.autocomplete"
                                                      }
                                                    ],
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          e,
                                                          "autocomplete",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          value: "",
                                                          disabled: "",
                                                          selected: ""
                                                        }
                                                      },
                                                      [_vm._v("Select")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { value: "on" }
                                                      },
                                                      [_vm._v("On")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: { value: "off" }
                                                      },
                                                      [_vm._v("Off")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        : _vm._e()
                                    ]
                              ]
                            : [
                                [
                                  _c(
                                    "div",
                                    { staticClass: "vue-form-gen-rendered" },
                                    [
                                      _vm._m(0, true),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.content,
                                            expression: "e.content"
                                          }
                                        ],
                                        attrs: { type: "text" },
                                        domProps: { value: e.content },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              e,
                                              "content",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ],
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "vue-form-gen-rendered" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        class:
                                          _vm.defaultConfig.class.buttonType
                                            .span
                                      },
                                      [_vm._v("Type:")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.buttonType,
                                            expression: "e.buttonType"
                                          }
                                        ],
                                        class:
                                          _vm.defaultConfig.class.buttonType
                                            .select,
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              e,
                                              "buttonType",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          { attrs: { value: "button" } },
                                          [_vm._v("Button")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "reset" } },
                                          [_vm._v("Reset")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "submit" } },
                                          [_vm._v("Bubmit")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                          _vm._v(" "),
                          _vm.templates[e.type]
                            ? _c("div", [
                                _c(
                                  "div",
                                  { staticClass: "vue-form-gen-rendered" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.disabled,
                                          expression: "e.disabled"
                                        }
                                      ],
                                      attrs: {
                                        id: "disabled" + i,
                                        type: "checkbox"
                                      },
                                      domProps: {
                                        checked: Array.isArray(e.disabled)
                                          ? _vm._i(e.disabled, null) > -1
                                          : e.disabled
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = e.disabled,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  e,
                                                  "disabled",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  e,
                                                  "disabled",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(e, "disabled", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { attrs: { for: "disabled" + i } },
                                      [_vm._v("Disabled")]
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "fieldset",
                            [
                              _c("legend", [_vm._v("Additional Attributes:")]),
                              _vm._v(" "),
                              _vm._l(e.additionalAttr, function(attr, index) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "vue-form-gen-attributes-options"
                                  },
                                  [
                                    _vm.defaultConfig.additional.inputs.type ===
                                    "checkbox"
                                      ? _c(
                                          "input",
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: attr.name,
                                                  expression: "attr.name"
                                                }
                                              ],
                                              attrs: {
                                                placeholder: "Name",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  attr.name
                                                )
                                                  ? _vm._i(attr.name, null) > -1
                                                  : attr.name
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = attr.name,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          attr,
                                                          "name",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          attr,
                                                          "name",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(attr, "name", $$c)
                                                  }
                                                }
                                              }
                                            },
                                            "input",
                                            _vm.defaultConfig.additional.inputs,
                                            false
                                          )
                                        )
                                      : _vm.defaultConfig.additional.inputs
                                          .type === "radio"
                                      ? _c(
                                          "input",
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: attr.name,
                                                  expression: "attr.name"
                                                }
                                              ],
                                              attrs: {
                                                placeholder: "Name",
                                                type: "radio"
                                              },
                                              domProps: {
                                                checked: _vm._q(attr.name, null)
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.$set(
                                                    attr,
                                                    "name",
                                                    null
                                                  )
                                                }
                                              }
                                            },
                                            "input",
                                            _vm.defaultConfig.additional.inputs,
                                            false
                                          )
                                        )
                                      : _c(
                                          "input",
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: attr.name,
                                                  expression: "attr.name"
                                                }
                                              ],
                                              attrs: {
                                                placeholder: "Name",
                                                type:
                                                  _vm.defaultConfig.additional
                                                    .inputs.type
                                              },
                                              domProps: { value: attr.name },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    attr,
                                                    "name",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            },
                                            "input",
                                            _vm.defaultConfig.additional.inputs,
                                            false
                                          )
                                        ),
                                    _vm._v(" "),
                                    _vm.defaultConfig.additional.inputs.type ===
                                    "checkbox"
                                      ? _c(
                                          "input",
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: attr.value,
                                                  expression: "attr.value"
                                                }
                                              ],
                                              attrs: {
                                                placeholder: "Value",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  attr.value
                                                )
                                                  ? _vm._i(attr.value, null) >
                                                    -1
                                                  : attr.value
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a = attr.value,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = null,
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          attr,
                                                          "value",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          attr,
                                                          "value",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(attr, "value", $$c)
                                                  }
                                                }
                                              }
                                            },
                                            "input",
                                            _vm.defaultConfig.additional.inputs,
                                            false
                                          )
                                        )
                                      : _vm.defaultConfig.additional.inputs
                                          .type === "radio"
                                      ? _c(
                                          "input",
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: attr.value,
                                                  expression: "attr.value"
                                                }
                                              ],
                                              attrs: {
                                                placeholder: "Value",
                                                type: "radio"
                                              },
                                              domProps: {
                                                checked: _vm._q(
                                                  attr.value,
                                                  null
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.$set(
                                                    attr,
                                                    "value",
                                                    null
                                                  )
                                                }
                                              }
                                            },
                                            "input",
                                            _vm.defaultConfig.additional.inputs,
                                            false
                                          )
                                        )
                                      : _c(
                                          "input",
                                          _vm._b(
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: attr.value,
                                                  expression: "attr.value"
                                                }
                                              ],
                                              attrs: {
                                                placeholder: "Value",
                                                type:
                                                  _vm.defaultConfig.additional
                                                    .inputs.type
                                              },
                                              domProps: { value: attr.value },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    attr,
                                                    "value",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            },
                                            "input",
                                            _vm.defaultConfig.additional.inputs,
                                            false
                                          )
                                        ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      _vm._b(
                                        {
                                          on: {
                                            click: function($event) {
                                              return e.additionalAttr.splice(
                                                index,
                                                1
                                              )
                                            }
                                          }
                                        },
                                        "button",
                                        _vm.defaultConfig.additional.remove,
                                        false
                                      ),
                                      [_vm._v("⊗")]
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                _vm._b(
                                  {
                                    on: {
                                      click: function($event) {
                                        return e.additionalAttr.push({
                                          name: null,
                                          value: null
                                        })
                                      }
                                    }
                                  },
                                  "button",
                                  _vm.defaultConfig.additional.add,
                                  false
                                ),
                                [_vm._v("Add Attribute")]
                              )
                            ],
                            2
                          )
                        ]
                  ],
                  2
                )
              ],
              1
            )
          ]
        }),
        _vm._v(" "),
        _vm.exported
          ? [
              _c("div", { staticClass: "vue-form-gen-export" }, [
                _c("pre", [_vm._v(_vm._s(_vm.exported))])
              ])
            ]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "vue-form-gen-element-list" },
      [
        _vm._l(_vm.list, function(el) {
          return _c(
            "div",
            {
              key: el,
              ref: "draggable",
              refInFor: true,
              staticClass: "vue-form-gen-draggable",
              attrs: { draggable: "true", "data-id": el }
            },
            [_vm._v("\n                " + _vm._s(el) + "\n            ")]
          )
        }),
        _vm._v(" "),
        _c("div", { staticClass: "vue-form-gen-export-btn" }, [
          _c(
            "button",
            {
              staticClass: "vue-form-gen-button",
              on: {
                click: function($event) {
                  return _vm.extract("html")
                }
              }
            },
            [_vm._v("Extract Html")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "vue-form-gen-button",
              on: {
                click: function($event) {
                  return _vm.extract("json")
                }
              }
            },
            [_vm._v("Extract JSON")]
          )
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_vm._v("Content "), _c("i", [_vm._v("(accepts HTML)")])])
  }
]
render._withStripped = true



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);