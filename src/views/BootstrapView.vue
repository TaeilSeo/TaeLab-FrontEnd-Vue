<template>
  <b-container>
    <b-jumbotron
      header="BootstrapVue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit our website</p>
      <b-btn variant="primary" href="https://bootstrap-vue.org/"
        >More Info</b-btn
      >
    </b-jumbotron>

    <b-form-group horizontal :label-cols="4" label="Enter your name">
      <b-form-input v-model.trim="name"></b-form-input>
      <b-alert variant="success" :show="showAlert">Hello {{ name }}</b-alert>
      <label class="form-check-label">
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          사용가능 여부
        </b-form-checkbox>
      </label>
      <div>
        State: <strong>{{ status }}</strong>
      </div>
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected"
        name="flavour-2"
      >
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
      <div>
        Selected: <strong>{{ selected }}</strong>
      </div>
    </b-form-group>
    테스트<br />
    <div>
      <h2>Example heading <b-badge>New</b-badge></h2>
      <h3>Example heading <b-badge>New</b-badge></h3>
      <h4>Example heading <b-badge>New</b-badge></h4>
      <h5>Example heading <b-badge>New</b-badge></h5>
      <h6>Example heading <b-badge>New</b-badge></h6>
    </div>
    <div class="text-center">
      <b-button variant="primary">
        Notifications <b-badge variant="light">4</b-badge>
      </b-button>
    </div>
    <div>
      <b-badge variant="primary">Primary</b-badge>
      <b-badge variant="secondary">Secondary</b-badge>
      <b-badge variant="success">Success</b-badge>
      <b-badge variant="danger">Danger</b-badge>
      <b-badge variant="warning">Warning</b-badge>
      <b-badge variant="info">Info</b-badge>
      <b-badge variant="light">Light</b-badge>
      <b-badge variant="dark">Dark</b-badge>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      status: "",
      selected: [],
    };
  },
  computed: {
    showAlert() {
      return this.name.length > 4 ? true : false;
    },
  },
};
</script>

<style></style>
