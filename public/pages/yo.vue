<template>
  <div>
    <div class="red" v-if="newFilterWrapper">
      <h3>create new filter</h3>
      <div>
        <input type="text" v-model="newFilter.filterName" />
        <br />
        <div>
          <h3>values</h3>
          <button v-if="!addValueBar" @click="addValueBar = true">
            add value
          </button>
        </div>
        <div v-if="addValueBar">
          <input type="text" v-model="newValue" />
          <div>
            <button @click="addValueBar = false">cancle</button>
            <button @click="addValue()">add value</button>
          </div>
        </div>
        <span v-for="(value, index) in newFilter.values" :key="index">
          {{ index + 1 }} . {{ value }}
          <br />
        </span>
      </div>
      <button @click="addNewFilter()">cancle</button>
      <button @click="addFilter()">add filter</button>
    </div>
    <div class="filter-management-wrapper">
      <div>filter management for {{ subCategory.name }}</div>
      <div v-for="(filter, index) in subCategory.filters" :key="index">
        <h3>{{ filter.filterName }}</h3>
        <br />
        <span v-for="(value, index) in filter.values" :key="index">
          {{ index + 1 }} . {{ value }}
          <br />
        </span>
        ..................................................
      </div>
    </div>
    <div>
      <button v-if="!newFilterWrapper" @click="addNewFilter()">
        add new filter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newFilterWrapper: false,
      newFilter: {
        filterName: '',
        values: [],
      },
      addValueBar: false,
      newValue: '',
      subCategory: {
        name: 'test',
        filters: [
          {
            filterName: 'size',
            values: ['alksdf', 'alskdfj', 'askdjf'],
          },
          {
            filterName: 'yo',
            values: ['alksdsdf', 'asaldskdfj', 'asasdfkdjf'],
          },
        ],
      },
    }
  },
  methods: {
    addNewFilter() {
      this.newValue = ''
      this.addValueBar = false
      this.newFilterWrapper = !this.newFilterWrapper
      this.newFilter = {
        filterName: '',
        values: [],
      }
    },
    addValue() {
      this.newFilter.values.push(this.newValue)
      this.newValue = ''
      this.addValueBar = false
    },
    addFilter() {
      this.subCategory.filters.push(this.newFilter)
      this.addNewFilter()
    },
  },
}
</script>

<style>
.red {
  background-color: red;
}
</style>
