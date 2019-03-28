<template>
    <div id="main">

        <div ref="main" class="builder list" style="width:600px;border:1px solid #f00;display:inline-block;min-height:90px;vertical-align:top"></div>
        <div class="list" style="width:300px;border:1px solid #f00;display:inline-block;vertical-align:top">
            <div ref="draggable" draggable="true" class="dragable" v-for="(el, i) in list" :data-id="i" :key="el" style="padding:10px;border:1px solid blue">
                {{ el }}
            </div>
        </div>


    </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        name:'chrys',
        list: [
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
        ],
        drags: function (e) {
          console.log(e);
        }
      }
    },
    mounted: function () {



      this.$refs.main.addEventListener('drop', e => {
        // e.preventDefault();
        console.log(e.dataTransfer.getData('text'));
      });

      this.$refs.main.addEventListener('ondragover', e => {
        e.preventDefault();
      });

      console.log(this.$refs.main);

      this.$refs.draggable.forEach(e => {
        e.addEventListener('dragstart', e => {
          e.dataTransfer.setData("text", e.target.getAttribute('data-id'));
        });
      });

      this.name = 'sdd'

      // console.log(this.name)

    },
    methods: {
      drop(e) {
        e.preventDefault();
        console.log(e.target);
      },
      drag: function (e) {
        console.log(e);
      },
      allowDrop(ev) {
        ev.preventDefault();
      },
    }
  }
</script>

