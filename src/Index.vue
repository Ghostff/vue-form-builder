<template>
    <div id="main">
<!--        Side(Left) Container-->
        <div ref="display" class="builder list"
             style="width:600px;border:1px solid #f00;display:inline-block;min-height:90px;vertical-align:top">

            <template v-for="(e, i) in listed">
                <fieldset>
                    <legend>{{ e.type}}:</legend>

                    <div style="width:90%;display:inline-block;">

                        <label :class="e.label.class">{{ e.label.text }}</label>

                        <!--Radio options-->
                        <template v-if="e.type === 'radio' || e.type === 'checkbox'">
                            <template v-for="(el, index) in e.options">
                                <component :id="`radio-${i}-${index}`" :is="templates[e.type]" v-bind="attributes(e)"></component>
                                <label :for="`radio-${i}-${index}`">{{ el.name }}</label>
                            </template>
                        </template>

                        <!--Selection option-->
                        <template v-else-if="e.type === 'select'">
                            <comment :is="templates[e.type].select" v-bind="attributes(e)">
                                <component v-for="(el, index) in e.options" :key="`radio-${i}-${index}`" :is="templates[e.type].option" :value="e.useName ? el.value : el.name">
                                    {{ el.name }}
                                </component>
                            </comment>
                        </template>
