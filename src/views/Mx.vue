<template>
  <v-row>
    <v-col>
      <div v-for="(schema, i) in schemas" :key="i">
        <div v-show="i === activeSchema">
          <FormulateForm
            v-model="valuesCollection[i]"
            @submit="onSubmit"
            :schema="schema"
          />
        </div>
      </div>
    </v-col>
    <v-col>
      <div class="black white--text rounded-xl pa-5">
        <pre>{{ jsonFormat  }}</pre>
      </div>
    </v-col>
  </v-row>
</template>

<script>
const form1 = [
  {
    component: 'h3',
    children: 'Task 1: Owners Information'
  },
  {
    type: 'group',
    repeatable: true,
    name: 'addresses',
    addLabel: '+ Address',
    children: [
      {
        name: 'city',
        label: 'City'
      },
      {
        name: 'state',
        type: 'select',
        label: 'State',
        options: {
          va: 'Virginia',
          fl: 'Florida',
          ne: 'Nebraska',
          ca: 'California'
        }
      },
      {
        name: 'zip',
        label: 'Zip'
      }
    ]
  },
  {
    type: 'submit',
    label: 'Next Step'
  }
]
const form2 = [
  {
    component: 'h3',
    children: 'CIEC Code'
  },
  {
    name: 'ciec',
    validation: 'required'
  },
  {
    type: 'submit',
    label: 'Done',
    disabled: true
  }
]
export default {
  data () {
    return {
      valuesCollection: [],
      activeSchema: 0,
      schemas: [form1, form2]
    }
  },
  computed: {
    jsonFormat () {
      return JSON.stringify(this.valuesCollection, null, 2)
    }
  },
  methods: {
    onSubmit () {
      if (this.activeSchema < this.schemas.length - 1) {
        this.activeSchema++
      } else {
        alert(JSON.stringify(this.valuesCollection))
      }
    }
  }
}
</script>
