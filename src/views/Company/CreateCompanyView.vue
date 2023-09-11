<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Company</h4>
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
          <button type="button" @click="saveCompany" class="btn btn-primary">
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
  name: "companyCreate",
  data() {
    return {
      model: {
        company: {
          name: "",
          address: "",
        },
      },
    };
  },
  methods: {
    saveCompany() {
      axios
        .post("http://127.0.0.1:8080/company", this.model.company)
        .then((res) => {
          this.model.company = {
            name: "",
            address: "",
          };
          alert("Saved");
        });
    },
  },
};
</script>