<!--                        <span style="color:red">Click</button>-->
                        <template v-else-if="e.type === 'button'">
                            <comment :is="templates[e.type].tag" v-bind="attributes(e)" v-html="'dsd'">
                            </comment>
                        </template>

                        <!--Every other input option-->
                       <template v-else>
                           <comment :is="templates[e.type]" v-bind="attributes(e)"></comment>
                       </template>

                    </div>

                    <!--Action Icons-->
                    <div style="display:inline-block">

                        <!--Hide/Show Icon on each element-->
                        <span @click="toggle[i] = true" v-show="! toggle[i]" :style="action.toggle.style" :class="action.toggle.class" v-html="action.toggle.show"></span>
                        <span @click="toggle[i] = false" v-show="toggle[i]" :style="action.toggle.style" :class="action.toggle.class" v-html="action.toggle.hide"></span>

                        <!--Move Icon on each element-->
                        <template v-if="count > 1">

                            <!--Show move up icon if last and more than one element exist-->
                            <span @click="moveElement('up', e, i)" v-if="(i === count - 1)" :style="action.move.style" :class="action.move.class" v-html="action.move.up"></span>
                            <!--Show move down icons if first and more than one element exist-->
                            <span @click="moveElement('down', e, i)" v-else-if="(i === 0)" :style="action.move.style" :class="action.move.class" v-html="action.move.down"></span>

                            <!--Show up and down if not first and not last and more than two elements exist-->
                            <template v-else>
                                <span @click="moveElement('up', e, i)" :class="action.move.class" :style="action.move.style" v-html="action.move.up">⇑</span>
                                <span @click="moveElement('down', e, i)" :class="action.move.class" :style="action.move.style" v-html="action.move.down"></span>
                            </template>

                        </template>
                    </div>

                    <!--Attributes Helper. Stays hidden unless toggled-->
                    <div v-show="toggle[i]" style="margin-top:10px;display:block;padding:10px;border-top:1px solid #ddd">

                        <!--Adds Name to current element-->
                        <template v-if="hide[e.type].indexOf('name') < 0">
                            <span>Name</span>
                            <input type="text" @keyup="t => e.name = t.target.value"> <br />
                        </template>

                        <template v-if="e.type !== 'button'">
                            <!--Adds required to current element-->
                            <template v-if="hide[e.type].indexOf('required') < 0">
                                <label :for="e.name + i">Required</label>
                                <input :id="e.name + i" type="checkbox" @change="t => e.required = t.target.checked"> <br/>
                            </template>

                            <!--Adds Label to current element-->
                            <template v-if="hide[e.type].indexOf('label') < 0">
                                <fieldset>
                                    <legend>Label:</legend>
                                    <span>Name</span>
                                    <input type="text" @keyup="t => e.label.text = t.target.value">

                                    <span>Class</span>
                                    <input type="text" @keyup="t => e.label.class = t.target.value">
                                </fieldset>
                            </template>

                            <!--Add/Remove options from select, radio and checkbox element-->
                            <template v-if="e.type === 'radio' || e.type === 'checkbox' || e.type === 'select'">

                                <fieldset>
                                    <legend>Options:</legend>

                                    <input type="checkbox" :id="`option-list${i}`" v-model="e.useName">
                                    <label :for="`option-list${i}`">Use Name as value?</label>

                                    <div v-for="(attr, index) in e.options">
                                        <!--New option name-->
                                        <input v-bind="defaultConfig.additional.inputs" v-model="attr.name" placeholder="Name">
                                        <template v-if="e.useName">
                                            <!--New option value-->
                                            <input v-bind="defaultConfig.additional.inputs" v-model="attr.value" placeholder="Value">
                                        </template>
                                        <!--Existing option removal button-->
                                        <button v-bind="defaultConfig.additional.remove" @click="e.options.splice(index, 1)">⊗</button>
                                    </div>

                                    <!--Adds to option-->
                                    <button v-bind="defaultConfig.additional.add" @click="e.options.push({name: null, value: null})">Add option</button>

                                </fieldset>

                            </template>

                            <template v-else-if="e.type === 'textarea'">

                                <template v-if="hide[e.type].indexOf('cols') < 0">
                                    <span>Cols</span>
                                    <input type="text" @keyup="t => e.cols = t.target.value"> <br/>
                                </template>

                                <template v-if="hide[e.type].indexOf('rows') < 0">
                                    <span>Rows</span>
                                    <input type="text" @keyup="t => e.rows = t.target.value"> <br/>
                                </template>

                                <template v-if="hide[e.type].indexOf('maxlength') < 0">
                                    <span>Max Length</span>
                                    <input type="number" @keyup="t => e.maxlength = t.target.value"> <br/>
                                </template>

                                <div v-if="hide[e.type].indexOf('readonly') < 0">
                                    <label :for="e.name + i">Readonly</label>
                                    <input :id="e.name + i" type="checkbox" @change="t => e.readonly = t.target.checked"> <br/>
                                </div>

                            </template>

                            <!--Every other input attribute-->
                            <template v-else>
                                <!--Adds Placeholder to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('placeholder') < 0">
                                    <span>Placeholder</span>
                                    <input type="text" @keyup="t => e.placeholder = t.target.value"> <br/>
                                </template>

                                <!--Adds min to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('min') < 0">
                                    <span>Min</span>
                                    <input type="number" @keyup="t => e.min = t.target.value"> <br/>
                                </template>

                                <!--Adds max to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('max') < 0">
                                    <span>Max</span>
                                    <input type="number" @keyup="t => e.max = t.target.value"> <br/>
                                </template>

                                <!--Adds multiple to input:file element-->
                                <template v-if="e.type === 'file' && hide[e.type].indexOf('multiple') < 0">
                                    <label :for="e.name + i">Multiple</label>
                                    <input :id="e.name + i" type="checkbox" @change="t => e.multiple = t.target.checked"> <br/>
                                </template>

                                <!--Adds default value to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('default') < 0">
                                    <span>Default</span>
                                    <input type="text" @keyup="t => e.value = t.target.value"> <br/>
                                </template>

                                <!--Adds regex pattern to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('pattern') < 0">
                                    <span>Pattern</span>
                                    <input type="text" @keyup="t => e.pattern = t.target.value"> <br/>
                                </template>

                                <!--Adds auto focus to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('autofocus') < 0">
                                    <label :for="e.name + i">Autofocus</label>
                                    <input :id="e.name + i" type="checkbox" @change="t => e.autofocus = t.target.checked"> <br/>
                                </template>

                                <!--Adds auto complete to input element-->
                                <template v-if="e.type !== 'file' && hide[e.type].indexOf('autocomplete') < 0">
                                    <span>Autocomplete</span>
                                    <select @change="t => e.autocomplete = t.target.value">
                                        <option value="" disabled selected>Select</option>
                                        <option value="on">On</option>
                                        <option value="off">Off</option>
                                    </select>
                                </template>
                            </template>
                        </template>
                        <template v-else>

                            <template>
                                <span>Content</span>
                                <input type="text" v-model="templates[e.type].content"> <br />
                            </template>

                            <label :class="defaultConfig.class.buttonType.span">Type:</label>
                            <select v-model="e.buttonType" :class="defaultConfig.class.buttonType.select">
                                <option value="button">Button</option>
                                <option value="reset">Reset</option>
                                <option value="submit">Bubmit</option>
                            </select>

                        </template>

                        <!--Adds disabled to current element-->
                        <div v-if="templates[e.type]">
                            <label :for="e.name + i">Disabled</label>
                            <input :id="e.name + i" type="checkbox" @change="t => e.disabled = t.target.checked"> <br/>
                        </div>

                        <!--Additional Custom Attributes. Adds a custom attribute to current element-->
                        <fieldset>
                            <legend>Additional Attributes:</legend>
                            <div v-for="(attr, index) in e.additionalAttr">
                                <!--Additional attribute name-->
                                <input v-bind="defaultConfig.additional.inputs" v-model="attr.name" placeholder="Name">
                                <!--Additional attribute value-->
                                <input v-bind="defaultConfig.additional.inputs" v-model="attr.value" placeholder="Value">
                                <!--Additional attribute remove button-->
                                <button v-bind="defaultConfig.additional.remove" @click="e.additionalAttr.splice(index, 1)">⊗</button>
                            </div>
                            <!--Adds new additional attribute-->
                            <button v-bind="defaultConfig.additional.add" @click="e.additionalAttr.push({name: null, value: null})">Add Attribute</button>

                        </fieldset>

                    </div>

                </fieldset>
            </template>

        </div>
        <!--Side(Right) Draggable elements-->
        <div class="list" style="width:300px;border:1px solid #f00;display:inline-block;vertical-align:top">
            <div ref="draggable" draggable="true" class="dragable" v-for="el in list" :data-id="el" :key="el"
                 style="padding:10px;border:1px solid blue">
                {{ el }}
            </div>
        </div>
        <pre>{{ listed }}</pre>


    </div>
