<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Employees
          <RouterLink to="/employee/create" class="btn btn-primary float-end"
            >Add Employee</RouterLink
          >
        </h4>
      </div>
      <div class="cardbody">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Identification</th>
              <th>Mail</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in this.employees" :key="index">
              <td>{{ employee.id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.identification }}</td>
              <td>{{ employee.mail }}</td>
              <td>{{ employee.phone }}</td>
              <td>{{ employee.company.name }}</td>
              <td>
                <RouterLink
                  :to="{ path: '/employee/' + employee.id + '/edit' }"
                  class="btn btn-success mx-2"
                >
                  Edit
                </RouterLink>
                <button
                  type="button"
                  @click="deleteEmployee(employee.id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "employees",
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    getEmployees() {
      axios.get("http://127.0.0.1:8080/employee").then((res) => {
        this.employees = res.data;
      });
    },
    deleteEmployee(idEmployee) {
      if (confirm("Are you sure?")) {
        axios
          .delete(`http://127.0.0.1:8080/employee/${idEmployee}`)
          .then((res) => {
            alert("Deleted");
            this.getEmployees();
          });
      }
    },
  },
};
</script>
