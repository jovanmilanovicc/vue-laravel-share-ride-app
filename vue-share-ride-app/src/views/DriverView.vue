<template>
  <div class="pt-16">
    <h1 class="text-3xl font-semibold mb-4">Vozac i detalji o vozilu</h1>
    <form action="#" @submit.prevent="handleSaveDriver">
      <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              v-model="driverDetails.name"
              placeholder="Puno ime"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <div class="mt-2">
            <input
              type="number"
              name="year"
              id="year"
              v-model="driverDetails.year"
              placeholder="Godina proizvodnje vozila"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <div class="mt-2">
            <input
              type="text"
              name="make"
              id="make"
              v-model="driverDetails.make"
              placeholder="Marka"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <div class="mt-2">
            <input
              type="text"
              name="model"
              id="model"
              v-model="driverDetails.model"
              placeholder="Model"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <div class="mt-2">
            <input
              type="text"
              name="color"
              id="color"
              v-model="driverDetails.color"
              placeholder="Boja"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
          <div class="mt-2">
            <input
              type="text"
              name="license_plate"
              v-model="driverDetails.license_plate"
              id="license_plate"
              placeholder="Tablice #"
              class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none"
            />
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            @click.prevent="handleSaveDriver"
            class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none"
          >
            Nastavite
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import instance from "@/config/instance";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const driverDetails = reactive({
  name: "",
  year: "",
  make: "",
  model: "",
  color: "",
  licence_plate: "",
});

const handleSaveDriver = () => {
  instance()
    .post("api/driver", driverDetails)
    .then((res) => {
      router.push({
        name: "standby",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style></style>
