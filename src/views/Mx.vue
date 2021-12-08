<template>
  <div class="container">
    <div v-for="(schema, i) in schemas" :key="i">
      <div v-show="i === activeSchema">
        <FormulateForm
          v-model="valuesCollection[i]"
          @submit="onSubmit"
          :schema="schema"
        />
      </div>
    </div>
    <div>
      <pre>
        {{ jsonFormat  }}
      </pre>
    </div>
  </div>
</template>

<script>
const form1 = [
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
    component: 'h1',
    children: 'Family registration'
  },
  {
    label: 'Your Father name',
    name: 'name',
    validation: 'required'
  },
  {
    label: 'Your email*',
    name: 'email',
    help: 'Please use your student email address',
    validation: 'bail|required|email|ends_with:.edu',
    'validation-messages': {
      ends_with: 'Please use a .edu email address'
    }
  },
  {
    type: 'submit',
    label: 'Step 3'
  }
]
const form3 = [
  {
    component: 'h1',
    children: 'Family registration'
  },
  {
    label: 'Your Father name',
    name: 'name',
    validation: 'required'
  },
  {
    label: 'Your email*',
    name: 'email',
    help: 'Please use your student email address',
    validation: 'bail|required|email|ends_with:.edu',
    'validation-messages': {
      ends_with: 'Please use a .edu email address'
    }
  },
  {
    type: 'submit',
    label: 'Submit'
  }
]
export default {
  data () {
    return {
      valuesCollection: [],
      activeSchema: 0,
      schemas: [form1, form2, form3]
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
