<template>
    <div class="pt-16">
        <h1 class="text-3xl font-semibold mb-4">Enter your phone number</h1>
        <form v-if="!waitingForVerify" action="#" @submit.prevent="handleLogin">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input type="text" name="phone" id="phone" v-maska v-model="data.phone"
                            data-maska="### ##-###-###" placeholder="382 12-345-678"
                            class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none">
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" @submit.prevent="handleLogin"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">Continue</button>
                </div>
            </div>
        </form>
        <form v-else action="#" @submit.prevent="handleVerification">
            <div class="overflow-hidden shadow sm:rounded-md max-w-sm mx-auto text-left">
                <div class="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <input type="text" name="phone" id="phone" v-maska v-model="data.loginCode" data-maska="######"
                            placeholder="111111 "
                            class="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-black focus:outline-none">
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" @submit.prevent="handleVerification"
                        class="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none">Verify</button>
                </div>
            </div>
        </form>

    </div>
</template>

<script setup>
import { vMaska } from "maska/vue"
import { computed, onMounted, reactive, ref } from "vue"
import axios from "axios";
import { useRouter } from 'vue-router';

const router = useRouter()

const data = reactive({
    phone: null,
    loginCode: null,

})

onMounted(() => {
    if (localStorage.getItem("token")) {
        router.push({
            name: "landing"
        })
    }
});

const formatedCredentials = () => {
    return {
        phone: data.phone.replaceAll(' ', '').replace('-', '').replace("-", ""),
        login_code: data.loginCode
    }
};

const waitingForVerify = ref(false);
const handleLogin = () => {
    axios.post("http://127.0.0.1:8000/api/login", formatedCredentials()).then((res) => {
        waitingForVerify.value = true
        console.log(res);
    }).catch((error) => {
        console.log(error)
    });
}

const handleVerification = () => {
    axios.post('http://127.0.0.1:8000/api/login/verify', formatedCredentials()).then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data)
        router.push({
            name: 'landing'
        })
    }).catch((error) => {
        console.log(error)
    });

}


</script>
