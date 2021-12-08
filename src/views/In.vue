<template>
  <div>
    <div v-for="(schema, i) in schemas" :key="i">
      <div v-show="i === activeSchema">
        <FormulateForm
          v-model="valuesCollection[i]"
          @submit="onSubmit"
          :schema="schema"
        />
      </div>
    </div>
  </div>
</template>

<script>
const schema1 = [
  {
    component: 'h3',
    children: 'Student registration'
  },
  {
    label: 'Your name',
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
    label: 'Student ID',
    name: 'student_id',
    help: 'Your 6 digit student ID (ex. ST-123421)',
    placeholder: 'ST-',
    validation: '^required|matches:/^ST-[\\d]{6}$/',
    'validation-name': 'Student ID'
  },
  {
    type: 'submit',
    label: 'Step 2'
  }
]
const schema2 = [
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
const schema3 = [
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
      schemas: [schema1, schema2, schema3]
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
