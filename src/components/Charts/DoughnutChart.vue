<template>
  <Doughnut :options="chartOptions" :data="chartData" :plugins="chartPlugins"/>
</template>
<script>
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'vue-chartjs'
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

export default {
  name: 'DoughnutChart',
  components: {Doughnut},
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {
      }
    },
    chartPlugins: {
      type: Array,
      default: () => []
    }
  },
}
</script>