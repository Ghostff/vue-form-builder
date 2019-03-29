<template>
    <div id="main">

        <div ref="display" class="builder list"
             style="width:600px;border:1px solid #f00;display:inline-block;min-height:90px;vertical-align:top">

            <template v-for="(e, i) in listed">
                <fieldset>
                    <legend>{{ e.type}}:</legend>

                    <div style="width:90%;display:inline-block;">

                        <label :class="e.label.class">{{ e.label.text }}</label>

                        <!--Radio options-->
                        <template v-if="e.type === 'radio'">
                            <template v-for="(el, index) in e.options">
                                <component :id="`radio-${i}-${index}`" :is="templates[e.type]" v-bind="attributes(e)"></component>
                                <label :for="`radio-${i}-${index}`">{{ el.name }}</label>
                            </template>
                        </template>

                        <!--Selection option-->
                        <template v-if="e.type === 'select'">
                            <comment :is="templates[e.type].select" v-bind="attributes(e)">
                                <component v-for="(el, index) in e.options" :key="`radio-${i}-${index}`" :is="templates[e.type].option" :value="el.value">
                                    {{ el.name }}
                                </component>
                            </comment>
                        </template>

                        <!--Every other input option-->
                       <template v-else>
                           <comment :is="templates[e.type]" v-bind="attributes(e)"></comment>
                       </template>

                    </div>

                    <!--Right bar(Action Icons)-->
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
                        <template v-if="e.type === 'radio' || e.type === 'select'">

                            <fieldset>
                                <legend>Options:</legend>
                                <div v-for="(attr, index) in e.options">
                                    <!--New option name-->
                                    <input v-bind="defaultConfig.additional.inputs" v-model="attr.name" placeholder="Name">
                                    <!--New option value-->
                                    <input v-bind="defaultConfig.additional.inputs" v-model="attr.value" placeholder="Value">
                                    <!--Existing option removal button-->
                                    <button v-bind="defaultConfig.additional.remove" @click="e.options.splice(index, 1)">⊗</button>
                                </div>

                                <!--Adds to option-->
                                <button v-bind="defaultConfig.additional.add" @click="e.options.push({name: null, value: null})">Add option</button>

                            </fieldset>

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
        <!--Side Draggable elements-->
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
                    text: 'input',
                    file: 'input',
                    email: 'input',
                    number: 'input',
                    hidden: 'input',
                    password: 'input',
                    url: 'input',
                    radio: 'input',
                  select: {
                      select: 'select',
                    option: 'option',
                  }
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
                    options: (['radio', 'checkbox', 'select'].indexOf(type) < 0) ? null : [
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
            attributes(e) {
                let attr = {};
              Object.keys(e).forEach(name => {
                if (name === 'additionalAttr') {
                  e.additionalAttr.forEach(data => {
                    attr[data.name] = data.value;
                  });
                  return
                }

                // dont add attributes that is null or not declared.
                if (e[name] !== null && e[name] !== undefined && ['label', 'options'].indexOf(name) < 0) {
                  // we dont need to set a value for boolean attributes.
                  // eg required doesnt need to be required="true"
                  if ((typeof e[name] === 'boolean')) {
                    if (e[name]) {
                      // eg: required
                      attr[name] = '';
                    }
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

