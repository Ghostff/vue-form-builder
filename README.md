# Vue Form Schema
A two ways drag and drop form builder for Vue.
```js
npm install --save-dev vue-form-schema
```
### Using form schema
This package comes in with a default `dark.css` and `light.css` theme and can always be overriden with your custom style.
```js
import 'vue-form-schema/dist/dark.css';
import VueFormSchema from 'vue-form-schema';

export default {
    components: {
        VueFormSchema
    },
}
```
### Template
```html
<vue-form-schema></vue-form-schema>
```
![Screen Shot](https://github.com/Ghostff/vue-form-builder/blob/master/ss.png)

### Schema Params
```js
<vue-form-schema :config="{}" :import="[]" :template="{}"></vue-form-schema>
```
#Import
Buids a form based on previosly exported JSON.
```js
<div id="app">
  <vue-form-schema :import="from"></vue-form-schema>
</div>
<script>
    import 'vue-form-schema/dist/dark.css';
    import VueFormSchema from 'vue-form-schema';

    export default {
        components: {
            VueFormSchema
        },
        data() {
            return {
                from: [{"type":"text","required":false,"name":"name","label":{"text":"Full Name","class":"input"},"placeholder":"Enter your full name","value":null,"pattern":null,"autofocus":null,"autocomplete":null,"min":"2","max":"6","useName":true,"options":null,"multiple":false,"additionalAttr":[],"cols":null,"rows":null,"maxlength":null,"readonly":null,"disabled":null,"buttonType":"button","content":"Content","class":"input"}]
            }
        }
    }
</script>
```

#### Template
The default component for each of the element type. Eg
```js
// Given were are using something like vue bootstrap
<vue-form-schema :template="{text: 'b-form-input'}"></vue-form-schema>
```
| Name | Default |
| ------ | ------ |
| text | input |
| file | input |
| email | input |
| number | input|
| hidden | input |
| password | input |
| range | input |
| url | input |
| radio | input |
| checkbox | input |
| textarea | textarea |
| button | button |
| select | `select: {select: 'select', option: 'option'}` |
| countries | `select: {select: 'select', option: 'option'}` |
| paragraph | p |
| label | label |

#### Config
| Name | Description | Example |
| ------ | ------ | ------ |
| hide | Element attributes to hide |`hide: {text: ['required', 'name']}` |
| class | Element attributes default class |`class: {select: 'input select class'}` |
| action | Action attributes config | `action: {remove: {icon: 'X'}}` |
| additional | Additional attributes config| `additional: {add: {class: 'add-new-attr-btn'}}`
| containerTag | Each element wraper | `containerTag: 'span'`

Default config:
```js
{
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
        remove: {icon: '⊗', class: null, style: 'font-size:16px;cursor:pointer;color:red'},
        move: {up: '⇧', down: '⇩', class: null, style: 'font-size:16px;cursor:pointer;'},
        toggle: {show: '⊕', hide: '⊖', class: null, style: 'font-size:16px;cursor:pointer;'}
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
}
```
