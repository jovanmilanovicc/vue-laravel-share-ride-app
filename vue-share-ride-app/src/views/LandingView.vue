<template>
  <div class="pt-16">
    <h1 class="text-3xl font-semibold mb-4">Nekot tamo</h1>
    <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
      <div class="bg-white px-4 py-5 sm:p-6">
        <div class="flex justify-between">
          <button
            @click.prevent="handleStartDriving"
            class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none"
          >
            Pocnite voziti
          </button>
          <button
            @click.prevent="handleFindRide"
            class="rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none"
          >
            Pronadjite voznju
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import instance from "@/config/instance";
import { useRouter } from "vue-router";

const router = useRouter();

const handleFindRide = () => {
  router.push({
    name: "location",
  });
};

const handleStartDriving = () => {
  instance()
    .get("api/driver")
    .then((res) => {
      if (res.data.driver) {
        router.push({
          name: "standby",
        });
      } else {
        router.push({
          name: "driver",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style></style>
