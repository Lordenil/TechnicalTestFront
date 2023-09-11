<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edit Company</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="">Name</label>
          <input
            type="text"
            v-model="model.company.name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Address</label>
          <input
            type="text"
            v-model="model.company.address"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <button type="button" @click="updateCompany" class="btn btn-primary">
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
  name: "companyEdit",
  data() {
    return {
      idCompany: "",
      model: {
        company: {
          name: "",
          address: "",
        },
      },
    };
  },
  mounted() {
    this.idCompany = this.$route.params.id;
    this.getCompanyData(this.$route.params.id);
  },
  methods: {
    getCompanyData(idCompany) {
      axios.get(`http://127.0.0.1:8080/company/${idCompany}`).then((res) => {
        this.model.company = res.data;
      });
    },
    updateCompany() {
      axios
        .put(
          `http://127.0.0.1:8080/company/${this.idCompany}`,
          this.model.company
        )
        .then((res) => {
          alert("Updated");
        });
    },
  },
};
</script>
