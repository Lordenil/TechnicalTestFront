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
          <button type="button" @click="updateEmployee" class="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "employeeEdit",
  data() {
    return {
      companys: [],
      idEmployee: "",
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
    this.idEmployee = this.$route.params.id;
    this.getCompanys();
    this.getEmployeeData(this.$route.params.id);
  },
  methods: {
    getCompanys() {
      axios.get("http://127.0.0.1:8080/company").then((res) => {
        this.companys = res.data;
      });
    },
    getEmployeeData(idEmployee) {
      axios.get(`http://127.0.0.1:8080/employee/${idEmployee}`).then((res) => {
        this.model.employee = res.data;
      });
    },
    updateEmployee() {
      axios
        .put(
          `http://127.0.0.1:8080/employee/${this.idEmployee}`,
          this.model.employee
        )
        .then((res) => {
          alert("Updated");
        });
    },
  },
};
</script>