</template>

<script>
    const countries = [
        {name: 'Afghanistan', value: 'AF'},
        {name: 'land Islands', value: 'AX'},
        {name: 'Albania', value: 'AL'},
        {name: 'Algeria', value: 'DZ'},
        {name: 'American Samoa', value: 'AS'},
        {name: 'AndorrA', value: 'AD'},
        {name: 'Angola', value: 'AO'},
        {name: 'Anguilla', value: 'AI'},
        {name: 'Antarctica', value: 'AQ'},
        {name: 'Antigua and Barbuda', value: 'AG'},
        {name: 'Argentina', value: 'AR'},
        {name: 'Armenia', value: 'AM'},
        {name: 'Aruba', value: 'AW'},
        {name: 'Australia', value: 'AU'},
        {name: 'Austria', value: 'AT'},
        {name: 'Azerbaijan', value: 'AZ'},
        {name: 'Bahamas', value: 'BS'},
        {name: 'Bahrain', value: 'BH'},
        {name: 'Bangladesh', value: 'BD'},
        {name: 'Barbados', value: 'BB'},
        {name: 'Belarus', value: 'BY'},
        {name: 'Belgium', value: 'BE'},
        {name: 'Belize', value: 'BZ'},
        {name: 'Benin', value: 'BJ'},
        {name: 'Bermuda', value: 'BM'},
        {name: 'Bhutan', value: 'BT'},
        {name: 'Bolivia', value: 'BO'},
        {name: 'Bosnia and Herzegovina', value: 'BA'},
        {name: 'Botswana', value: 'BW'},
        {name: 'Bouvet Island', value: 'BV'},
        {name: 'Brazil', value: 'BR'},
        {name: 'British Indian Ocean Territory', value: 'IO'},
        {name: 'Brunei Darussalam', value: 'BN'},
        {name: 'Bulgaria', value: 'BG'},
        {name: 'Burkina Faso', value: 'BF'},
        {name: 'Burundi', value: 'BI'},
        {name: 'Cambodia', value: 'KH'},
        {name: 'Cameroon', value: 'CM'},
        {name: 'Canada', value: 'CA'},
        {name: 'Cape Verde', value: 'CV'},
        {name: 'Cayman Islands', value: 'KY'},
        {name: 'Central African Republic', value: 'CF'},
        {name: 'Chad', value: 'TD'},
        {name: 'Chile', value: 'CL'},
        {name: 'China', value: 'CN'},
        {name: 'Christmas Island', value: 'CX'},
        {name: 'Cocos (Keeling) Islands', value: 'CC'},
        {name: 'Colombia', value: 'CO'},
        {name: 'Comoros', value: 'KM'},
        {name: 'Congo', value: 'CG'},
        {name: 'Congo, The Democratic Republic of the', value: 'CD'},
        {name: 'Cook Islands', value: 'CK'},
        {name: 'Costa Rica', value: 'CR'},
        {name: 'Cote D"Ivoire', value: 'CI'},
        {name: 'Croatia', value: 'HR'},
        {name: 'Cuba', value: 'CU'},
        {name: 'Cyprus', value: 'CY'},
        {name: 'Czech Republic', value: 'CZ'},
        {name: 'Denmark', value: 'DK'},
        {name: 'Djibouti', value: 'DJ'},
        {name: 'Dominica', value: 'DM'},
        {name: 'Dominican Republic', value: 'DO'},
        {name: 'Ecuador', value: 'EC'},
        {name: 'Egypt', value: 'EG'},
        {name: 'El Salvador', value: 'SV'},
        {name: 'Equatorial Guinea', value: 'GQ'},
        {name: 'Eritrea', value: 'ER'},
        {name: 'Estonia', value: 'EE'},
        {name: 'Ethiopia', value: 'ET'},
        {name: 'Falkland Islands (Malvinas)', value: 'FK'},
        {name: 'Faroe Islands', value: 'FO'},
        {name: 'Fiji', value: 'FJ'},
        {name: 'Finland', value: 'FI'},
        {name: 'France', value: 'FR'},
        {name: 'French Guiana', value: 'GF'},
        {name: 'French Polynesia', value: 'PF'},
        {name: 'French Southern Territories', value: 'TF'},
        {name: 'Gabon', value: 'GA'},
        {name: 'Gambia', value: 'GM'},
        {name: 'Georgia', value: 'GE'},
        {name: 'Germany', value: 'DE'},
        {name: 'Ghana', value: 'GH'},
        {name: 'Gibraltar', value: 'GI'},
        {name: 'Greece', value: 'GR'},
        {name: 'Greenland', value: 'GL'},
        {name: 'Grenada', value: 'GD'},
        {name: 'Guadeloupe', value: 'GP'},
        {name: 'Guam', value: 'GU'},
        {name: 'Guatemala', value: 'GT'},
        {name: 'Guernsey', value: 'GG'},
        {name: 'Guinea', value: 'GN'},
        {name: 'Guinea-Bissau', value: 'GW'},
        {name: 'Guyana', value: 'GY'},
        {name: 'Haiti', value: 'HT'},
        {name: 'Heard Island and Mcdonald Islands', value: 'HM'},
        {name: 'Holy See (Vatican City State)', value: 'VA'},
        {name: 'Honduras', value: 'HN'},
        {name: 'Hong Kong', value: 'HK'},
        {name: 'Hungary', value: 'HU'},
        {name: 'Iceland', value: 'IS'},
        {name: 'India', value: 'IN'},
        {name: 'Indonesia', value: 'ID'},
        {name: 'Iran, Islamic Republic Of', value: 'IR'},
        {name: 'Iraq', value: 'IQ'},
        {name: 'Ireland', value: 'IE'},
        {name: 'Isle of Man', value: 'IM'},
        {name: 'Israel', value: 'IL'},
        {name: 'Italy', value: 'IT'},
        {name: 'Jamaica', value: 'JM'},
        {name: 'Japan', value: 'JP'},
        {name: 'Jersey', value: 'JE'},
        {name: 'Jordan', value: 'JO'},
        {name: 'Kazakhstan', value: 'KZ'},
        {name: 'Kenya', value: 'KE'},
        {name: 'Kiribati', value: 'KI'},
        {name: 'Korea, Democratic People"S Republic of', value: 'KP'},
        {name: 'Korea, Republic of', value: 'KR'},
        {name: 'Kuwait', value: 'KW'},
        {name: 'Kyrgyzstan', value: 'KG'},
        {name: 'Lao People"S Democratic Republic', value: 'LA'},
        {name: 'Latvia', value: 'LV'},
        {name: 'Lebanon', value: 'LB'},
        {name: 'Lesotho', value: 'LS'},
        {name: 'Liberia', value: 'LR'},
        {name: 'Libyan Arab Jamahiriya', value: 'LY'},
        {name: 'Liechtenstein', value: 'LI'},
        {name: 'Lithuania', value: 'LT'},
        {name: 'Luxembourg', value: 'LU'},
        {name: 'Macao', value: 'MO'},
        {name: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
        {name: 'Madagascar', value: 'MG'},
        {name: 'Malawi', value: 'MW'},
        {name: 'Malaysia', value: 'MY'},
        {name: 'Maldives', value: 'MV'},
        {name: 'Mali', value: 'ML'},
        {name: 'Malta', value: 'MT'},
        {name: 'Marshall Islands', value: 'MH'},
        {name: 'Martinique', value: 'MQ'},
        {name: 'Mauritania', value: 'MR'},
        {name: 'Mauritius', value: 'MU'},
        {name: 'Mayotte', value: 'YT'},
        {name: 'Mexico', value: 'MX'},
        {name: 'Micronesia, Federated States of', value: 'FM'},
        {name: 'Moldova, Republic of', value: 'MD'},
        {name: 'Monaco', value: 'MC'},
        {name: 'Mongolia', value: 'MN'},
        {name: 'Montenegro', value: 'ME'},
        {name: 'Montserrat', value: 'MS'},
        {name: 'Morocco', value: 'MA'},
        {name: 'Mozambique', value: 'MZ'},
        {name: 'Myanmar', value: 'MM'},
        {name: 'Namibia', value: 'NA'},
        {name: 'Nauru', value: 'NR'},
        {name: 'Nepal', value: 'NP'},
        {name: 'Netherlands', value: 'NL'},
        {name: 'Netherlands Antilles', value: 'AN'},
        {name: 'New Caledonia', value: 'NC'},
        {name: 'New Zealand', value: 'NZ'},
        {name: 'Nicaragua', value: 'NI'},
        {name: 'Niger', value: 'NE'},
        {name: 'Nigeria', value: 'NG'},
        {name: 'Niue', value: 'NU'},
        {name: 'Norfolk Island', value: 'NF'},
        {name: 'Northern Mariana Islands', value: 'MP'},
        {name: 'Norway', value: 'NO'},
        {name: 'Oman', value: 'OM'},
        {name: 'Pakistan', value: 'PK'},
        {name: 'Palau', value: 'PW'},
        {name: 'Palestinian Territory, Occupied', value: 'PS'},
        {name: 'Panama', value: 'PA'},
        {name: 'Papua New Guinea', value: 'PG'},
        {name: 'Paraguay', value: 'PY'},
        {name: 'Peru', value: 'PE'},
        {name: 'Philippines', value: 'PH'},
        {name: 'Pitcairn', value: 'PN'},
        {name: 'Poland', value: 'PL'},
        {name: 'Portugal', value: 'PT'},
        {name: 'Puerto Rico', value: 'PR'},
        {name: 'Qatar', value: 'QA'},
        {name: 'Reunion', value: 'RE'},
        {name: 'Romania', value: 'RO'},
        {name: 'Russian Federation', value: 'RU'},
        {name: 'RWANDA', value: 'RW'},
        {name: 'Saint Helena', value: 'SH'},
        {name: 'Saint Kitts and Nevis', value: 'KN'},
        {name: 'Saint Lucia', value: 'LC'},
        {name: 'Saint Pierre and Miquelon', value: 'PM'},
        {name: 'Saint Vincent and the Grenadines', value: 'VC'},
        {name: 'Samoa', value: 'WS'},
        {name: 'San Marino', value: 'SM'},
        {name: 'Sao Tome and Principe', value: 'ST'},
        {name: 'Saudi Arabia', value: 'SA'},
        {name: 'Senegal', value: 'SN'},
        {name: 'Serbia', value: 'RS'},
        {name: 'Seychelles', value: 'SC'},
        {name: 'Sierra Leone', value: 'SL'},
        {name: 'Singapore', value: 'SG'},
        {name: 'Slovakia', value: 'SK'},
        {name: 'Slovenia', value: 'SI'},
        {name: 'Solomon Islands', value: 'SB'},
        {name: 'Somalia', value: 'SO'},
        {name: 'South Africa', value: 'ZA'},
        {name: 'South Georgia and the South Sandwich Islands', value: 'GS'},
        {name: 'Spain', value: 'ES'},
        {name: 'Sri Lanka', value: 'LK'},
        {name: 'Sudan', value: 'SD'},
        {name: 'Suriname', value: 'SR'},
        {name: 'Svalbard and Jan Mayen', value: 'SJ'},
        {name: 'Swaziland', value: 'SZ'},
        {name: 'Sweden', value: 'SE'},
        {name: 'Switzerland', value: 'CH'},
        {name: 'Syrian Arab Republic', value: 'SY'},
        {name: 'Taiwan, Province of China', value: 'TW'},
        {name: 'Tajikistan', value: 'TJ'},
        {name: 'Tanzania, United Republic of', value: 'TZ'},
        {name: 'Thailand', value: 'TH'},
        {name: 'Timor-Leste', value: 'TL'},
        {name: 'Togo', value: 'TG'},
        {name: 'Tokelau', value: 'TK'},
        {name: 'Tonga', value: 'TO'},
        {name: 'Trinidad and Tobago', value: 'TT'},
        {name: 'Tunisia', value: 'TN'},
        {name: 'Turkey', value: 'TR'},
        {name: 'Turkmenistan', value: 'TM'},
        {name: 'Turks and Caicos Islands', value: 'TC'},
        {name: 'Tuvalu', value: 'TV'},
        {name: 'Uganda', value: 'UG'},
        {name: 'Ukraine', value: 'UA'},
        {name: 'United Arab Emirates', value: 'AE'},
        {name: 'United Kingdom', value: 'GB'},
        {name: 'United States', value: 'US'},
        {name: 'United States Minor Outlying Islands', value: 'UM'},
        {name: 'Uruguay', value: 'UY'},
        {name: 'Uzbekistan', value: 'UZ'},
        {name: 'Vanuatu', value: 'VU'},
        {name: 'Venezuela', value: 'VE'},
        {name: 'Viet Nam', value: 'VN'},
        {name: 'Virgin Islands, British', value: 'VG'},
        {name: 'Virgin Islands, U.S.', value: 'VI'},
        {name: 'Wallis and Futuna', value: 'WF'},
        {name: 'Western Sahara', value: 'EH'},
        {name: 'Yemen', value: 'YE'},
        {name: 'Zambia', value: 'ZM'},
        {name: 'Zimbabwe', value: 'ZW'}
    ];

    export default {
        props: ['config', 'import', 'move'],
        name: "Index",
        data() {
            return {
                name: 'chrys',
                /*list: [
                  'text',
                  'file',
                  'email',
                  'number',
                  'hidden',
                  'password',
                  'url',
                  'radio',
                  'range',
                  'select',
                  'country',
                  'textarea',
                  'button',
                  'label',
                  'paragraph',
                  'legend',
                ],*/
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
                    button: {
                        tag: 'button',
                        content: 'Button'
                    },
                    select: {
                        select: 'select',
                        option: 'option',
                    },
                    countries: {
                        select: 'select',
                        option: 'option',
                    }
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
                        move: {up: '⇧', down: '⇩', class: null, style: 'font-size:16px;cursor:pointer;'},
                        toggle: {show: '⊕', hide: '⊖', class: null, style: 'font-size:16px;cursor:pointer;'}
                    },
                    additional: {
                        inputs: {
                            style: 'width:44%',
                        },
                        add: {
                            style: 'margin-top:10px'
                        },
                      remove: {
                        style: 'margin-top:10px'
                      }
                    }
                },
                placeholders: {
                    text: {
                        name: 'name',
                        required: true,
                        placeholder: 'First Name',
                    }
                },
                listed: [],
                rendered: ''
            }
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
          this.defaultConfig = Object.assign({}, this.defaultConfig, this.config);
          if (Array.isArray(this.import)) {
              this.listed = this.import;
          }
        },
        mounted() {

            const display = this.$refs.display;
            let size = 0;

            display.addEventListener('drop', e => {
                e.preventDefault();
                let type = e.dataTransfer.getData('text'),
                  options = null;

                if (['radio', 'checkbox', 'select'].indexOf(type) >= 0) {
                    options = [
                        {name: 'Yes', value: 1},
                        {name: 'No', value: 0}
                    ];
                } else if (type === 'countries') {
                    options = countries;
                    type = 'select';
                }


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
                    e.dataTransfer.setData("text", e.target.getAttribute('data-id'));
                }, false);
            });

        },
        methods: {
            attributes(e) {
                let attr = {};
              Object.keys(e).forEach(name => {

                  // we dont want to add type="select" to select option field
                  if (name === 'type' && e.type === 'select') {
                      return;
                  }

                if (name === 'additionalAttr') {
                  e.additionalAttr.forEach(data => {
                    attr[data.name] = data.value;
                  });
                  return
                }

                // dont add attributes that is null or not declared.
                if (e[name] !== null && e[name] !== undefined && ['label', 'options', 'useName'].indexOf(name) < 0) {

                  // we dont need to set a value for boolean attributes.
                  // eg required doesnt need to be required="true"
                  if ((typeof e[name] === 'boolean')) {
                    if (e[name]) {
                      // eg: required
                      attr[name] = '';
                    }
                  }
                  // since type is a generic attribute the most of the project relys on
                    // when we create a button we want to be able to change the type attribute
                    // without modifying the generic type, So we set the type attribute using buttonType
                  else if (name === 'buttonType') {
                    attr['type'] = e[name];
                  } else {
                    // eg:  placeholder="...";
                    attr[name] = e[name];
                  }
                }
              });
                return attr;
            },
            moveElement(direction, element, index) {
                const i = direction === 'up' ? index - 1 : index + 1,
                  current = this.listed[i];

                this.$set(this.listed, i, this.listed[index]);
                this.$set(this.listed, index, current);

                this.$emit('move', direction, element, index, i);
            },

        }
    }
</script>

hasPermission(string|array $permission_name, ?int $event_id)
  if ($event_id)
    count from role.permission.name = $permission_name and role.event = $event_id
  else // for generic
    count from role.permission.name = $permission_name


$role = $event->setPermissions('event_manager', ['index', 'store', 'update', 'show', destroy']);
$user->attach($role)

if (! $user->hasPermission('show', Class:name, $entity->id)) {
    return response(403);
}

