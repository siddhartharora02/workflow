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
        <pre>{{ valuesCollection  }}</pre>
      </div>
    </v-col>
  </v-row>
</template>

<script>
const form1 = [
  {
    component: 'h3',
    children: 'Task 1: Company Information'
  },
  {
    label: 'Owner Name',
    name: 'name',
    validation: 'required'
  },
  {
    type: 'radio',
    name: 'method',
    label: 'What shipping method would you like?',
    options: [
      { value: 'fedex_overnight', id: 'fedex_overnight', label: 'FedEx overnight' },
      { value: 'fedex_ground', id: 'fedex_ground', label: 'FedEx ground' },
      { value: 'usps', id: 'usps', label: 'US Postal Service' }
    ],
    value: 'fedex_ground',
    'validation-name': 'Shipping method',
    validation: 'required'
  },
  {
    label: 'Your email*',
    name: 'email',
    help: 'Please use your drip email address',
    validation: 'bail|required|email|ends_with:@dripcapital.com',
    'validation-messages': {
      ends_with: 'Please use a @dripcapital.com email address'
    }
  },
  {
    label: 'IEC',
    name: 'iec_code',
    placeholder: 'Please enter IEC code',
    validation: '^required',
    'validation-name': 'IEC Code'
  },
  {
    type: 'submit',
    label: 'Step 2'
  }
]
const form2 = [
  {
    component: 'h3',
    children: 'Task 2: Buyer Information'
  },
  {
    label: 'Buyer Name',
    name: 'name',
    validation: 'required'
  },
  {
    name: 'country',
    type: 'select',
    label: 'Country',
    options: {
      '': 'Please Select',
      mx: 'Mexico',
      in: 'India',
      us: 'USA',
      ec: 'Ecuador'
    }
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
