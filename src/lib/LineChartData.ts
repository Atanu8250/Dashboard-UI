const labels = ["Week 1", "Week 2", "Week 3", "Week 4", ""];

export const LineData = {
     options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
               y: {
                    ticks: {
                         maxTicksLimit: 6,
                    },
               }
          },
          plugins: {
               legend: {
                    position: 'top' as const,
                    align: 'end' as const,
                    labels: {
                         usePointStyle: true,
                         pointRadius: 2,
                    }
               },
               title: {
                    display: false,
               },
          },
     },

     data: {
          labels,
          datasets: [
               {
                    label: "Guest",
                    data: labels.map(() => Math.floor(Math.random() * 500) + 1),
                    borderColor: "#E9A0A0",
                    backgroundColor: "#E9A0A0",
                    tension: 0.4,
               },
               {
                    label: "User",
                    data: labels.map(() => Math.floor(Math.random() * 500) + 1),
                    borderColor: "#9BDD7C",
                    backgroundColor: "#9BDD7C",
                    tension: 0.4,
               },
          ],
     },
};
