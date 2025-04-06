# ref()

- ref can hold primitive data type (string,number,boolean)   
`const count = ref(0)`

- ref can hold reference data type (Object, Array etc)
```
const person = ref({
  name: 'Danang',
  age: 30
})
```

- ref can handle deeply nested object or array.
```
const listOfBooks = ref([
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
  { id: 4, title: "Book 4", author: { name: "Danang Putra", age: "29" } }
])
```

How to access the value   
`ref[3].value.author.name -> // "Danang Putra"`

- You need access .value when to mutate the variable in `<script>`, you no need to access `.value` to get the value
of variable
```
const person = ref({
  name: 'Danang',
  age: 30
})
```
