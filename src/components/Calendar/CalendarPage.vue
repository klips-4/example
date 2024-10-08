<template>
  <FullCalendar class="text-white" :options='calendarOptions'>
    <template  v-slot:eventContent='arg'>
      <b class="text-white">{{ arg.timeText }}</b>
      <i class="text-white">{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</template>

<script setup>

import {ref} from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  headerToolbar: {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay'
  },
  height: '100vh',
  initialView: 'dayGridMonth',
  locale: 'ru',
  editable: true,
  dayMaxEvents: true,
  events: [
    {
      title: 'Meeting',
      start: '2024-10-13T11:00:00',
      color: '#257e4a'
    },
    {
      title: 'Meeting',
      start: '2024-10-07T11:00:00',
      end: '2024-10-08T11:00:00',
      color: '#257e4a'
    },
  ]
})
</script>

<style lang="scss">
.fc-col-header-cell-cushion {
  color: #fff; /* белый текст */
}

.fc-daygrid-day-number {
  color: #fff; /* белый текст */
}
</style>