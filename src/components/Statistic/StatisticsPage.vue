<template>
<div class="text-white container-fluid px-1 py-1 vh-100 vh-100 d-flex flex-column">
  <div class="row g-1 mt-1 flex-grow-1">
    <div class="col-md-6">
      <div class="h-100 housing-borders">
        <h5 class="text-center mt-1 h4">Воронка продаж</h5>
        <div class="col-md-12" style="height: 27vh">
          <DoughnutChart
              :plugins="[{
    id: 'center-text',
      afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.font = '18px Arial';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('За 26.07.2023', chart.chartArea.left + chart.chartArea.width / 2, chart.chartArea.top + chart.chartArea.height / 2);
      ctx.fillText('3038', chart.chartArea.left + chart.chartArea.width / 2, chart.chartArea.top + chart.chartArea.height / 2 + 20);
    }
  }]"
              :options="{
             responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'right',
        align: 'center',
        labels: {
          font: {
            size: 14,
            weight: 300
          },
          padding: 40,
        },
      }
    },
    cutout: '70%' // adjust the doughnut chart's hole size
  }"
              :data="{
    labels: [],
    datasets: [{
      datalabels: {
        display: false
      },
      data: [10,20,30],
      backgroundColor: ['green', 'yellow', 'aliceblue'],
      hoverOffset: 1,
    }],
  }"
          />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="h-100 housing-borders">
        <h5 class="text-center mt-1 h4">Количество выполненных заказов</h5>
      </div>
    </div>
  </div>
  <div class="row g-1 py-2 flex-grow-1">
    <div class="col-md-6">
      <div class="h-100 housing-borders">
        <h5 class="text-center mt-1 h4">Количество выполненных заказов</h5>
        <div class="col-md-12" style="height: 27vh">
          <DoughnutChart
              :plugins="[{
    id: 'center-text',
      afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.font = '18px Arial';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('За 26.07.2023', chart.chartArea.left + chart.chartArea.width / 2, chart.chartArea.top + chart.chartArea.height / 2);
      ctx.fillText('3038', chart.chartArea.left + chart.chartArea.width / 2, chart.chartArea.top + chart.chartArea.height / 2 + 20);
    }
  }]"
              :options="{
             responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'right',
        align: 'center',
        labels: {
          font: {
            size: 14,
            weight: 300
          },
          padding: 40,
        },
      }
    },
    cutout: '70%' // adjust the doughnut chart's hole size
  }"
              :data="{
    labels: [],
    datasets: [{
      datalabels: {
        display: false
      },
      data: [10,20,30],
      backgroundColor: ['green', 'yellow', 'aliceblue'],
      hoverOffset: 1,
    }],
  }"
          />
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="h-100 housing-borders">
        <h5 class="text-center mt-1 h4">Чистая прибыль</h5>
        <div class="col-md-12" style="height: 27vh">
        <DoughnutChart
            :plugins="[{
    id: 'center-text',
      afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.font = '18px Arial';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('За 26.07.2023', chart.chartArea.left + chart.chartArea.width / 2, chart.chartArea.top + chart.chartArea.height / 2);
      ctx.fillText('3038', chart.chartArea.left + chart.chartArea.width / 2, chart.chartArea.top + chart.chartArea.height / 2 + 20);
    }
  }]"
            :options="{
             responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'right',
        align: 'center',
        labels: {
          font: {
            size: 14,
            weight: 300
          },
          padding: 40,
        },
      }
    },
    cutout: '70%' // adjust the doughnut chart's hole size
  }"
            :data="{
    labels: [],
    datasets: [{
      datalabels: {
        display: false
      },
      data: [10,20,30],
      backgroundColor: ['green', 'yellow', 'aliceblue'],
      hoverOffset: 1,
    }],
  }"
        />
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import DoughnutChart from "@/components/Charts/DoughnutChart";
</script>

<style scoped>

</style>