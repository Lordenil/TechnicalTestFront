<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Companys
          <RouterLink to="/company/create" class="btn btn-primary float-end"
            >Add Company</RouterLink
          >
        </h4>
      </div>
      <div class="cardbody">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(company, index) in this.companys" :key="index">
              <td>{{ company.id }}</td>
              <td>{{ company.name }}</td>
              <td>{{ company.address }}</td>
              <td>
                <RouterLink
                  :to="{ path: '/company/' + company.id + '/edit' }"
                  class="btn btn-success mx-2"
                >
                  Edit
                </RouterLink>
                <button
                  type="button"
                  @click="deleteCompany(company.id)"
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
  name: "companys",
  data() {
    return {
      companys: [],
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
    deleteCompany(idCompany) {
      if (confirm("Are you sure?")) {
        axios
          .delete(`http://127.0.0.1:8080/company/${idCompany}`)
          .then((res) => {
            alert("Deleted");
            this.getCompanys();
          });
      }
    },
  },
};
</script>
