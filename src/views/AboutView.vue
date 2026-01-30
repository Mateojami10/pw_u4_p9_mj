<template>
    <div>
        <h1>Matricula Cliente</h1>
        <AboutComponent />
        <ConsultarPorIdComponent />
    </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue';
import ConsultarPorIdComponent from '@/components/ConsultarPorIdComponent.vue'; 

export default {
    components: {
        AboutComponent,
        ConsultarPorIdComponent
    }
}
</script>

<style>

</style>