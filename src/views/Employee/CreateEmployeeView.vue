<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Employee</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Name</label>
          <input
            type="text"
            v-model="model.employee.name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">identification</label>
          <input
            type="text"
            v-model="model.employee.identification"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">mail</label>
          <input
            type="text"
            v-model="model.employee.mail"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">phone</label>
          <input
            type="text"
            v-model="model.employee.phone"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">company</label>
          <select
            class="form-select"
            v-model="model.employee.company"
            aria-label="select company"
          >
            <option
              v-for="(company, index) in this.companys"
              :value="company"
              :key="index"
            >
              {{ company.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <button type="button" @click="saveEmployee" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "employeeCreate",
  data() {
    return {
      companys: [],
      model: {
        employee: {
          name: "",
          identification: "",
          mail: "",
          phone: "",
          company: {
            id: "",
            name: "",
            address: "",
          },
        },
      },
    };
  },
  mounted() {
    this.getCompanys();
  },
  methods: {
    getCompanys() {
      axios.get("http://127.0.0.1:8080/company").then((res) => {
        this.companys = res.data;
      });
    },
    saveEmployee() {
      axios
        .post("http://127.0.0.1:8080/employee", this.model.employee)
        .then((res) => {
          this.model.employee = {
            name: "",
            identification: "",
            mail: "",
            phone: "",
            company: {
              id: "",
              name: "",
              address: "",
            },
          };
          alert("Saved");
        });
    },
  },
};
</script>
