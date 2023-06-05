export const PieData = {
     Options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
               legend: {
                    position: 'right' as const,
                    labels: {
                         usePointStyle: true,
                         pointRadius: 2,
                    }
               }
          },
     },
     data: {
          labels: ["Basic Tees", "Hoodies", "Short Pants"],
          datasets: [
               {
                    label: "Votes",
                    data: [28, 62, 110],
                    backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
                    borderWidth: 0,
               },
          ],
     },
};
