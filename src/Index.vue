<template>
    <div id="main">

        <div ref="display" class="builder list"
             style="width:600px;border:1px solid #f00;display:inline-block;min-height:90px;vertical-align:top">

            <template v-for="(e, i) in listed">
                <fieldset>
                    <legend>{{ e.type}}:</legend>

                    <div v-html="renderElements(e, i)" style="width:90%;display:inline-block;"></div>
                    <div style="display:inline-block">
                        <span @click="toggle[i] = true" v-show="! toggle[i]" :style="action.toggle.style" :class="action.toggle.class" v-html="action.toggle.show"></span>
                        <span @click="toggle[i] = false" v-show="toggle[i]" :style="action.toggle.style" :class="action.toggle.class" v-html="action.toggle.hide"></span>

                        <template v-if="count > 1">
                            <span @click="moveElement('up', e, i)" v-if="(i === count - 1)" :style="action.move.style" :class="action.move.class" v-html="action.move.up"></span>
                            <span @click="moveElement('down', e, i)" v-else-if="(i === 0)" :style="action.move.style" :class="action.move.class" v-html="action.move.down"></span>
                            <template v-else>
                                <span @click="moveElement('up', e, i)" :class="action.move.class" :style="action.move.style" v-html="action.move.up">⇑</span>
                                <span @click="moveElement('down', e, i)" :class="action.move.class" :style="action.move.style" v-html="action.move.down"></span>
                            </template>
                        </template>
                    </div>

                    <div v-show="toggle[i]" style="margin-top:10px;display:block;padding:10px;border-top:1px solid #ddd">

                        <template v-if="hide[e.type].indexOf('name') < 0">
                            <span>Name</span>
                            <input type="text" @keyup="t => e.name = t.target.value"> <br />
                        </template>

                        <template v-if="hide[e.type].indexOf('required') < 0">
                            <label :for="e.name + i">Required</label>
                            <input :id="e.name + i" type="checkbox" @change="t => e.required = t.target.checked"> <br/>
                        </template>

                        <template v-if="hide[e.type].indexOf('label') < 0">
                            <fieldset>
                                <legend>Label:</legend>
                                <span>Name</span>
                                <input type="text" @keyup="t => e.label.text = t.target.value">

                                <span>Class</span>
                                <input type="text" @keyup="t => e.label.class = t.target.value">
                            </fieldset>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('placeholder') < 0">
                            <span>Placeholder</span>
                            <input type="text" @keyup="t => e.placeholder = t.target.value"> <br/>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('min') < 0">
                            <span>Min</span>
                            <input type="number" @keyup="t => e.min = t.target.value"> <br/>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('max') < 0">
                            <span>Max</span>
                            <input type="number" @keyup="t => e.max = t.target.value"> <br/>
                        </template>

                        <template v-if="e.type === 'file' && hide[e.type].indexOf('multiple') < 0">
                            <label :for="e.name + i">Multiple</label>
                            <input :id="e.name + i" type="checkbox" @change="t => e.multiple = t.target.checked"> <br/>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('default') < 0">
                            <span>Default</span>
                            <input type="text" @keyup="t => e.value = t.target.value"> <br/>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('pattern') < 0">
                            <span>Pattern</span>
                            <input type="text" @keyup="t => e.pattern = t.target.value"> <br/>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('autofocus') < 0">
                            <label :for="e.name + i">Autofocus</label>
                            <input :id="e.name + i" type="checkbox" @change="t => e.autofocus = t.target.checked"> <br/>
                        </template>

                        <template v-if="e.type !== 'file' && hide[e.type].indexOf('autocomplete') < 0">
                            <span>Autocomplete</span>
                            <select @change="t => e.autocomplete = t.target.value">
                                <option value="" disabled selected>Select</option>
                                <option value="on">On</option>
                                <option value="off">Off</option>
                            </select>
                        </template>

                        <fieldset>
                            <legend>Additional Attributes:</legend>
                            <div v-for="(attr, index) in e.additionalAttr">
                                <input v-bind="defaultConfig.additional.inputs" v-model="attr.name" placeholder="Name">
                                <input v-bind="defaultConfig.additional.inputs" v-model="attr.value" placeholder="Value">
                                <button v-bind="defaultConfig.additional.button" @click="e.additionalAttr.splice(index, 1)">⊗</button>
                            </div>

                            <button style="margin-top:10px" @click="e.additionalAttr.push({name: null, value: null})">Add Attribute</button>

                        </fieldset>


                    </div>

                </fieldset>
            </template>

        </div>
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
                    text: '<input :attr>',
                    file: '<input :attr>',
                    email: '<input :attr>',
                    number: '<input :attr>',
                    hidden: '<input :attr>',
                    password: '<input :attr>',
                    url: '<input :attr>',
                    radio: '<input :attr>',
                },
                toggle: {},
                defaultConfig: {
                    hide: {},
                    class: {
                        text: 'input',
                    },
                    action: {
                        move: {up: '⇧', down: '⇩', class: null, style: 'font-size:16px;cursor:pointer;'},
                        toggle: {show: '⊕', hide: '⊖', class: null, style: 'font-size:16px;cursor:pointer;'}
                    },
                    additional: {
                        inputs: {
                            style: 'width:44%',
                        },
                        button: {
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
        mounted: function () {

            const display = this.$refs.display;
            let size = 0;

            display.addEventListener('drop', e => {
                e.preventDefault();
                const type = e.dataTransfer.getData('text'),
                data = {
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
                    options: [
                        {name: 'Yes', value: 1},
                        {name: 'No', value: 0}
                    ],
                    multiple: false,
                    additionalAttr: [],
                    class: this.defaultConfig.class[type]
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
            renderElements(e, i) {

                let rendered = '';
                rendered += this.beforeAttributes(e);
                if (e.type === 'radio') {
                    e.options
                }
                rendered += this.templates[e.type].replace(':attr', this.attributes(e));
                rendered += this.afterAttributes(e);

                return rendered;
            },
            beforeAttributes(e) {
                let attr = '';
                if (e.label.text) {
                    attr += `<span class="${e.label.class || ''}">${e.label.text}</span>`;
                }

                return attr;
            },
            attributes(e) {
                let attr = '';
                for (const key in e) {
                    if (key === 'additionalAttr') {
                        e.additionalAttr.forEach(data => {
                            attr += ` ${data.name}="${data.value}"`
                        });
                        continue;
                    }

                    // dont add attributes that is null or not declared.
                    if (e[key] !== null && e[key] !== undefined && key !== 'label') {
                        // we dont need to set a value for boolean attributes.
                        // eg required doesnt need to be required="true"
                        if ((typeof e[key] === 'boolean')) {
                            if (e[key]) {
                                // eg: required
                                attr += ` ${key}`
                            }
                        } else {
                            // eg:  placeholder="...";
                            attr += ` ${key}="${e[key]}"`
                        }
                    }
                }

                return attr;
            },
            moveElement(direction, element, index) {
                const i = direction === 'up' ? index - 1 : index + 1,
                  current = this.listed[i];

                this.$set(this.listed, i, this.listed[index]);
                this.$set(this.listed, index, current);

                this.$emit('move', direction, element, index, i);
            },
            afterAttributes() {
                let attr = '';


                return attr;
            },

        }
    }
</script>

